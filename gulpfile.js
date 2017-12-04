const gulp = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');

gulp.task('default', function() {
  connect.server();
  return gulp.src([
      './node_modules/angular/angular.min.js',
      'app/**/*.js'
    ])
    .pipe(concat('scripts/bundle.js'))
    .pipe(gulp.dest('out/'));
});
