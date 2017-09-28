/**
 *
 *  OpenUI5 Visualization Control Library
 *  Copyright 2017 PulseShift GmbH. All rights reserved.
 *
 *  Licensed under the MIT License.
 *
 *  This file makes use of new JavaScript features.
 *  Babel handles this without us having to do anything. It just works.
 *  You can read more about the new JavaScript features here:
 *  https://babeljs.io/docs/learn-es2015/
 *
 */

import pkg from './package.json'
import gulp from 'gulp'
import gutil from 'gulp-util'
import gulpif from 'gulp-if'
import rename from 'gulp-rename'
import plumber from 'gulp-plumber'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import htmlmin from 'gulp-htmlmin'
import prettydata from 'gulp-pretty-data'
import imagemin from 'gulp-imagemin'
import cleanCSS from 'gulp-clean-css'
import less from 'gulp-less'
import tap from 'gulp-tap'
import sourcemaps from 'gulp-sourcemaps'
import ui5preload from 'gulp-ui5-preload'
import { ui5CompileLessLib } from 'ui5-lib-util'
import LessAutoprefix from 'less-plugin-autoprefix'
import ora from 'ora'
import del from 'del'
import path from 'path'
import commander from 'commander'
import server from 'browser-sync'

/*
 * SETUP SCRIPT RUNTIME ENVIRONMENT
 */

// parse program commands
commander
  .version(pkg.version)
  .option('--silent')
  .parse(process.argv)

const spinner = ora()

// switch between gulp log and custom log
spinner.enabled = commander.silent
spinner.print = sText => spinner.stopAndPersist({ text: sText })

/*
 * CONFIGURATION
 */

// path to source directory
const SRC = 'src'
// path to development directory
const DEV = '.tmp'
// path to ditribution direcory
const DIST = 'dist'

// paths used in our app
const paths = {
  assets: {
    src: [
      `${SRC}/**/*.properties`,
      `${SRC}/**/*.json`,
      `${SRC}/**/*.{xml,html}`,
      `${SRC}/**/*.{jpg,jpeg,png,svg,ico}`
    ]
  },
  scripts: {
    src: [`${SRC}/**/*.js`]
  }
}

/**
 * Gulp 'start' task (development mode).
 * @description Call update and start file watcher.
 * @public
 */
const start = gulp.series(
  logStart,
  clean,
  gulp.parallel(assets, scripts, ui5LibThemeBundle),
  logStats,
  watch
)

// log start message and start spinner
function logStart(done) {
  spinner.print(' ')
  spinner.start('Start development server...')
  done()
}

// log start statistics and stop spinner
function logStats(done) {
  const iLibs = (pkg.ui5.libraries || []).length

  // print success message
  spinner
    .succeed(
      'Development server started, use Ctrl+C to stop and go back to the console...'
    )
    .print(' ')
    .print('UI5 assets:')
    .print(`\u{25FB}  ${iLibs} librar${iLibs !== 1 ? 'ies' : 'y'}`)
    .print(' ')
  done()
}
export default start

/**
 * Gulp 'build' task (distribution mode).
 * @description Build the complete app to run in production environment.
 * @public
 */
const build = gulp.series(
  logStartDist,
  cleanDist,
  gulp.parallel(assetsDist, scriptsDist, ui5LibThemeBundleDist),
  gulp.parallel(ui5LibPreloads),
  logStatsDist
)

// log start build message and start spinner
function logStartDist(done) {
  spinner.print(' ')
  spinner.start('Build start...')
  done()
}

// log build statistics and stop spinner
function logStatsDist(done) {
  const iLibs = (pkg.ui5.libraries || []).length

  // print success message
  spinner
    .succeed('Build successfull.')
    .print(' ')
    .print(`Build output: ${path.resolve(__dirname, DIST)}`)
    .print(' ')
    .print('UI5 assets created:')
    .print(`\u{25FB}  ${iLibs} librar${iLibs !== 1 ? 'ies' : 'y'}`)
    .print(' ')
  done()
}
export { build }

/* ----------------------------------------------------------- *
 * watch files for changes
 * ----------------------------------------------------------- */

// [development build]
function watch() {
  const sSuccessMessage =
    '\u{1F64C}  (Server started, use Ctrl+C to stop and go back to the console...)'
  const aWatchLibThemeSrc = pkg.ui5.libraries.map(
    oLibrary => `${oLibrary.path}/**/*.less`
  )

  // start watchers
  gulp.watch(paths.assets.src, gulp.series(assets, reload))
  gulp.watch(paths.scripts.src, gulp.series(scripts, reload))
  gulp.watch(aWatchLibThemeSrc, gulp.series(ui5LibThemeBundle, reload))

  // start HTTP server
  server.init({
    // learn more about the powerful options (proxy, middleware, etc.) here:
    // https://www.browsersync.io/docs/options
    port: 3000,
    server: {
      baseDir: `./${DEV}`,
      index: 'demo/index.html',
      routes: {
        '/ui5': './ui5'
      }
    }
    // proxy: 'yourlocal.dev'
  })

  // log success message
  gutil.log(gutil.colors.green(sSuccessMessage))
}

