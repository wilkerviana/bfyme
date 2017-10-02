"use strict";
const gulp  = require('gulp'),
      bs    = require('browser-sync'),
      view  = require('gulp-pug'),
      plumb = require('gulp-plumber'),
      style = require('gulp-sass'),
      watch = require('gulp-watch'),
      aprefixer = require('gulp-autoprefixer'),
      imagemin  = require('gulp-imagemin'),
      sourcemap = require('gulp-sourcemaps'),
      styleglob = require('gulp-sass-glob'),
      webpack   = require('webpack-stream');

gulp.task('bs', function(){
  bs.init({
    server:{
      baseDir: 'dist'
    }
  });

  gulp.start(['images', 'script', 'style', 'view']);

  gulp.watch('src/**/*.js', ['script']);
  gulp.watch('src/**/*.scss', ['style']);
  gulp.watch('src/**/*.pug', ['view']);
  gulp.watch('src/images/*', ['images']);
  gulp.watch('dist/**/*').on('change', () => {
    bs.reload();
  });
});

gulp.task('style',() => {
  gulp.src('src/styles/*.scss')
      .pipe(sourcemap.init())
      .pipe(plumb({
        handleError: function(error){
          console.log(error);
          this.emit('end');
        }
      }))
      .pipe(styleglob())
      .pipe(style())
      .pipe(aprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(sourcemap.write('.'))
      .pipe(gulp.dest('dist/css/'));
});

gulp.task('view',() => {
  gulp.src('src/view/*.pug')
      .pipe(view({
        pretty: true
      }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('script',() => {
  gulp.src('src/scripts/*.js')
      .pipe(webpack({
        output: {
          filename: '[name].js'
        }
      }))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('images',() => {
  gulp.src('src/images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
});


// default task with BrowserSync
gulp.task('default',['bs']);