/**
 * Created by tedyuen on 2017/1/23.
 */
const gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var del = require('del');
var obfuscate = require('gulp-obfuscate');
var sass = require('gulp-sass');
const babel = require('gulp-babel');