// [production build]
export function testDist() {
  const sSuccessMessage =
    '\u{1F64C}  (Server started, use Ctrl+C to stop and go back to the console...)'

  // start HTTP server
  server.init({
    port: 3000,
    server: {
      baseDir: `./${DIST}`,
      routes: {
        '/ui5': './ui5'
      }
    }
  })

  // log success message
  gutil.log(gutil.colors.green(sSuccessMessage))
}

/* ----------------------------------------------------------- *
 * reload browser
 * ----------------------------------------------------------- */

// [development build]
function reload(done) {
  server.reload()
  done()
}

/* ----------------------------------------------------------- *
 * clean development directory
 * ----------------------------------------------------------- */

// [development build]
function clean() {
  return del(`${DEV}/**/*`)
}

// [production build]
function cleanDist() {
  return del(`${DIST}/**/*`)
}

/* ----------------------------------------------------------- *
 * copy assets to destination folder (.png, .jpg, .json, ...)
 * ----------------------------------------------------------- */

// [development build]
function assets() {
  return (
    gulp
      .src(
        paths.assets.src,
        // select only files that have changed since the last run
        { since: gulp.lastRun(assets) }
      )
      // don't exit the running watcher task on errors
      .pipe(plumber())
      // optimize size and quality of images
      .pipe(
        gulpif(
          /.*\.(jpg|jpeg|png)$/,
          imagemin({
            progressive: true,
            interlaced: true
          })
        )
      )
      .pipe(gulp.dest(DEV))
  )
}

// [production build]
function assetsDist() {
  return (
    gulp
      .src(paths.assets.src)
      // optimize size and quality of images
      .pipe(
        gulpif(
          /.*\.(jpg|jpeg|png)$/,
          imagemin({
            progressive: true,
            interlaced: true
          })
        )
      )
      // minify XML, SVG and JSON
      .pipe(
        gulpif(
          /.*\.(xml|json|svg)$/,
          prettydata({
            type: 'minify',
            extensions: {
              svg: 'xml'
            }
          })
        )
      )
      // minify HTML
      .pipe(gulpif(/.*\.html$/, htmlmin()))
      .pipe(gulp.dest(DIST))
  )
}

/* ----------------------------------------------------------- *
 * process scripts and transpiles ES2015 code to ES5 (.js, ...)
 * ----------------------------------------------------------- */

// [development build]
function scripts() {
  return (
    gulp
      .src(
        paths.scripts.src,
        // select only files that have changed since the last run
        { since: gulp.lastRun(scripts) }
      )
      // don't exit the running watcher task on errors
      .pipe(plumber())
      .pipe(sourcemaps.init())
      // babel will run with the settings defined in `.babelrc` file
      .pipe(babel())
      .pipe(sourcemaps.write('../.maps'))
      .pipe(gulp.dest(DEV))
  )
}

// [production build]
function scriptsDist() {
  return (
    gulp
      .src(paths.scripts.src)
      // babel will run with the settings defined in `.babelrc` file
      .pipe(babel())
      // save non-minified copies with debug duffix
      .pipe(rename({ suffix: '-dbg' }))
      .pipe(gulp.dest(DIST))
      // process copies without suffix
      .pipe(
        rename(oFile => {
          oFile.basename = oFile.basename.replace(/-dbg$/, '')
          return oFile
        })
      )
      // minify scripts
      .pipe(uglify())
      .pipe(gulp.dest(DIST))
  )
}

/* ----------------------------------------------------------- *
 * bundle library resources in library-preload.js file
 * ----------------------------------------------------------- */

