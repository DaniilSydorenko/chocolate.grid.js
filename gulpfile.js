var gulp = require('gulp'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    webpack = require('webpack-stream');

gulp.task('default', function () {
    return gulp.src('index.js')
        .pipe(webpack())
        .pipe(rename("bundle.js"))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});
