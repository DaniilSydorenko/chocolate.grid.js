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
    gulp.src('dist/*.js', {
            read: false
        })
        .pipe(clean());
    done();
});

gulp.task('build-js:dev', function (done) {
    gulp.src('index.js')
        .pipe(webpack())
        .pipe(rename('chocolate.grid.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(liveReload({
            auto: false
        }))
        .on('end', function () {
            gutil.log('Scripts DEV concatenated and merged!');
        });
    done();
});

gulp.task('build-js:prod', function (done) {
    gulp.src('index.js')
        .pipe(webpack())
        .pipe(rename('chocolate.grid.min.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(liveReload({
            auto: false
        }))
        .on('end', function () {
            gutil.log('Scripts PROD concatenated and merged!');
        });
    done();
});

gulp.task('watch', function (done) {
    gulp.watch('./app/**/*.js', gulp.series('clean-js',
        gulp.parallel('build-js:dev', 'build-js:prod')
    ));
    done();
});

gulp.task('default', gulp.series('build-js:dev',
    gulp.parallel('build-js:prod','watch')
));