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
// import ui5Bust from 'ui5-cache-buster'
// import { ui5Download, ui5Build } from 'ui5-lib-util'
import LessAutoprefix from 'less-plugin-autoprefix'
import ora from 'ora'
import del from 'del'
import path from 'path'
// // import fs from 'fs'
import commander from 'commander'
import server from 'browser-sync'
// import handlebars from 'handlebars'
// import gulpHandlebars from 'gulp-handlebars-html'

/*
 * SETUP SCRIPT RUNTIME ENVIRONMENT
 */

// parse program commands
commander
  .version(pkg.version)
  .option('--silent')
  .parse(process.argv)

// const hdlbars = gulpHandlebars(handlebars)
const spinner = ora()

// // register handlebars helper function
// handlebars.registerHelper('secure', function(str) {
//   return new handlebars.SafeString(str)
// })

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
  },
  styles: {
    src: [`${SRC}/**/*.less`]
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
  gulp.parallel(assets, scripts, styles),
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
  // const sSourceID = pkg.ui5.src
  // const oSource = pkg.ui5.srcLinks[sSourceID]
  // const sUI5Version = oSource.version
  // const sOnlineUI5State =
  //   !oSource.isArchive && oSource.isPrebuild ? '(remote)' : ''
  // const sUI5Details = !oSource.isPrebuild ? '(custom build)' : sOnlineUI5State

  // const iApps = (pkg.ui5.apps || []).length
  // const iThemes = (pkg.ui5.themes || []).length
  const iLibs = (pkg.ui5.libraries || []).length

  // print success message
  spinner
    .succeed(
      'Development server started, use Ctrl+C to stop and go back to the console...'
    )
    // .print(' ')
    // .print(`UI5 Version: ${sUI5Version} ${sUI5Details}`)
    .print(' ')
    .print('UI5 assets:')
    // .print(`\u{25FB}  ${iApps} app${iApps !== 1 ? 's' : ''}`)
    // .print(`\u{25FB}  ${iThemes} theme${iThemes !== 1 ? 's' : ''}`)
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
  gulp.parallel(assetsDist, scriptsDist, stylesDist),
  ui5LibPreloads,
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
  // const sSourceID = pkg.ui5.src
  // const oSource = pkg.ui5.srcLinks[sSourceID]
  // const sUI5Version = oSource.version
  // const sOnlineUI5State =
  //   !oSource.isArchive && oSource.isPrebuild ? '(remote)' : ''
  // const sUI5Details = !oSource.isPrebuild ? '(custom build)' : sOnlineUI5State

  // const iApps = (pkg.ui5.apps || []).length
  // const iThemes = (pkg.ui5.themes || []).length
  const iLibs = (pkg.ui5.libraries || []).length

  // print success message
  spinner
    .succeed('Build successfull.')
    .print(' ')
    // .print(`Build entry: ${pkg.main}`)
    .print(`Build output: ${path.resolve(__dirname, DIST)}`)
    // .print(' ')
    // .print(`UI5 Version: ${sUI5Version} ${sUI5Details}`)
    .print(' ')
    .print('UI5 assets created:')
    // .print(`\u{25FB}  ${iApps} app${iApps !== 1 ? 's' : ''}`)
    // .print(`\u{25FB}  ${iThemes} theme${iThemes !== 1 ? 's' : ''}`)
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

  // start watchers
  gulp.watch(paths.assets.src, gulp.series(assets, reload))
  gulp.watch(paths.scripts.src, gulp.series(scripts, reload))
  gulp.watch(paths.styles.src, gulp.series(styles, reload))

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
        // filter out unchanged files between runs
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
        // filter out unchanged files between runs
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
 * compile and automatically prefix stylesheets (.less, ...)
 * ----------------------------------------------------------- */

// [development build]
function styles() {
  const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] })
  return (
    gulp
      .src(
        paths.styles.src,
        // filter out unchanged files between runs
        { since: gulp.lastRun(styles) }
      )
      // don't exit the running watcher task on errors
      .pipe(plumber())
      .pipe(sourcemaps.init())
      // compile LESS to CSS
      .pipe(
        less({
          plugins: [autoprefix]
        })
      )
      .pipe(sourcemaps.write('../.maps'))
      .pipe(gulp.dest(DEV))
  )
}

// [production build]
function stylesDist() {
  const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] })
  return (
    gulp
      .src(paths.styles.src)
      // compile LESS to CSS
      .pipe(
        less({
          plugins: [autoprefix]
        })
      )
      // minify CSS
      .pipe(
        cleanCSS({
          level: 2
        })
      )
      .pipe(gulp.dest(DIST))
  )
}

/* ----------------------------------------------------------- *
 * bundle app resources in library-preload.js file
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
