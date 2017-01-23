/**
 * Created by tedyuen on 2017/1/23.
 */
const gulp = require('gulp');

const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');
const obfuscate = require('gulp-obfuscate');
const sass = require('gulp-sass');
const babel = require('gulp-babel');


var jsArr = [
  './app/source/src/main.js',
  './app/source/src/appController.js'
]

gulp.task('js',function(){
  gulp.src(jsArr)
    .pipe(concat('all.js'))
    // .pipe(babel({
    //   presets: ['es2015']
    // }))
    .pipe(gulp.dest('./app/source/src'))
    .pipe(rename({suffix: '.min'}))
    .pipe(browserify())
    // .pipe(uglify({ mangle: false, compress:true, output: { beautify: false } }))
    //.pipe(obfuscate())
    .pipe(gulp.dest('./app/out/js'));
});

var cssArr = [
  './app/source/css/bootstrap.min.css',
  './app/source/sass/css/*.css'
]

gulp.task('delCss',function(){
  del([
    './app/source/sass/css/*.*'
  ]);
});
gulp.task('sass',['delCss'], function () {
  return gulp.src('./app/source/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/source/sass/css'));
  // gulp.run('concatcss');
  // gulp.run('minify-css');
});

gulp.task('concatcss',['sass'],function(){
  return gulp.src(cssArr)    //- 需要处理的css文件，放到一个字符串数组里
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./app/source/css'));
});

gulp.task('css',['concatcss'], function() {
  return gulp.src('./app/source/css/all.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./app/out/css'));
});


gulp.task('default',['js','css']);
