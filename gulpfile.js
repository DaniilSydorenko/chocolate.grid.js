var gulp = require('gulp'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    gutil = require('gulp-util'),
    liveReload = require('gulp-livereload'),
    webpack = require('webpack-stream');

gulp.task('clean-js', function (done) {
    gulp.src('dist/js/*.js', {
            read: false
        })
        .pipe(clean());
    done();
});

gulp.task('concat-minify-js', function (done) {
    gulp.src('index.js')
        .pipe(webpack())
        .pipe(rename('build.min.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(liveReload({
            auto: false
        }))
        .on('end', function () {
            gutil.log('Scripts concatenated and merged!');
        });
    done();
});


gulp.task('watch', function (done) {
    gulp.watch('./app/**/*.js', gulp.series('clean-js',
        gulp.parallel('concat-minify-js')
    ));
    done();
});

gulp.task('default', gulp.series('concat-minify-js',
    gulp.parallel('watch')
));