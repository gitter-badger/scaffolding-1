var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src(['./dist'])
    .pipe(vinylPaths(del));
});
