const gulp = require('gulp')
const gulpif = require('gulp-if')
const tap = require('gulp-tap')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const ui5preload = require('gulp-ui5-preload')
const gulpSequence = require('gulp-sequence')

const CONFIG = {
  libs: [
    {
      name: 'ui5.libs',
      path: './src/ui5',
      createPreload: true
    }
  ]
}

// default task
gulp.task('default', done => {
  gulpSequence(
    'scripts',
    // 'ui5-preload',
    done
  )
})

// lint task to compile babel es2016 to es2015 and save them minified
gulp.task('scripts', () => {
  return gulp
    .src([
      './src/**/*.js',
      '!./src/**/*-dbg.js',
      '!./src/**/*-preload.js',
      '!./src/vendor/**/*'
    ])
    .pipe(babel())
    .pipe(rename({ suffix: '-dbg' }))
    .pipe(gulp.dest('./src'))
})

// build library-preload.js file for all ui5 modules
gulp.task('ui5-preload', () =>
  Promise.all(
    CONFIG.libs.filter(oLib => oLib.createPreload).map(
      oLib =>
        new Promise((resolve, reject) =>
          gulp
            .src([`${oLib.path}/**/*.js`, `!${oLib.path}/**/*-dbg.js`])
            // will apply settings from /.babelrc automatically
            .pipe(babel())
            // minify JS
            // .pipe(uglify())
            // create library-preload.json
            .pipe(
              ui5preload({
                base: `${oLib.path}`,
                namespace: oLib.name,
                isLibrary: true // if set to true a library-preload.json file is emitted instead of a Component-preload.js file (default)
              })
            )
            // transform all library-preload.json files to transform all library-preload.js (mandatory since OpenUI5 1.40)
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
            // only generate library-preload.js in distribution folder
            .pipe(gulp.dest(`${oLib.path}`))
            .on('end', resolve)
            .on('error', reject)
        )
    )
  )
)
