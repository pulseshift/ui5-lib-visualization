/* @flow */
/* eslint-env node */

/**
 *
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
import order from 'gulp-order'
import touch from 'gulp-touch-cmd'
import sourcemaps from 'gulp-sourcemaps'
import ui5preload from 'gulp-ui5-preload'
import mainNpmFiles from 'gulp-main-npm-files'
import ui5Bust from 'ui5-cache-buster'
import {ui5Build, ui5CompileLessLib} from 'ui5-lib-util'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import babelify from 'babelify'
import LessAutoprefix from 'less-plugin-autoprefix'
import ora from 'ora'
import del from 'del'
import path from 'path'
import fs from 'fs'
import commander from 'commander'
import handlebars from 'handlebars'
import gulpHandlebars from 'gulp-handlebars-html'
import favicons from 'gulp-favicons'
import gzip from 'gulp-gzip'
import brotli from 'gulp-brotli'

// TODO: because build script becomes so feature rich it should be split into sub modules

/*
 * SETUP SCRIPT RUNTIME ENVIRONMENT
 */

// parse program commands
commander
  .version(pkg.version)
  .option('--silent')
  .option('--local')
  .parse(process.argv)

const hdlbars = gulpHandlebars(handlebars)
const spinner = ora()

// register handlebars helper function
handlebars.registerHelper('secure', function(str) {
  return new handlebars.SafeString(str)
})

// switch between gulp log and custom log
spinner.enabled = commander.silent
spinner.print = sText =>
  spinner.stopAndPersist({
    text: sText
  })

/*
 * CONFIGURATION
 */

const IS_DEV_MODE = process.env.NODE_ENV === 'development'

// path to source directory
const SRC = 'src'
// path to development directory
const DEV = 'dev'
// path to ditribution direcory
const DIST = 'dist'
// path to ui5 repository
const UI5 = IS_DEV_MODE ? 'ui5' : `${DIST}/ui5`

// create unique hash for current favicon image
const isFaviconDefined =
  pkg.favicon && pkg.favicon.src.length > 0 && fs.existsSync(pkg.favicon.src)
const FAVICON_HASH = isFaviconDefined //TODO:get rid? Favicons NOT in root seesm to be an anit pattern? https://stackoverflow.com/questions/5273103/any-problems-with-favicons-in-a-subfolder
  ? require('loader-utils')
      .getHashDigest(
        Buffer.concat([fs.readFileSync(pkg.favicon.src)]),
        'sha512',
        'base62',
        8
      )
      .toLowerCase()
  : ''

// read build settings
const BUILD = {
  cacheBuster: pkg.ui5.build && pkg.ui5.build.cacheBuster === true,
  compression: pkg.ui5.build && pkg.ui5.build.compression !== false,
  compressionGzip:
    pkg.ui5.build &&
    (pkg.ui5.build.compression === true ||
      [].concat(pkg.ui5.build.compression).includes('gzip')),
  compressionBrotli:
    pkg.ui5.build &&
    (pkg.ui5.build.compression === true ||
      [].concat(pkg.ui5.build.compression).includes('brotli'))
}

// helper array function
const noPrebuild = oModule => oModule.prebuild !== true
const mapExternalModulePath = oModule => ({
  ...oModule,
  path: oModule.path.replace(/^\/?node_modules/, `${SRC}/node_modules`)
})

// read modules
const UI5_APPS = (pkg.ui5.apps || []).map(mapExternalModulePath)
const UI5_LIBS = (pkg.ui5.libraries || []).map(mapExternalModulePath)
const UI5_THEMES = (pkg.ui5.themes || []).map(mapExternalModulePath)
const NON_UI5_ASSETS = (pkg.ui5.assets || []).map(mapExternalModulePath)
const UI5_ROOTS = []
  .concat(UI5_APPS)
  .concat(UI5_THEMES)
  .concat(UI5_LIBS)
  .concat(NON_UI5_ASSETS)

// target directory of plain npm dependencies
const NPM_MODULES_TARGET = pkg.ui5.vendor || {
  name: '',
  path: ''
}

// identify ui5 modules loaded as devDependency
const NPM_UI5_LIBS = (pkg.ui5.libraries || []).filter(oModule =>
  oModule.path.startsWith('node_modules')
)
const NPM_UI5_MODULES = []
  .concat(pkg.ui5.apps || [])
  .concat(pkg.ui5.themes || [])
  .concat(pkg.ui5.libraries || [])
  .concat(pkg.ui5.assets || [])
  .filter(oModule => oModule.path.startsWith('node_modules'))

const THEMES = [
  'base',
  'psmaterial',
  'sap_belize',
  'sap_belize_hcb',
  'sap_belize_hcw',
  'sap_belize_plus',
  'sap_bluecrystal',
  'sap_goldreflection',
  'sap_hcb'
]
const TARGET_THEME = pkg.ui5.theme || 'sap_belize'

// paths used in our app
const paths = {
  entry: {
    src: [pkg.main]
  },
  assets: {
    src: UI5_ROOTS.filter(noPrebuild)
      .reduce(
        (aSrc, oModule) =>
          aSrc.concat([
            `${oModule.path}/**/*.properties`,
            `${oModule.path}/**/*.json`,
            `${oModule.path}/**/*.{xml,html}`,
            `${oModule.path}/**/*.css`,
            `${oModule.path}/**/*.{jpg,jpeg,png,svg,ico}`,
            `${oModule.path}/**/*.{woff,woff2,eot,ttf}`
          ]),
        []
      )
      // take into account .js files only for asset roots
      .concat(NON_UI5_ASSETS.map(oAsset => `${oAsset.path}/**/*.js`))
  },
  scripts: {
    src: UI5_APPS.filter(noPrebuild)
      .concat(UI5_LIBS)
      .map(oModule => `${oModule.path}/**/*.js`)
  },
  appStyles: {
    src: UI5_APPS.concat(NON_UI5_ASSETS).map(
      oModule => `${oModule.path}/**/*.less`
    )
  },
  libStyles: {
    src: UI5_LIBS.filter(noPrebuild).map(
      oLibrary => `${oLibrary.path}/**/*.less`
    )
  },
  themeStyles: {
    src: UI5_THEMES.filter(noPrebuild).map(oTheme => `${oTheme.path}/**/*.less`)
  },
  htmlEntries: {
    // this should be the result file of task 'entryDist'
    src: [`${DIST}/index.html`]
  }
}

/**
 * Gulp 'start' task (development mode).
 * @description Call update and start file watcher.
 * @public
 */
const start = gulp.series(
  logStart,
  cleanDev,
  favicon,
  gulp.parallel(prepareOpenUI5, loadDependencies),
  gulp.parallel(copyUi5Theme, copyUi5LibraryThemes),
  gulp.parallel(
    entry,
    assets,
    scripts,
    ui5AppStyles,
    ui5LibStyles,
    ui5ThemeStyles
  ),
  gulp.parallel(logStats, updateVersion),
  watch
)

// log start message and start spinner
function logStart(done) {
  spinner.print(' ')
  spinner.start('Start development server...')
  done()
}

