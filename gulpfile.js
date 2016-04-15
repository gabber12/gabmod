var gulp = require('gulp'),
    gutils = require('gulp-util'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('watch', () => {
    gulp.watch('src/**/*', ['build', 'sass']);
});
gulp.task('build', () => {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
