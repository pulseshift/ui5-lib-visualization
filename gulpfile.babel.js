/* @flow */
/* eslint-env node */

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
import tap from 'gulp-tap'
import sourcemaps from 'gulp-sourcemaps'
import ui5preload from 'gulp-ui5-preload'
import mainNpmFiles from 'gulp-main-npm-files'
import { ui5CompileLessLib } from 'ui5-lib-util'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import babelify from 'babelify'
import ora from 'ora'
import del from 'del'
import path from 'path'
import fs from 'fs'
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

// read modules
const aAssets = pkg.ui5.assets || []
const aLibs = pkg.ui5.libraries || []
const aModules = [].concat(aAssets).concat(aLibs)

// paths used in our app
const paths = {
  assets: {
    src: aModules
      .reduce(
        (aSrc, oModule) =>
          aSrc.concat([
            `${oModule.path}/**/*.properties`,
            `${oModule.path}/**/*.json`,
            `${oModule.path}/**/*.{xml,html}`,
            `${oModule.path}/**/*.css`,
            `${oModule.path}/**/*.{jpg,jpeg,png,svg,ico}`
          ]),
        []
      )
      // take into account .js files only for asset roots
      .concat(aAssets.map(oAsset => `${oAsset.path}/**/*.js`))
  },
  scripts: {
    src: aLibs.map(oModule => `${oModule.path}/**/*.js`)
  },
  libStyles: {
    src: aLibs.map(oLibrary => `${oLibrary.path}/**/*.less`)
  }
}

/**
 * Gulp 'start' task (development mode).
 * @description Call update and start file watcher.
 * @public
 */