// log common statistics
function logStatsCommons() {
  // const sSourceID = pkg.ui5.src
  // const oSource = pkg.ui5.srcLinks[sSourceID]
  const sUI5Version = getUI5Version()
  // const sOnlineUI5State =
  //   !oSource.isArchive && oSource.isPrebuild ? '(remote)' : ''
  // const sUI5Details = !oSource.isPrebuild ? '(custom build)' : sOnlineUI5State

  const iApps = UI5_APPS.length
  const iThemes = UI5_THEMES.length
  const iLibs = UI5_LIBS.length

  const sVendorLibsPath = NPM_MODULES_TARGET.path
  const aVendorLibs = allExplicitDependencies()

  if (aVendorLibs.length > 0) {
    spinner.print(' ')
    spinner.succeed(
      `Dependencies (vendor libraries) loaded into: ${sVendorLibsPath}`
    )

    aVendorLibs.forEach(sEntry => {
      const sModuleName = sEntry.split('/node_modules/')[1].split('/')[0]
      spinner.print(`• ${sModuleName} as ${getExposedModuleName(sModuleName)}`)
    })
  }

  // print success message
  spinner.print(' ')
  spinner.succeed(`UI5 Version: ${sUI5Version}`).print(' ')
  spinner
    .succeed('UI5 assets created:')
    .print(`• ${iApps} app${iApps !== 1 ? 's' : ''}`)
    .print(`• ${iThemes} theme${iThemes !== 1 ? 's' : ''}`)
    .print(`• ${iLibs} librar${iLibs !== 1 ? 'ies' : 'y'}`)
    .print(' ')
}

// log start statistics and stop spinner
function logStats(done) {
  // print success message
  spinner.succeed(
    'Development server started, use Ctrl+C to stop and go back to the console...'
  )
  logStatsCommons()
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
  favicon,
  gulp.parallel(
    //gulp.series(prepareOpenUI5, buildOpenUI5),
    gulp.series(prepareOpenUI5),
    loadDependenciesDist
  ),
  gulp.parallel(copyUi5Theme, copyUi5LibraryThemes),
  gulp.parallel(
    entryDist,
    assetsDist,
    scriptsDist,
    ui5AppStylesDist,
    ui5LibStylesDist,
    ui5ThemeStylesDist
  ),
  gulp.parallel(ui5preloads, ui5LibPreloads),
  gulp.parallel(ui5cacheBust),
  gulp.parallel(preCompressionGzip, preCompressionBrotli),
  logStatsDist
)
const buildErrorHandler = {
  errorHandler: error => {
    // print error
    spinner.fail(error)
    // exit gulp
    throw error
  }
}

// log start build message and start spinner
function logStartDist(done) {
  spinner.print(' ')
  spinner.start('Build start...')
  done()
}

// log build statistics and stop spinner
function logStatsDist(done) {
  // print success message
  spinner
    .succeed('Build successfull.')
    .print(' ')
    .print(`Build entry: ${pkg.main}`)
    .print(`Build output: ${path.resolve(__dirname, DIST)}`)
  logStatsCommons()
  done()
}
export {build}

/* ----------------------------------------------------------- *
 * watch files for changes
 * ----------------------------------------------------------- */

// [development build]
function watch() {
  // start watchers
  gulp.watch(paths.entry.src, gulp.series(startWatchTask, entry, reload))
  gulp.watch(paths.assets.src, gulp.series(startWatchTask, assets, reload))
  gulp.watch(paths.scripts.src, gulp.series(startWatchTask, scripts, reload))
  gulp.watch(
    paths.appStyles.src,
    gulp.series(startWatchTask, ui5AppStyles, reload)
  )
  gulp.watch(
    paths.libStyles.src,
    gulp.series(startWatchTask, ui5LibStyles, reload)
  )
  gulp.watch(
    paths.themeStyles.src,
    gulp.series(startWatchTask, ui5ThemeStyles, reload)
  )

  // start HTTP server
  if (commander.local) {
    startHttpServer()
  }
}

// [production build]
export function startHttpServer() {
  const sSuccessMessage =
    '\u{1F64C}  (Server started, use Ctrl+C to stop and go back to the console...)'

  // start web server
  const port = parseInt(process.env.DEV_PORT || 3000, 10)
  const express = require('express')
  const proxy = require('http-proxy-middleware')

  // proxy middleware options
  const proxyOptions = {
    target: process.env.DEV_API_PROXY,
    secure: false,
    xfwd: true,
    // autoRewrite: true,
    // changeOrigin: true,
    headers: {
      host: `localhost:${port}`,
      origin: `http://localhost:${port}`
    },
    cookieDomainRewrite: {
      '*': `localhost:${port}`
    }
  }

  // create the proxy (without context)
  const apiProxy = process.env.DEV_API_PROXY ? proxy(proxyOptions) : null

  // mount web server
  const webServer = express()

  // config and start web server
  if (process.env.DEV_API_PROXY) {
    webServer.use('/api', apiProxy)
  }
  webServer.use(express.static(IS_DEV_MODE ? `./${DEV}` : `./${DIST}`))
  webServer.use('/app', express.static(IS_DEV_MODE ? `./${DEV}` : `./${DIST}`))
  webServer.use('/ui5', express.static(`./${UI5}`))
  webServer.use('/.maps', express.static(`./.maps`))
  // if (!IS_DEV_MODE) {
  //   // TODO: get gzip middleware working again with express
  //   // gzip/brotli static middleware - serves compressed files if they exist
  //   const gzipStaticMiddleware = require('connect-gzip-static')
  //   const oneDay = 86400000
  //   webServer.use('/app', gzipStaticMiddleware(`./${DIST}`), {maxAge: oneDay})
  // }

  webServer.listen(port)

  // log success message
  gutil.log(gutil.colors.green(sSuccessMessage))
}

/* ----------------------------------------------------------- *
 * reload browser
 * ----------------------------------------------------------- */

/**
 * Helper to print the current time formatted
 * @return {string}
 */
function currentTime() {
  const now = new Date()
  const h = str_pad(now.getHours())
  const m = str_pad(now.getMinutes())
  const s = str_pad(now.getSeconds())
  return h + ':' + m + ':' + s
}

function str_pad(n) {
  return String('0' + n).slice(-2)
}

// [development build]
function reload(done) {
  if (commander.silent) {
    spinner.print(
      `\u{1F435}  Update completed, ready for reload... - ${currentTime()}`
    )
  } else {
    gutil.log(`Update completed, ready for reload... - ${currentTime()}`)
  }
  done()
}

function startWatchTask(done) {
  if (commander.silent) {
    spinner.print(`\u{1F440}  Watch task started ... - ${currentTime()}`)
  } else {
    gutil.log(`Watch task started ... - ${currentTime()}`)
  }
  done()
}

/* ----------------------------------------------------------- *
 * if required: download and build OpenUI5 library
 * ----------------------------------------------------------- */

// [development & production build]
// export function downloadOpenUI5() {
//   try {
//     const sSourceID = pkg.ui5.src
//     const oSource = pkg.ui5.srcLinks[sSourceID]
//     const sUI5Version = oSource.version
//     const sCompiledURL = handlebars.compile(oSource.url)(oSource)
//     const isRemoteLink = sCompiledURL.startsWith('http')

//     // if UI5 download link is marked as prebuild,
//     // we can extract it directly into '/ui5' target directory
//     const sDownloadPath = !oSource.isPrebuild
//       ? path.resolve(__dirname, './.download')
//       : path.resolve(__dirname, `./${UI5}`)
//     const isDownloadRequired =
//       oSource.isArchive &&
//       isRemoteLink &&
//       !fs.existsSync(path.join(sDownloadPath, sUI5Version))
//     const oDownloadOptions = {
//       onProgress(iStep, iTotalSteps, oStepDetails) {
//         // update spinner state
//         spinner.text = `Downloading UI5... [${iStep}/${iTotalSteps}] ${Math.round(
//           oStepDetails.progress || 0
//         )}% (${oStepDetails.name})`
//       }
//     }

