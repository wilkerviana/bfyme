"use strict";
const gulp  = require('gulp'),
      bs    = require('browser-sync'),
      view  = require('gulp-pug'),
      plumb = require('gulp-plumber'),
      style = require('gulp-sass'),
      image = require('gulp-imagemin'),
      watch = require('gulp-watch');

gulp.task('bs', function(){
  bs.init({
    server:{
      baseDir: 'dist'
    }
  });

  gulp.watch('src/**/*.js', ['script']);
  gulp.watch('src/**/*.scss', ['style']);
  gulp.watch('src/**/*.pug', ['view']);
  gulp.watch('dist/**/*').on('change', () => {
    bs.reload();
  });
});

gulp.task('style',() => {
  gulp.src('src/styles/*.scss')
      .pipe(plumb({
        handleError: function(error){
          console.log(error);
          this.emit('end');
        }
      }))
      .pipe(style())
      .pipe(gulp.dest('dist/css/'));
});

gulp.task('view',() => {
  gulp.src('src/view/*.pug')
      .pipe(view({
        pretty: true
      }))
      .pipe(gulp.dest('dist/'));
});


// default task with BrowserSync
gulp.task('default',['bs']);