// [production build]
function ui5LibPreloads() {
  // update spinner state
  spinner.text = 'Bundling modules...'

  const aPreloadPromise = pkg.ui5.libraries.map(oLibrary => {
    const sDistLibraryPath = oLibrary.path.replace(new RegExp(`^${SRC}`), DIST)
    return new Promise(function(resolve, reject) {
      gulp
        .src([
          // bundle all library resources
          `${sDistLibraryPath}/**/*.js`,
          `${sDistLibraryPath}/**/*.json`,
          // don't bundle debug or peload resources
          `!${sDistLibraryPath}/**/*-dbg.js`,
          `!${sDistLibraryPath}/**/*-preload.js`
        ])
        .pipe(
          ui5preload({
            base: sDistLibraryPath,
            namespace: oLibrary.name,
            // if set to true a library-preload.json file is emitted
            isLibrary: true
          })
        )
        // transform all library-preload.json files into library-preload.js (mandatory since OpenUI5 1.40)
        .pipe(
          gulpif(
            '**/library-preload.json',
            tap(oFile => {
              const oJSONRaw = oFile.contents.toString('utf8')
              oFile.contents = new Buffer(
                `jQuery.sap.registerPreloadedModules(${oJSONRaw});`
              )
              return oFile
            })
          )
        )
        .pipe(gulpif('**/library-preload.json', rename({ extname: '.js' })))
        .on('error', reject)
        .pipe(gulp.dest(sDistLibraryPath))
        .on('end', resolve)
    })
  })
  return Promise.all(aPreloadPromise)
}

/* ----------------------------------------------------------- *
 * bundle theme styles in library.css file
 * ----------------------------------------------------------- */

// [development build]
function ui5LibThemeBundle() {
  const mapPathToDev = sPath => sPath.replace(new RegExp(`^${SRC}`), DEV)
  const aSelectThemeLessFiles = pkg.ui5.libraries.map(
    oLibrary => `${oLibrary.path}/**/*.less`
  )
  const aSelectLibrarySources = pkg.ui5.libraries.map(
    oLibrary => `${mapPathToDev(oLibrary.path)}/**/library.source.less`
  )

  return new Promise((resolve, reject) => {
    // 1. copy theme resources (assets) to DEV
    gulp
      .src(aSelectThemeLessFiles, {
        base: SRC,
        // filter out unchanged files between runs
        since: gulp.lastRun(ui5LibThemeBundle)
      })
      // don't exit the running watcher task on errors
      .pipe(plumber())
      .pipe(gulp.dest(DEV))
      .on('error', reject)
      .on('end', resolve)
  }).then(
    () =>
      new Promise((resolve, reject) => {
        // 2. compile library.css
        gulp
          .src(aSelectLibrarySources, {
            base: DEV,
            read: true,
            // filter out unchanged files between runs
            since: gulp.lastRun(ui5LibThemeBundle)
          })
          // don't exit the running watcher task on errors
          .pipe(plumber())
          .pipe(
            tap(oFile => {
              ui5CompileLessLib(oFile)
            })
          )
          .pipe(gulp.dest(DEV))
          .on('error', reject)
          .on('end', resolve)
      })
  )
}

// [production build]
function ui5LibThemeBundleDist() {
  const mapPathToDist = sPath => sPath.replace(new RegExp(`^${SRC}`), DIST)
  const aSelectThemeLessFiles = pkg.ui5.libraries.map(
    oLibrary => `${oLibrary.path}/**/*.less`
  )
  const aSelectLibrarySources = pkg.ui5.libraries.map(
    oLibrary => `${mapPathToDist(oLibrary.path)}/**/library.source.less`
  )
  const aSelectLibraryBundles = pkg.ui5.libraries.reduce(
    (aBundles, oLibrary) =>
      aBundles.concat([
        `${mapPathToDist(oLibrary.path)}/**/library.css`,
        `${mapPathToDist(oLibrary.path)}/**/library-RTL.css`
      ]),
    []
  )

  return new Promise((resolve, reject) => {
    // 1. copy theme resources (assets) to DEV
    gulp
      .src(aSelectThemeLessFiles, {
        base: SRC,
        // select only files that have changed since the last run
        since: gulp.lastRun(ui5LibThemeBundleDist)
      })
      .pipe(gulp.dest(DIST))
      .on('error', reject)
      .on('end', resolve)
  })
    .then(
      () =>
        new Promise((resolve, reject) => {
          // 2. compile library.css
          gulp
            .src(aSelectLibrarySources, {
              read: true,
              base: DIST,
              // select only files that have changed since the last run
              since: gulp.lastRun(ui5LibThemeBundleDist)
            })
            .pipe(
              tap(oFile => {
                ui5CompileLessLib(oFile)
              })
            )
            .pipe(gulp.dest(DIST))
            .on('error', reject)
            .on('end', resolve)
        })
    )
    .then(
      () =>
        new Promise((resolve, reject) =>
          // 3. minify css after creation
          gulp
            .src(aSelectLibraryBundles, {
              base: DIST,
              // select only files that have changed since the last run
              since: gulp.lastRun(ui5LibThemeBundleDist)
            })
            // minify CSS
            .pipe(
              cleanCSS({
                inline: ['none'],
                level: 2
              })
            )
            .pipe(gulp.dest(DIST))
            .on('end', resolve)
            .on('error', reject)
        )
    )
}
