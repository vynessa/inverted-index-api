import gulp from 'gulp';
import jasmineNode from 'gulp-jasmine-node';
import istanbul from 'gulp-istanbul';
import istanbulReport from 'gulp-istanbul-report';
import gulpCoveralls from 'gulp-coveralls';
import babelRegister from 'babel-register';

// const gulp = require('gulp'),
//   // gulpNodemon = require('gulp-nodemon'),
//   expressServer = require('gulp-express'),
//   jasmineNode = require('gulp-jasmine-node'),
//   istanbul = require('gulp-istanbul'),
//   istanbulReport = require('gulp-istanbul-report'),
//   gulpCoveralls = require('gulp-coveralls'),
//   babelRegister = require('babel-register');

  // Server = require('karma').Server;

// const coverageFile = './coverage/coverage.json';
const jasmineNodeOpts = {
  timeout: 1000,
  includeStackTrace: false,
  color: true
};

gulp.task('run-tests', () => {
  gulp.src(['tests/*.js']).pipe(jasmineNode(jasmineNodeOpts));
});

gulp.task('serve', () => {
  expressServer.run(['server.js']);
});

gulp.task('pre-test', () => {
  gulp.src(['src/inverted-index.js', './server.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
  gulp.src(['tests/inverted-index-test.js'])
    .pipe(jasmineNode(jasmineNodeOpts))
    .pipe(istanbul.writeReports());
});

gulp.task('coverage', ['test'], () => {
  gulp.src('test/coverage/**/lcov.info')
    .pipe(gulpCoveralls());
});


// gulp.task('js', ['jscs', 'jshint'], () => {
//   return gulp
//     .src('./src/**/*.js')
//     .pipe(conat('all.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./build/'));
// });

