// import gulp from 'gulp';
// import gutil from 'gulp-util';
// import jasmineNode from 'gulp-jasmine-node';

const gulp = require('gulp'),
  gutil = require('gulp-util'),
  gulpNodemon = require('gulp-nodemon'),
  expressServer = require('gulp-express'),
  jasmineNode = require('gulp-jasmine-node'),
  istanbulReport = require('gulp-istanbul-report'),
  Server = require('karma').Server;

const coverageFile = './coverage/coverage.json';
const jasmineNodeOpts = {
  timeout: 1000,
  includeStackTrace: false
};

gulp.task('default', () => {
  return gutil.log('gulp is running');
});

// gulp.task('run-tests', () => {
//   return gulp.src(['./tests/**/*inverted-index-test.js']).pipe(jasmineNode(jasmineNodeOpts));
// });

/**
 * Run test once and exit
 */
gulp.task('run-tests', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


gulp.task('serve', () => {
  expressServer.run(['server.js']);
});

gulp.task('coverage', ['run-tests'], () => {
  gulp.src(coverageFile)
    .pipe(istanbulReport({
      reporters: [
        'text-summary',
        {
          name: 'json',
          file: 'cov.json',
          dir: './coverage'
        }
      ]
    }));
});

// gulp.task('js', ['jscs', 'jshint'], () => {
//   return gulp
//     .src('./src/**/*.js')
//     .pipe(conat('all.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./build/'));
// });

