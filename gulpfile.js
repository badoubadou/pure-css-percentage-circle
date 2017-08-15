// Gulpfile
var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyCSS    = require('gulp-minify-css');
var stylus    = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
 


gulp.task('default', function() {
    //implementation of the task
    gutil.log('== My Log Task ==');
    gulp.src('./src/styl/*.styl')
	.pipe(stylus({
		compress: true
	}))
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(minifyCSS())
	.pipe(gulp.dest('./styles/'))

	gulp.src('./src/pug/*.pug')
	.pipe(pug({
	// Your options in here. 
	}))
	.pipe(gulp.dest('./'))

});