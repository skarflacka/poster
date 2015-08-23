var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babel = require('gulp-babel');

gulp.task('browserify', ['react-render', 'react-string'], function() {
  return browserify('./main.js')
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('bundle.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('react-render', function() {
  return gulp.src('./components/render/*.jsx')
    .pipe(babel())
    .pipe(gulp.dest('./views/'));
});

gulp.task('react-string', function() {
  return gulp.src('./components/string/*.jsx')
    .pipe(babel())
    .pipe(gulp.dest('./views/'));
});

gulp.task('default', ['browserify']);
