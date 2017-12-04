const gulp = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const watch = require('gulp-watch');

gulp.task('default', function() {
  connect.server();
  return gulp.src([
      './node_modules/angular/angular.min.js',
      'app/**/*.js'
    ])
    .pipe(concat('scripts/bundle.js'))
    .pipe(gulp.dest('out/'));
});

gulp.task('stream', function() {
  return watch('./*.js', { ignoreInitial: false })
    .pipe(gulp.dest('build'));
});

gulp.task('callback', function() {
  return watch('./*.js', function () {
    gulp.src('./*.js')
      .pipe(gulp.dest('build'));
  });
});
