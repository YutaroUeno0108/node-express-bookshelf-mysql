
var gulp = require('gulp')
var clean = require('gulp-clean')

var param = require('gulp-param')(gulp,process.argv)
var nodemon = require('gulp-nodemon')
/*
var coffee = require('gulp-coffee')
var changed = require('gulp-changed')
var sourcemaps = require('gulp-sourcemaps')
var sequence = require('gulp-sequence')
var util = require('gulp-util')
var debug = require('gulp-debug')
var mocha = require('gulp-mocha')
var coffeelint = require('gulp-coffeelint')
var exit = require('gulp-exit')
var chmod = require('gulp-chmod')
*/

PATHS = {}
PATHS.dest = 'output'
PATHS.app = 'bin/www'

gulp.task('copy',function(){
  gulp.src('src/*')
  .pipe(gulp.dest(PATHS.dest));
});

gulp.task('clean',function(){
  gulp.src([PATHS.dest],{"read":false})
  .pipe(clean())
});

gulp.task('start',function(){
  nodemon({
    "script":PATHS.app
    ,"env":{
      "NODE_ENV":"dev"
      ,"PORT":3001
      ,"DEBUG":"knex:tx"
    }
  })
  .on('restart',function(){
      console.log('-----');
  });
});

gulp.task('default',['copy']);
