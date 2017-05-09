import gulp from 'gulp';
import gulpNodemon from 'gulp-nodemon';
import expressServer from 'gulp-express';
import jasmineNode from 'gulp-jasmine-node';
import istanbul from 'gulp-istanbul';
import istanbulReport from 'gulp-istanbul-report';
import gulpCoveralls from 'gulp-coveralls';
import babel from 'gulp-babel';
import babelRegister from 'babel-register';

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
  gulpNodemon({
    script: 'index.js',
    ext: 'js html',
    env: { 'NODE_ENV': process.env.NODE_ENV }
  });
  // gulp.src('index.js')
  //   .pipe(babel())
  //   .pipe(gulpNodemon());
  // // expressServer.run('index.js');
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

