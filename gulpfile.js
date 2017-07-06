/**
 * Created by suyanlong on 17-7-4.
 */

var gulp = require("gulp");
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// css compress
gulp.task('minifycss', function() {
    return gulp.src('src/css/*.css')        //压缩的文件
        .pipe(minifycss())                  //执行压缩
        .pipe(gulp.dest('dist/css'));        //输出文件夹
});


gulp.task('minifyjs', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.js'))              //合并所有js到main.js
        .pipe(gulp.dest('dist/js'))          //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))      //rename压缩后的文件名
        .pipe(uglify())                      //压缩
        .pipe(gulp.dest('dist/js'));          //输出
});

gulp.task('build', ['minifycss', 'minifyjs']);

// 监视文件的变化，当文件有更新时执行build任务
gulp.task('watch', function () {
    gulp.watch(['src/js/*.js', 'src/css/*.css'], ['build']);
});

gulp.task('default', ['build', 'watch']);