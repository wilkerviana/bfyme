'use strict';

const gulp  = require('gulp'),
      bs    = require('browser-sync'),
      view  = require('gulp-pug'),
      plumb = require('gulp-plumber'),
      style = require('gulp-scss'),
      image = require('gulp-imagemin'),
      watch = require('gulp-watch');