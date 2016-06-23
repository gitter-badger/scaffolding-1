var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function() {
  return gulp.src('./src/**/*.js')
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(gulp.dest('./dist'));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist/'));
});


// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html'],
    callback
  );
});