//     // ensure ui5 download oath exists
//     if (!fs.existsSync(sDownloadPath)) {
//       fs.mkdirSync(sDownloadPath)
//     }

//     if (isDownloadRequired) {
//       gutil.log('Download UI5 form: ' + sCompiledURL)
//       // update spinner state
//       spinner.text =
//         'Downloading UI5... (this task can take several minutes, please be patient)'
//     }

//     // return promise
//     return isDownloadRequired
//       ? ui5Download(sCompiledURL, sDownloadPath, sUI5Version, oDownloadOptions)
//           .then(sSuccessMessage => {
//             spinner.succeed(sSuccessMessage)
//             spinner.start('')
//           })
//           .catch(sErrorMessage => {
//             spinner.fail(sErrorMessage)
//             spinner.start('')
//             throw sErrorMessage
//           })
//       : Promise.resolve()
//   } catch (error) {
//     spinner.fail(error)
//   }
// }

/**
 * Reads UI5 version from depencies
 */
function getUI5Version() {
  //Make sure to return actual semantic version number only, as this will be used in URLs
  return pkg.dependencies['@openui5/sap.ui.core'].replace(/[^0123456789.]/g, '')
}

export function prepareOpenUI5() {
  let sUI5Version = getUI5Version()
  let sUI5Path = path.resolve(__dirname, `./${UI5}`)
  const isAlreadyPresent = fs.existsSync(path.join(sUI5Path, sUI5Version))

  if (!isAlreadyPresent) {
    gutil.log(
      'Missing UI5 runtime, start building for version: ' +
        gutil.colors.bold(sUI5Version)
    )
    require('child_process').execSync(
      `yarn ui5 build --all --dest=./${UI5}/${sUI5Version} --clean-dest=true`,
      {stdio: 'inherit'}
    )

    //Build sap-ui-version.json file (e.g. to make UI5 inspector happy)
    // initialize build time
    const NOW = new Date()
    // build time stamp in format yyyyMMddhhmm
    const sBuildTime = NOW.toISOString()
      .slice(0, 16)
      .replace(/[-T:]/g, '')

    const oVersionJSON = {
      buildTimestamp: sBuildTime,
      name: 'openui5-sdk-dist-pulseshift-custom',
      version: sUI5Version,
      libraries: [] //TODO:Check if needed: Could be read from yarn/npm dependencies
    }
    const sVersionJSONString = JSON.stringify(oVersionJSON, null, 2)

    // write JSON file
    fs.writeFileSync(
      `./${UI5}/${sUI5Version}/resources/sap-ui-version.json`,
      sVersionJSONString
    )
  } else {
    gutil.log(
      'Found UI5 runtime, nothing to do - version: ' +
        gutil.colors.bold(sUI5Version)
    )
  }

  return Promise.resolve()
}

// [development & production build]
//TODO: Is this still needed?
export function buildOpenUI5() {
  //const sSourceID = pkg.ui5.src
  //const oSource = pkg.ui5.srcLinks[sSourceID]
  //const sUI5Version = oSource.version
  let sUI5Version = getUI5Version()

  //const sDownloadPath = path.resolve(__dirname, './ui5_tmp')
  const sDownloadPath = path.resolve(__dirname, `./${UI5}/${sUI5Version}`)
  const sUI5TargetPath = path.resolve(__dirname, `./${UI5}/${sUI5Version}`)
  const isBuildRequired = !fs.existsSync(sUI5TargetPath)
  const oBuildOptions = {
    onProgress(iStep, iTotalSteps, oStepDetails) {
      // update spinner state
      spinner.text = `Build UI5... [${iStep}/${iTotalSteps}] (${oStepDetails.name})`
    }
  }

  if (isBuildRequired) {
    // update spinner state
    spinner.text =
      'Build UI5... (this task can take several minutes, please be patient)'
  }

  // define build Promise
  return isBuildRequired
    ? ui5Build(
        `${sDownloadPath}/${sUI5Version}`,
        sUI5TargetPath,
        sUI5Version,
        oBuildOptions
      )
        .then(sSuccessMessage => {
          spinner.succeed(sSuccessMessage)
          spinner.start('')
        })
        .catch(sErrorMessage => {
          spinner.fail(sErrorMessage)
          spinner.start('')
        })
    : Promise.resolve()
}

/* ----------------------------------------------------------- *
 * clean development directory
 * ----------------------------------------------------------- */

// [development build]
function cleanDev() {
  const VENDOR_SRC = pkg.ui5.vendor ? `${pkg.ui5.vendor.path}/**/*` : ''
  return del(
    [`${DEV}/**/*`, `!${UI5}/**/*`, `!${DEV}/${FAVICON_HASH}`].concat(
      VENDOR_SRC
    )
  )
}

// [production build]
function cleanDist() {
  const VENDOR_SRC = pkg.ui5.vendor ? `${pkg.ui5.vendor.path}/**/*` : ''
  return del(
    [`${DIST}/**/*`, `!${UI5}/**/*`, `!${DIST}/${FAVICON_HASH}`].concat(
      VENDOR_SRC
    )
  )
}

// [helper function]
export function clean() {
  const VENDOR_SRC = pkg.ui5.vendor ? `${pkg.ui5.vendor.path}/**/*` : ''
  return del(
    [
      DEV,
      DIST,
      UI5,
      '.maps',
      '.download',
      'test/screenshots/**/*',
      `${SRC}/**/*.help.properties`,
      `${SRC}/**/i18n_*.properties`,
      `${SRC}/**/messagebundle_*.properties`
    ]
      .concat(
        THEMES.filter(theme => theme !== TARGET_THEME).map(
          theme => `${SRC}/resources/ui5-themes/UI5/sap/**/themes/${theme}`
        )
      )
      .concat(VENDOR_SRC)
  )
}

/* ----------------------------------------------------------- *
 * generate favicons (long runner ~ 100-200 sec)
 * ----------------------------------------------------------- */

// [production & development build]
function favicon() {
  const targetPath = IS_DEV_MODE ? DEV : DIST
  const isFaviconsDirCached = fs.existsSync(
    `${targetPath}/favicons_results.html`
  )
  // use content hash of master image as directory name and cashe assets in dev mode
  return isFaviconsDirCached || !isFaviconDefined
    ? Promise.resolve()
    : gulp
        .src(pkg.favicon.src)
        .pipe(plumber(buildErrorHandler))
        .pipe(
          favicons({
            appName: pkg.ui5.indexTitle,
            appDescription: pkg.description,
            developerName: pkg.author,
            version: pkg.version,
            background: '#fefefe',
            theme_color: '#fefefe',
            path: ``,
            html: 'favicons_results.html',
            online: false,
            preferOnline: false,
            pipeHTML: true
          })
        )
        .pipe(gulp.dest(`${targetPath}`))
}

/* ----------------------------------------------------------- *
 * optimize and compile app entry (src/index.handlebars)
 * ----------------------------------------------------------- */

