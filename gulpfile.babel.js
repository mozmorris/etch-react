"use strict";

import assign from 'lodash.assign';
import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import watchify from 'watchify';

const defaultOpts = {
  entries: './app/index.js',
  debug: true,
};
const opts = assign({}, watchify.args, defaultOpts);
const bundler = watchify(browserify(opts));
bundler.transform(babelify);

function bundle() {
  return bundler
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'))
}

bundler.on('update', bundle);

gulp.task('js', bundle);

gulp.task('default', ['js']);