const start = gulp.series(
  logStart,
  gulp.parallel(clean, loadDependencies),
  gulp.parallel(assets, scripts, ui5LibStyles),
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
  const iLibs = (aLibs || []).length

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
  gulp.parallel(cleanDist, loadDependenciesDist),
  gulp.parallel(assetsDist, scriptsDist, ui5LibStylesDist),
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
  const iLibs = (aLibs || []).length

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

  // start watchers
  gulp.watch(paths.assets.src, gulp.series(assets, reload))
  gulp.watch(paths.scripts.src, gulp.series(scripts, reload))
  gulp.watch(paths.libStyles.src, gulp.series(ui5LibStyles, reload))

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
      index: 'demo/index.html',
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
  return paths.assets.src.length === 0
    ? Promise.resolve()
    : gulp
        .src(
          paths.assets.src,
          // filter out unchanged files between runs
          { base: SRC, since: gulp.lastRun(assets) }
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
}

// [production build]
function assetsDist() {
  return paths.assets.src.length === 0
    ? Promise.resolve()
    : gulp
        .src(paths.assets.src, { base: SRC })
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
        // minify CSS
        .pipe(
          gulpif(
            /.*\.css$/,
            cleanCSS({
              // do not resolve inline imports of assets
              inline: false,
              level: 2
            })
          )
        )
        // babel will run with the settings defined in `.babelrc` file
        .pipe(gulpif(/.*\.js$/, babel()))
        // minify JS
        .pipe(gulpif(/.*\.js$/, uglify()))
        .pipe(gulp.dest(DIST))
}

/* ----------------------------------------------------------- *
 * process scripts and transpiles ES2015 code to ES5 (.js, ...)
 * ----------------------------------------------------------- */

// [development build]
function scripts() {
  return paths.scripts.src.length === 0
    ? Promise.resolve()
    : gulp
        .src(
          paths.scripts.src,
          // filter out unchanged files between runs
          { base: SRC, since: gulp.lastRun(scripts) }
        )
        // don't exit the running watcher task on errors
        .pipe(plumber())
        .pipe(sourcemaps.init())
        // babel will run with the settings defined in `.babelrc` file
        .pipe(babel())
        .pipe(sourcemaps.write('../.maps'))
        .pipe(gulp.dest(DEV))
}

// [production build]
function scriptsDist() {
  return paths.scripts.src.length === 0
    ? Promise.resolve()
    : gulp
        .src(paths.scripts.src, { base: SRC })
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
}

/* ----------------------------------------------------------- *
 * bundle library resources in library-preload.js file
 * ----------------------------------------------------------- */

// [production build]
function ui5LibPreloads() {
  const aLibraries = pkg.ui5.libraries || []
  const aPreloadPromise = aLibraries.map(oLibrary => {
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
function ui5LibStyles() {
  const aLibraries = pkg.ui5.libraries || []
  const mapPathToDev = sPath => sPath.replace(new RegExp(`^${SRC}`), DEV)
  const aSelectLibrarySources = aLibraries.map(
    oLibrary => `${mapPathToDev(oLibrary.path)}/**/library.source.less`
  )

  return paths.libStyles.src.length === 0
    ? Promise.resolve()
    : new Promise((resolve, reject) => {
        // 1. copy theme resources (assets) to DEV
        gulp
          .src(paths.libStyles.src, {
            base: SRC,
            // filter out unchanged files between runs
            since: gulp.lastRun(ui5LibStyles)
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
                since: gulp.lastRun(ui5LibStyles)
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
function ui5LibStylesDist() {
  const aLibraries = pkg.ui5.libraries || []
  const mapPathToDist = sPath => sPath.replace(new RegExp(`^${SRC}`), DIST)
  const aSelectLibrarySources = aLibraries.map(
    oLibrary => `${mapPathToDist(oLibrary.path)}/**/library.source.less`
  )
  const aSelectLibraryBundles = aLibraries.reduce(
    (aBundles, oLibrary) =>
      aBundles.concat([
        `${mapPathToDist(oLibrary.path)}/**/library.css`,
        `${mapPathToDist(oLibrary.path)}/**/library-RTL.css`
      ]),
    []
  )

  return paths.libStyles.src.length === 0
    ? Promise.resolve()
    : new Promise((resolve, reject) => {
        // 1. copy theme resources (assets) to DEV
        gulp
          .src(paths.libStyles.src, {
            base: SRC
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
                  base: DIST
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
                  base: DIST
                })
                // minify CSS
                .pipe(
                  cleanCSS({
                    level: 2
                  })
                )
                .pipe(gulp.dest(DIST))
                .on('end', resolve)
                .on('error', reject)
            )
        )
}

/* ----------------------------------------------------------- *
 * load dependencies
 * ----------------------------------------------------------- */

// [helper function]
function getExposedModuleName(sModule) {
  switch (sModule) {
    case 'lodash':
      return '_'
    case 'velocity-animate':
      return 'velocity'
    default:
      return sModule.replace('-', '_')
  }
}

// [development build]
function loadDependencies() {
  const aDependencies = mainNpmFiles()
  const sVendorPath = pkg.ui5.vendor

  const aEntryBuilds = aDependencies.map(
    sEntry =>
      new Promise((resolve, reject) => {
        const sModuleName = sEntry.split('/node_modules/')[1].split('/')[0]
        return (
          browserify({
            entries: sEntry,
            standalone: getExposedModuleName(sModuleName)
          })
            // babel will run with the settings defined in `.babelrc` file
            .transform(babelify)
            .bundle()
            .pipe(source('module.js'))
            .pipe(buffer())
            // save dependency based on module name (axios -> axios.js)
            .pipe(
              rename(oPath => {
                oPath.basename = sModuleName
              })
            )
            .pipe(gulp.dest(sVendorPath))
            .on('end', resolve)
            .on('error', reject)
        )
      })
  )

  const aStyleCopy = aDependencies.map(
    sEntry =>
      new Promise((resolve, reject) => {
        const sStylesheetName = sEntry.replace(/\.js$/, '.css')
        return fs.existsSync(path.resolve(__dirname, sStylesheetName))
          ? gulp
              .src([sStylesheetName])
              .pipe(gulp.dest(sVendorPath))
              .on('end', resolve)
              .on('error', reject)
          : resolve()
      })
  )

  return Promise.all([].concat(aEntryBuilds).concat(aStyleCopy))
}

// [production build]
function loadDependenciesDist() {
  const aDependencies = mainNpmFiles()
  const sVendorPath = pkg.ui5.vendor

  const aEntryBuilds = aDependencies.map(
    sEntry =>
      new Promise((resolve, reject) => {
        const sModuleName = sEntry.split('/node_modules/')[1].split('/')[0]
        return (
          browserify({
            entries: sEntry,
            standalone: getExposedModuleName(sModuleName)
          })
            // babel will run with the settings defined in `.babelrc` file
            .transform(babelify)
            .bundle()
            .pipe(source('module.js'))
            .pipe(buffer())
            // save dependency based on module name (axios -> axios.js)
            .pipe(
              rename(oPath => {
                oPath.basename = sModuleName
              })
            )
            // minify scripts
            .pipe(uglify())
            .pipe(gulp.dest(sVendorPath))
            .on('end', resolve)
            .on('error', reject)
        )
      })
  )

  const aStyleCopy = aDependencies.map(
    sEntry =>
      new Promise((resolve, reject) => {
        const sStylesheetName = sEntry.replace(/\.js$/, '.css')
        return fs.existsSync(path.resolve(__dirname, sStylesheetName))
          ? gulp
              .src([sStylesheetName])
              // minify CSS
              .pipe(
                cleanCSS({
                  level: 2
                })
              )
              .pipe(gulp.dest(sVendorPath))
              .on('end', resolve)
              .on('error', reject)
          : resolve()
      })
  )

  return Promise.all([].concat(aEntryBuilds).concat(aStyleCopy))
}