// [helper function]
function getHandlebarsProps(sEntryHTMLPath) {
  const aResourceRootsSrc = []
    .concat(UI5_APPS)
    .concat(UI5_LIBS)
    .concat(NON_UI5_ASSETS)
    .concat([NPM_MODULES_TARGET])

  return {
    indexTitle: pkg.ui5.indexTitle,
    src: getRelativeUI5SrcURL(sEntryHTMLPath),
    scriptAttributes: IS_DEV_MODE ? '' : 'defer', //Add defer only in prod build as currently sap-ui-debug does not work in deferred mode
    theme: TARGET_THEME,
    // create resource roots string
    resourceroots: JSON.stringify(
      aResourceRootsSrc.reduce((oResult, oModule) => {
        const sModulePath = oModule.path.replace(
          new RegExp(`^${SRC}`),
          IS_DEV_MODE ? DEV : DIST
        )

        // create path to theme relative to entry HTML
        let sRelativePath = path.relative(
          path.parse(sEntryHTMLPath).dir,
          sModulePath
        )

        // on windows, the sRelativePath will contain backslashes. as the browser cannot handle
        // the relative path included in the script tag containing backslashes, we have to replace
        // them with normal slashes
        sRelativePath = sRelativePath.includes('\\')
          ? sRelativePath.replace(/\\/g, '/')
          : sRelativePath

        return Object.assign(oResult, {
          [oModule.name]: sRelativePath
        })
      }, {})
    ),
    // create custom theme roots string
    themeroots: JSON.stringify(
      UI5_THEMES.reduce((oResult, oTheme) => {
        const sThemePath = oTheme.path.replace(
          new RegExp(`^${SRC}`),
          IS_DEV_MODE ? DEV : DIST
        )

        // create path to theme relative to entry HTML
        let sRelativePath = path.relative(
          path.parse(sEntryHTMLPath).dir,
          `${sThemePath}/UI5`
        )

        // on windows, the sRelativePath will contain backslashes. as the browser cannot handle
        // the relative path included in the script tag containing backslashes, we have to replace
        // them with normal slashes
        sRelativePath = sRelativePath.includes('\\')
          ? sRelativePath.replace(/\\/g, '/')
          : sRelativePath

        // create path to theme relative to entry HTML
        return Object.assign(oResult, {
          [oTheme.name]: sRelativePath
        })
      }, {})
    ),
    // create favicons
    favicons: isFaviconDefined
      ? fs.readFileSync(
          `${IS_DEV_MODE ? DEV : DIST}/favicons_results.html`,
          'utf8'
        )
      : '',
    // define HOST used for API calls in case a proxy is used
    devheader: ''
    // process.env.DEV_API_PROXY && IS_DEV_MODE
    //   ? '<link id="dev-api-proxy-origin" href="https://localhost" />'
    //   : ''
  }
}

// [helper function]
function getRelativeUI5SrcURL(sEntryHTMLPath) {
  const sEntryPath = path.dirname(sEntryHTMLPath)
  //const sSourceID = pkg.ui5.src
  //const oSource = pkg.ui5.srcLinks[sSourceID]
  //const sCompiledURL = handlebars.compile(oSource.url)(oSource)
  //const isRemoteLink = sCompiledURL.startsWith('http')
  //const sLocalPath = oSource.path || ''

  // const sOpenUI5PathNaked = path.resolve(
  //   __dirname,
  //   path.join(`${UI5}/${getUI5Version()}`, 'sap-ui-core.js')
  // )
  const sOpenUI5PathWrapped = path.resolve(
    __dirname,
    path.join(`${UI5}/${getUI5Version()}/resources`, 'sap-ui-core.js')
  )

  let sRelativeUI5Path = path.relative(sEntryPath, sOpenUI5PathWrapped)

  // if (oSource.isArchive && isRemoteLink && !oSource.isPrebuild) {
  //   // ui5/version/sap-ui-core.js
  //   sRelativeUI5Path = path.relative(sEntryPath, sOpenUI5PathNaked)
  // } else if (oSource.isArchive && isRemoteLink && oSource.isPrebuild) {
  //   // ui5/version/resources/sap-ui-core.js (wrapped) OR ui5/version/sap-ui-core.js (naked)
  //   sRelativeUI5Path = path.relative(
  //     sEntryPath,
  //     fs.existsSync(sOpenUI5PathWrapped)
  //       ? sOpenUI5PathWrapped
  //       : sOpenUI5PathNaked
  //   )
  // } else if (!oSource.isArchive && isRemoteLink) {
  //   // direct remote link
  //   sRelativeUI5Path = sCompiledURL
  // } else if (!isRemoteLink) {
  //   // direct local link
  //   sRelativeUI5Path = path.relative(sEntryPath, sCompiledURL)
  // }

  // on windows, the sRelativeUI5Path will contain backslashes. as the browser cannot handle
  // the relative path included in the script tag containing backslashes, we have to replace
  // them with normal slashes
  sRelativeUI5Path = sRelativeUI5Path.includes('\\')
    ? sRelativeUI5Path.replace(/\\/g, '/')
    : sRelativeUI5Path

  return sRelativeUI5Path
}

// [development build]
function entry() {
  try {
    // update spinner state
    spinner.text = 'Compiling project resources...'

    const aEntries = paths.entry.src.map(
      sEntry =>
        new Promise((resolve, reject) =>
          gulp
            .src(
              [sEntry],
              // filter out unchanged files between runs
              {
                base: SRC,
                since: gulp.lastRun(entry)
              }
            )
            // don't exit the running watcher task on errors
            .pipe(plumber())
            // compile handlebars to HTML
            .pipe(
              hdlbars(
                getHandlebarsProps(
                  path.resolve(
                    __dirname,
                    sEntry.replace(new RegExp(`^${SRC}`), DEV)
                  )
                )
              )
            )
            .pipe(
              rename({
                extname: '.html'
              })
            )
            .pipe(gulp.dest(DEV))
            .on('error', reject)
            .on('end', resolve)
        )
    )

    return Promise.all(aEntries)
  } catch (error) {
    spinner.fail(error)
  }
}

// [production build]
function entryDist() {
  try {
    // update spinner state
    spinner.text = 'Compiling project resources...'

    const aEntries = paths.entry.src.map(
      sEntry =>
        new Promise((resolve, reject) =>
          gulp
            .src(
              [sEntry],
              // filter out unchanged files between runs
              {
                base: SRC,
                since: gulp.lastRun(entry)
              }
            )
            .pipe(plumber(buildErrorHandler))
            // compile handlebars to HTML
            .pipe(
              hdlbars(
                getHandlebarsProps(
                  path.resolve(
                    __dirname,
                    sEntry.replace(new RegExp(`^${SRC}`), DIST)
                  )
                )
              )
            )
            // minify HTML (disabled, cause data-sap-ui-theme-roots gets removed)
            // .pipe(htmlmin())
            .pipe(
              rename({
                extname: '.html'
              })
            )
            .pipe(gulp.dest(DIST))
            .on('error', reject)
            .on('end', resolve)
            .pipe(touch())
        )
    )

    return Promise.all(aEntries)
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * copy assets to destination folder (.png, .jpg, .json, ...)
 * ----------------------------------------------------------- */

// [development build]
function assets() {
  try {
    return paths.assets.src.length === 0
      ? Promise.resolve()
      : gulp
          .src(
            paths.assets.src,
            // filter out unchanged files between runs
            {
              base: SRC,
              since: gulp.lastRun(assets)
            }
          )
          // don't exit the running watcher task on errors
          .pipe(plumber())
          // do not optimize size and quality of images in dev mode

          // transpile JS: babel will run with the settings defined in `.babelrc` file
          .pipe(gulpif(/.*\.js$/, sourcemaps.init()))
          .pipe(gulpif(/.*\.js$/, babel()))
          .pipe(gulpif(/.*\.js$/, sourcemaps.write('../.maps')))
          .pipe(gulp.dest(DEV))
  } catch (error) {
    spinner.fail(error)
  }
}

// [production build]
function assetsDist() {
  try {
    return paths.assets.src.length === 0
      ? Promise.resolve()
      : gulp
          .src(paths.assets.src, {
            base: SRC
          })
          .pipe(plumber(buildErrorHandler))
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
          // transpile JS: babel will run with the settings defined in `.babelrc` file
          .pipe(gulpif(/.*\.js$/, babel()))
          // minify JS
          .pipe(gulpif(/.*\.js$/, uglify()))
          .pipe(gulp.dest(DIST))
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * process scripts and transpiles ES2015 code to ES5 (.js, ...)
 * ----------------------------------------------------------- */

// [development build]
function scripts() {
  try {
    return paths.scripts.src.length === 0
      ? Promise.resolve()
      : gulp
          .src(
            paths.scripts.src,
            // filter out unchanged files between runs
            {
              base: SRC,
              since: gulp.lastRun(scripts)
            }
          )
          // don't exit the running watcher task on errors
          .pipe(plumber())
          .pipe(sourcemaps.init())
          // babel will run with the settings defined in `.babelrc` file
          .pipe(babel())
          .pipe(sourcemaps.write('../.maps'))
          .pipe(gulp.dest(DEV))
  } catch (error) {
    spinner.fail(error)
  }
}

// [production build]
function scriptsDist() {
  try {
    return paths.scripts.src.length === 0
      ? Promise.resolve()
      : gulp
          .src(paths.scripts.src, {
            base: SRC
          })
          .pipe(plumber(buildErrorHandler))
          // babel will run with the settings defined in `.babelrc` file
          .pipe(babel())
          // save non-minified copies with debug suffix
          .pipe(
            rename(path => {
              path.basename = /\.controller$/.test(path.basename)
                ? path.basename.replace(/\.controller$/, '-dbg.controller')
                : `${path.basename}-dbg`
            })
          )
          .pipe(gulp.dest(DIST))
          // process copies without suffix
          .pipe(
            rename(path => {
              path.basename = /\.controller$/.test(path.basename)
                ? path.basename.replace(/-dbg\.controller$/, '.controller')
                : path.basename.replace(/-dbg$/, '')
            })
          )
          // minify scripts
          .pipe(uglify())
          .pipe(gulp.dest(DIST))
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * compile and automatically prefix stylesheets (.less, ...)
 * ----------------------------------------------------------- */

// [development build]
function ui5AppStyles() {
  try {
    const autoprefix = new LessAutoprefix({
      // Read from .browserlistrc
      // browsers: ['last 2 versions']
    })
    return paths.appStyles.src.length === 0
      ? Promise.resolve()
      : gulp
          .src(
            paths.appStyles.src,
            // filter out unchanged files between runs
            {
              base: SRC,
              since: gulp.lastRun(ui5AppStyles)
            }
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
  } catch (error) {
    spinner.fail(error)
  }
}

// [production build]
function ui5AppStylesDist() {
  try {
    const autoprefix = new LessAutoprefix({
      //Read from .browserlistrc
      // browsers: ['last 2 versions']
    })
    return paths.appStyles.src.length === 0
      ? Promise.resolve()
      : gulp
          .src(paths.appStyles.src, {
            base: SRC
          })
          .pipe(plumber(buildErrorHandler))
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
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * bundle app resources in Component-preload.js file
 * ----------------------------------------------------------- */

// [production build]
function ui5preloads() {
  try {
    // update spinner state
    spinner.text = 'Bundling modules...'

    const aPreloadPromise = UI5_APPS.filter(noPrebuild).map(oApp => {
      const sDistAppPath = oApp.path.replace(new RegExp(`^${SRC}`), DIST)
      return new Promise(function(resolve, reject) {
        gulp
          .src([
            // bundle all app resources supported by OpenUI5
            `${sDistAppPath}/**/*.js`,
            `${sDistAppPath}/**/*.view.xml`,
            `${sDistAppPath}/**/*.fragment.xml`,
            `${sDistAppPath}/**/manifest.json`,
            // don't bundle debug resources
            `!${sDistAppPath}/**/*-dbg.js`,
            `!${sDistAppPath}/**/*-dbg.controller.js`
          ])
          .pipe(plumber(buildErrorHandler))
          .pipe(order())
          .pipe(
            ui5preload({
              base: sDistAppPath,
              namespace: oApp.name,
              isLibrary: false
            })
          )
          .pipe(gulp.dest(sDistAppPath))
          .on('error', reject)
          .on('end', resolve)
      })
    })
    return Promise.all(aPreloadPromise)
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * bundle library resources in library-preload.js file
 * ----------------------------------------------------------- */

// [production build]
function ui5LibPreloads() {
  try {
    const aPreloadPromise = UI5_LIBS.filter(noPrebuild).map(oLibrary => {
      const sDistLibraryPath = oLibrary.path.replace(
        new RegExp(`^${SRC}`),
        DIST
      )
      return new Promise(function(resolve, reject) {
        gulp
          .src([
            // bundle all library resources
            `${sDistLibraryPath}/**/*.js`,
            `${sDistLibraryPath}/**/*.json`,
            // don't bundle debug or peload resources
            `!${sDistLibraryPath}/**/*-dbg.js`,
            `!${sDistLibraryPath}/**/*-dbg.controller.js`,
            `!${sDistLibraryPath}/**/*-preload.js`
          ])
          .pipe(plumber(buildErrorHandler))
          .pipe(order())
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
          .pipe(
            gulpif(
              '**/library-preload.json',
              rename({
                extname: '.js'
              })
            )
          )
          .pipe(gulp.dest(sDistLibraryPath))
          .on('error', reject)
          .on('end', resolve)
      })
    })
    return Promise.all(aPreloadPromise)
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * bundle theme styles in library.css file
 * ----------------------------------------------------------- */

// [development build]
function ui5LibStyles() {
  try {
    const mapPathToDev = sPath => sPath.replace(new RegExp(`^${SRC}`), DEV)
    const aSelectLibrarySources = UI5_LIBS.filter(noPrebuild).map(
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
                  read: true
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
  } catch (error) {
    spinner.fail(error)
  }
}

// [production build]
function ui5LibStylesDist() {
  try {
    const mapPathToDist = sPath => sPath.replace(new RegExp(`^${SRC}`), DIST)
    const aSelectLibrarySources = UI5_LIBS.filter(noPrebuild).map(
      oLibrary => `${mapPathToDist(oLibrary.path)}/**/library.source.less`
    )
    const aSelectLibraryBundles = UI5_LIBS.filter(noPrebuild).reduce(
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
            .pipe(plumber(buildErrorHandler))
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
                  .pipe(plumber(buildErrorHandler))
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
                  .pipe(plumber(buildErrorHandler))
                  // minify CSS
                  .pipe(
                    cleanCSS({
                      level: 2
                    })
                  )
                  .pipe(gulp.dest(DIST))
                  .on('error', reject)
                  .on('end', resolve)
              )
          )
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * bundle theme styles in library.css file
 * ----------------------------------------------------------- */

// [development & production build]
function copyUi5Theme() {
  try {
    //const sSourceID = pkg.ui5.src
    //const oSource = pkg.ui5.srcLinks[sSourceID]
    //const sUI5Version = oSource.version
    const sUI5Version = getUI5Version()
    //const sCompiledURL = handlebars.compile(oSource.url)(oSource)
    // const isPrebuild = oSource.isPrebuild
    // const isArchive = oSource.isArchive
    // const isRemoteLibrary =
    //   sCompiledURL.startsWith('http') && !isArchive && isPrebuild
    // const sLocalPath = oSource.path || ''

    // const sOpenUI5PathNaked = path.join(`${UI5}/${sUI5Version}`, sLocalPath)
    // const sOpenUI5PathWrapped = path.join(
    //   `${UI5}/${sUI5Version}/resources`,
    //   sLocalPath
    // )

    // const sUI5Path = fs.existsSync(path.resolve(__dirname, sOpenUI5PathWrapped))
    //   ? sOpenUI5PathWrapped
    //   : sOpenUI5PathNaked

    //TODO:Wh no path joining here??
    let sUI5Path = `${UI5}/${sUI5Version}/resources`

    if (UI5_THEMES.length === 0) {
      return Promise.resolve()
    }

    // if (isRemoteLibrary) {
    //   throw 'Custom UI5 theme build can only be used with a local UI5 library (remote UI5 libs are not supported).'
    // }

    // copy UI5 theme resources to path/to/my/theme/UI5 [one-time after building ui5]
    const aThemeUpdates = UI5_THEMES.filter(noPrebuild).map(
      oTheme =>
        new Promise((resolve, reject) =>
          gulp
            .src(
              [
                `${sUI5Path}/**/*.css`,
                `${sUI5Path}/**/themes/**/*`,
                `!${sUI5Path}/**/themes/**/library.css`,
                `!${sUI5Path}/**/themes/**/library-*.css`,
                `!${sUI5Path}/**/themes/**/*.json`
              ],
              {
                base: `${sUI5Path}`
              }
            )
            .pipe(plumber(buildErrorHandler))
            .pipe(gulp.dest(path.resolve(oTheme.path, 'UI5')))
            .on('error', reject)
            .on('end', resolve)
        )
    )

    return Promise.all(aThemeUpdates)
  } catch (error) {
    spinner.fail(error)
  }
}

// [development & production build]
function copyUi5LibraryThemes() {
  try {
    // copy UI5 theme resources to path/to/my/theme/UI5 [one-time after building ui5]
    const aThemeUpdates = UI5_THEMES.filter(noPrebuild).reduce(
      (aUpdateList, oTheme) => {
        const sThemeTargetPath = oTheme.path.replace(
          new RegExp(`^${SRC}`),
          IS_DEV_MODE ? DEV : DIST
        )

        const aNpmUi5Lib = NPM_UI5_LIBS.map(oLib => {
          const sNpmUi5BasePath = oLib.path.replace(
            new RegExp(`${oLib.name.replace('.', '/')}$`),
            ''
          )
          return new Promise((resolve, reject) =>
            gulp
              .src(
                [
                  `${oLib.path}/**/themes/**/*`,
                  `!${oLib.path}/**/themes/**/*.less`
                ],
                {
                  base: sNpmUi5BasePath
                }
              )
              .pipe(plumber(buildErrorHandler))
              .pipe(gulp.dest(`${sThemeTargetPath}/UI5`))
              .on('error', reject)
              .on('end', resolve)
          )
        })
        return aUpdateList.concat(aNpmUi5Lib)
      },
      []
    )

    return Promise.all(aThemeUpdates)
  } catch (error) {
    spinner.fail(error)
  }
}

// [development build]
function ui5ThemeStyles() {
  try {
    const mapPathToDev = sPath => sPath.replace(new RegExp(`^${SRC}`), DEV)
    const aSelectLibrarySources = UI5_THEMES.filter(noPrebuild).map(
      oTheme =>
        `${mapPathToDev(
          oTheme.path
        )}/**/themes/${TARGET_THEME}/library.source.less`
    )
    const aSelectLibraryBundles = UI5_THEMES.filter(noPrebuild).reduce(
      (aBundles, oTheme) =>
        aBundles.concat([
          `${mapPathToDev(oTheme.path)}/**/themes/${TARGET_THEME}/library.css`,
          `${mapPathToDev(
            oTheme.path
          )}/**/themes/${TARGET_THEME}/library-RTL.css`
        ]),
      []
    )

    return paths.themeStyles.src.length === 0
      ? Promise.resolve()
      : new Promise((resolve, reject) => {
          // 1. copy theme resources (assets) to DEV
          gulp
            .src(paths.themeStyles.src, {
              base: SRC,
              // filter out unchanged files between runs
              since: gulp.lastRun(ui5ThemeStyles)
            })
            // don't exit the running watcher task on errors
            .pipe(plumber())
            .pipe(gulp.dest(DEV))
            .on('error', reject)
            .on('end', resolve)
        })
          .then(
            () =>
              new Promise((resolve, reject) => {
                // 2. compile library.css
                gulp
                  .src(aSelectLibrarySources, {
                    base: DEV,
                    read: true
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
          .then(
            () =>
              new Promise((resolve, reject) =>
                /**
                 * FIXME:
                 * For yet unknown reasons, the less compiler replaces some "rem" font-size units with "em".
                 * Therefore this is a hacky fix to transform all font-sizes back from "em" to "rem" without changing the values.
                 */
                gulp
                  .src(aSelectLibraryBundles, {
                    base: DEV,
                    read: true
                  })
                  .pipe(plumber())
                  .pipe(
                    tap(oFile => {
                      const sCSS = oFile.contents.toString('utf8')
                      oFile.contents = new Buffer(
                        sCSS.replace(/(\s*\d*\.?\d+)em/gm, '$1rem')
                      )
                      return oFile
                    })
                  )
                  .pipe(gulp.dest(DEV))
                  .on('error', reject)
                  .on('end', resolve)
              )
          )
  } catch (error) {
    spinner.fail(error)
  }
}

// [production build]
function ui5ThemeStylesDist() {
  try {
    const mapPathToDist = sPath => sPath.replace(new RegExp(`^${SRC}`), DIST)
    const aSelectLibrarySources = UI5_THEMES.filter(noPrebuild).map(
      oTheme =>
        `${mapPathToDist(
          oTheme.path
        )}/**/themes/${TARGET_THEME}/library.source.less`
    )
    const aSelectLibraryBundles = UI5_THEMES.filter(noPrebuild).reduce(
      (aBundles, oTheme) =>
        aBundles.concat([
          `${mapPathToDist(oTheme.path)}/**/themes/${TARGET_THEME}/library.css`,
          `${mapPathToDist(
            oTheme.path
          )}/**/themes/${TARGET_THEME}/library-RTL.css`
        ]),
      []
    )

    return paths.themeStyles.src.length === 0
      ? Promise.resolve()
      : new Promise((resolve, reject) => {
          // 1. copy theme resources (assets) to DEV
          gulp
            .src(paths.themeStyles.src, {
              base: SRC
            })
            .pipe(plumber(buildErrorHandler))
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
                  .pipe(plumber(buildErrorHandler))
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
                    read: true
                  })
                  .pipe(plumber(buildErrorHandler))
                  .pipe(
                    /**
                     * FIXME:
                     * For yet unknown reasons, the less compiler replaces some "rem" font-size units with "em".
                     * Therefore this is a hacky fix to transform all font-sizes back from "em" to "rem" without changing the values.
                     */
                    tap(oFile => {
                      const sCSS = oFile.contents.toString('utf8')
                      oFile.contents = new Buffer(
                        sCSS.replace(/(\s*\d*\.?\d+)em/gm, '$1rem')
                      )
                      return oFile
                    })
                  )
                  // TODO: disable clean CSS until v4.2 is released, because svg styles are beeing removed
                  // minify CSS
                  // .pipe(
                  //   cleanCSS({
                  //     level: 2
                  //   })
                  // )
                  .pipe(gulp.dest(DIST))
                  .on('error', reject)
                  .on('end', resolve)
              )
          )
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * load dependencies
 * ----------------------------------------------------------- */

// [helper function]
function getExposedModuleName(sModule) {
  switch (sModule) {
    // define exceptions here, e.g.:
    // case 'lodash':
    //   return '_'
    default:
      // turn to camel case (e.g. "ok js", "ok-js", "ok_js", "ok/js become all "okJs")
      return sModule
        .replace(/[\s-/_.](.)/g, $1 => $1.toUpperCase())
        .replace(/[\s-/_.]/g, '')
        .replace(/^(.)/, $1 => $1.toLowerCase())
  }
}

/**
 * Helper function fo filter out all ui5 deps, as they will be considered separetly
 */
function allExplicitDependencies() {
  return mainNpmFiles().filter(sEntry => {
    const sModuleName = sEntry.split('/node_modules/')[1].split('/')[0]
    return !sModuleName.startsWith('@openui5')
  })
}

// [development build]
function loadDependencies() {
  if (!NPM_MODULES_TARGET.path || NPM_MODULES_TARGET.path.length === 0) {
    return Promise.resolve()
  }

  const aDependencies = allExplicitDependencies()
  const sVendorLibsPathSrc = pkg.ui5.vendor ? pkg.ui5.vendor.path : ''
  const sVendorLibsPathDev = sVendorLibsPathSrc.replace(
    new RegExp(`^${SRC}`),
    DEV
  )

  const aEntryBuilds = aDependencies.map(
    sEntry =>
      new Promise((resolve, reject) => {
        const sModuleName = sEntry.split('/node_modules/')[1].split('/')[0]
        const sGlobalName = getExposedModuleName(sModuleName)
        // console.log(sEntry)
        // console.log(sModuleName)
        // console.log(sGlobalName)
        return (
          browserify({
            entries: sEntry,
            // global name will never be exposed, cause we wrap the module in an ui5 define statement
            standalone: sGlobalName
          })
            // babel will run with the settings defined in `.babelrc` file
            .transform(babelify)
            .bundle()
            .pipe(source(`${sModuleName}.js`))
            .pipe(buffer())
            // wrap complete module to be compatible with ui5 loading system
            .pipe(
              tap(file => {
                file.contents = Buffer.concat([
                  new Buffer(
                    `sap.ui.define([/* no dependencies */], function(){
                      var exports = {};
                      var module = { exports: null };`
                  ),
                  file.contents,
                  new Buffer(`return module.exports; });`)
                ])
              })
            )
            .pipe(gulp.dest(sVendorLibsPathSrc))
            .pipe(gulp.dest(sVendorLibsPathDev))
            .on('error', reject)
            .on('end', resolve)
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
              .pipe(gulp.dest(sVendorLibsPathSrc))
              .pipe(gulp.dest(sVendorLibsPathDev))
              .on('error', reject)
              .on('end', resolve)
          : resolve()
      })
  )

  const oExternalModuleCopy = new Promise((resolve, reject) => {
    return NPM_UI5_MODULES.length > 0
      ? gulp
          .src(
            NPM_UI5_MODULES.map(oModule => `${oModule.path}/**/*`),
            {
              base: './'
            }
          )
          .pipe(gulp.dest(DEV))
          .on('error', reject)
          .on('end', resolve)
      : resolve()
  })

  // execute all at once
  return Promise.all(
    []
      .concat(aEntryBuilds)
      .concat(aStyleCopy)
      .concat(oExternalModuleCopy)
  )
}

// [production build]
function loadDependenciesDist() {
  try {
    if (!NPM_MODULES_TARGET.path || NPM_MODULES_TARGET.path.length === 0) {
      return Promise.resolve()
    }

    const aDependencies = allExplicitDependencies()
    const sVendorLibsPathSrc = pkg.ui5.vendor ? pkg.ui5.vendor.path : ''
    const sVendorLibsPathDist = NPM_MODULES_TARGET.path.replace(
      new RegExp(`^${SRC}`),
      DIST
    )

    const aEntryBuilds = aDependencies.map(
      sEntry =>
        new Promise((resolve, reject) => {
          const sModuleName = sEntry.split('/node_modules/')[1].split('/')[0]
          const sGlobalName = getExposedModuleName(sModuleName)
          return (
            browserify({
              entries: sEntry,
              // global name will never be exposed, cause we wrap the module in an ui5 define statement
              standalone: sGlobalName
            })
              // babel will run with the settings defined in `.babelrc` file
              .transform(babelify)
              .bundle()
              .pipe(plumber(buildErrorHandler))
              .pipe(source(`${sModuleName}.js`))
              .pipe(buffer())
              // wrap complete module to be compatible with ui5 loading system
              .pipe(
                tap(file => {
                  file.contents = Buffer.concat([
                    new Buffer(
                      `sap.ui.define([/* no dependencies */], function(){
                      var exports = {};
                      var module = { exports: null };`
                    ),
                    file.contents,
                    new Buffer(`return module.exports; });`)
                  ])
                })
              )
              .pipe(gulp.dest(sVendorLibsPathSrc))
              // save non-minified copies with debug suffix
              .pipe(
                rename({
                  suffix: '-dbg'
                })
              )
              .pipe(gulp.dest(sVendorLibsPathDist))
              // process copies without suffix
              .pipe(
                rename(path => {
                  path.basename = path.basename.replace(/-dbg$/, '')
                })
              )
              // minify scripts
              .pipe(uglify())
              .pipe(gulp.dest(sVendorLibsPathDist))
              .on('error', reject)
              .on('end', resolve)
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
                .pipe(gulp.dest(sVendorLibsPathSrc))
                .pipe(gulp.dest(sVendorLibsPathDist))
                .on('error', reject)
                .on('end', resolve)
            : resolve()
        })
    )

    const oExternalModuleCopy = new Promise((resolve, reject) => {
      return NPM_UI5_MODULES.length > 0
        ? gulp
            .src(
              NPM_UI5_MODULES.map(oModule => `${oModule.path}/**/*`),
              {
                base: './'
              }
            )
            .pipe(gulp.dest(DIST))
            .on('error', reject)
            .on('end', resolve)
        : resolve()
    })

    // execute all at once
    return Promise.all(
      []
        .concat(aEntryBuilds)
        .concat(aStyleCopy)
        .concat(oExternalModuleCopy)
    )
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * hash module paths (content based) to enable cache buster
 * ----------------------------------------------------------- */

// [production build]
function ui5cacheBust() {
  try {
    // update spinner state
    spinner.text = 'Run cache buster...'

    if (BUILD.cacheBuster === false) {
      return Promise.resolve('Cache buster is deactivated.')
    }

    // console.log('paths.htmlEntries.src', paths.htmlEntries.src)
    return paths.htmlEntries.src.length === 0
      ? Promise.resolve()
      : gulp
          .src(paths.htmlEntries.src)
          .pipe(plumber(buildErrorHandler))
          // rename UI5 module (app component) paths and update index.html
          .pipe(tap(oFile => ui5Bust(oFile)))
          .pipe(gulp.dest(DIST))
  } catch (error) {
    spinner.fail(error)
  }
}

/* ----------------------------------------------------------- *
 * precompress files with gzip and brotli
 * ----------------------------------------------------------- */

// [production build]
function preCompressionGzip() {
  // update spinner state
  spinner.text = 'Run pre compression...'

  if (!BUILD.compression || !BUILD.compressionGzip) {
    return Promise.resolve()
  }

  return (
    gulp
      .src([
        `${DIST}/**/*.{js,css,html,svg,xml,json,txt,properties}`,
        `${UI5}/**/*.{js,css,html,svg,xml,json,txt,properties}`
      ])
      // create .gz (gzip) files
      .pipe(
        gzip({
          skipGrowingFiles: true
        })
      )
      .pipe(gulp.dest(DIST))
  )
}

// [production build]
function preCompressionBrotli() {
  // update spinner state
  spinner.text = 'Run pre compression...'

  if (!BUILD.compression || !BUILD.compressionBrotli) {
    return Promise.resolve()
  }

  return (
    gulp
      .src([
        `${DIST}/**/*.{js,css,html,svg,xml,json,txt,properties}`,
        `${UI5}/**/*.{js,css,html,svg,xml,json,txt,properties}`
      ])
      // create .br (brotli) files
      .pipe(
        brotli.compress({
          extension: 'br',
          skipLarger: true
        })
      )
      .pipe(gulp.dest(DIST))
  )
}

/* ----------------------------------------------------------- *
 * update sensum version info
 * ----------------------------------------------------------- */

// [development build]
function updateVersion() {
  try {
    // const sSourceID = pkg.ui5.src
    //const oSource = pkg.ui5.srcLinks[sSourceID]
    const sUI5Version = getUI5Version()
    const sCommitVersion = require('child_process')
      .execSync('git rev-parse HEAD')
      .toString()
      .trim()
    const sData = JSON.stringify(
      {
        name: pkg.name,
        description: pkg.description,
        vendor: pkg.vendor,
        version: `${pkg.version} (dev)`,
        builtAt: new Date(),
        commitVersion: sCommitVersion,
        ui5Version: sUI5Version
      },
      null,
      2
    )

    // write file
    return new Promise((resolve, reject) => {
      fs.writeFile(`${DEV}/sensum-version.json`, sData, oError => {
        return oError ? reject() : resolve()
      })
    })
  } catch (error) {
    spinner.fail(error)
  }
}

// [production build]
export function updateVersionDist() {
  try {
    const sUI5Version = getUI5Version()

    // NOTE:This code is exist nearly identical in auris repo as well
    // -> Adapt both when applying fixes

    // Our internal versioning tag pattern
    const rSemanticVersionTag = /v(\d+).(\d+).(\d+)-?(\d*)-?.*/g
    const sCommitVersion = require('child_process')
      .execSync('git rev-parse HEAD')
      .toString()
      .trim()

    //Time stamp from git in unix format
    const sCommitTimeStamp = require('child_process')
      // .execSync('git log -1 --pretty=format:%ct')
      .execSync(
        `git rev-list --format=format:'%ct' --max-count=1 ${sCommitVersion}`
      )
      .toString()
      .split('\n')[1]
      .trim()
    //Parse as js date for consistency with other timestamps
    const dCommitTimeStamp = new Date(parseInt(sCommitTimeStamp, 10) * 1000)

    const sCurrentBranch = process.env.CI_BUILD_REF_NAME || require('child_process')
      .execSync('git rev-parse --abbrev-ref HEAD')
      .toString()
      .trim()

    const sGitDescribeOutput = require('child_process')
      .execSync('git describe --abbrev=0 --tags')
      .toString()
      .trim()
    // console.log('tag: ' + sGitDescribeOutput)

    const sNoOfCommitsSinceTag = require('child_process')
      .execSync(
        `git log --ancestry-path ${sGitDescribeOutput}..HEAD --oneline | wc -l`
      )
      .toString()
      .trim()
    // console.log('NoOfCommitsSinceTag: ' + sNoOfCommitsSinceTag)

    const iNoOfCommitsSinceTag = parseInt(sNoOfCommitsSinceTag, 10)

    const [, majorVersion, minorVersion, patchVersion /* , commitDiffToTag */] =
      rSemanticVersionTag.exec(sGitDescribeOutput) || []
    // const iCommitDiff =
    //   (parseInt(commitDiffToTag, 10) || 0) - iNoOfCommitsSinceTag
    // const commitGrievanceSuffix =
    //   iCommitDiff !== 0
    //     ? `(${iCommitDiff > 0 ? '+' : '-'}${iCommitDiff} unexpected commits)`
    //     : ''

    let sSuffix = ''
    switch (sCurrentBranch) {
      case 'master':
        sSuffix = iNoOfCommitsSinceTag > 0 ? `-dev.${sNoOfCommitsSinceTag}` : ''
        break
      case 'deploy/demo':
        sSuffix = iNoOfCommitsSinceTag > 0 ? `-hf.${sNoOfCommitsSinceTag}` : ''
        break
      case 'deploy/production':
        sSuffix = iNoOfCommitsSinceTag > 0 ? `-hf.${sNoOfCommitsSinceTag}` : ''
        break
      default:
        // other branch or no branch
        sSuffix =
          iNoOfCommitsSinceTag > 0
            ? `-${sCurrentBranch}.${sNoOfCommitsSinceTag}`
            : ''
    }

    if (!majorVersion && majorVersion !== 0)
      throw 'Could not parse majorVersion: ' + majorVersion
    if (!minorVersion && minorVersion !== 0)
      throw 'Could not parse minorVersion: ' + minorVersion
    if (!patchVersion && patchVersion !== 0)
      throw 'Could not parse patchVersion: ' + patchVersion

    // concat version
    let derivedVersion = _buildVersion(
      majorVersion,
      minorVersion,
      patchVersion,
      // `${sSuffix} ${commitGrievanceSuffix}`
      `${sSuffix}`
    )

    gutil.log(
      'Software Version derived from git tag: ' +
        gutil.colors.bold(derivedVersion)
    )

    const sData = JSON.stringify(
      {
        name: pkg.name,
        description: pkg.description,
        vendor: pkg.vendor,
        version: derivedVersion,
        builtAt: new Date(),
        commitVersion: sCommitVersion,
        commitTimeStamp: dCommitTimeStamp,
        ui5Version: sUI5Version
      },
      null,
      2
    )

    // write file
    // $FlowFixMe: add proper type annotation
    return new Promise((resolve, reject) =>
      fs.writeFile(`${DIST}/sensum-version.json`, sData, oError =>
        oError ? reject() : resolve()
      )
    )
  } catch (error) {
    gutil.log(gutil.colors.red(error.message || error))
    spinner.fail(error)
  }
}

/**
 * Helper function to construct the final software version as string
 * @param majorVersion
 * @param minorVersion
 * @param patchVersion
 * @param sSuffix
 * @return {string}
 * @private
 */
function _buildVersion(majorVersion, minorVersion, patchVersion, sSuffix) {
  return `${majorVersion}.${minorVersion}.${patchVersion}${sSuffix}`
}
