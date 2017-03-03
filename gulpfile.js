var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var connect = require('gulp-connect');

// task compile sass/scss
gulp.task('sass', function() {
	return gulp.src('./client/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./client/css'))
		.pipe(browserSync.reload({
		 stream:true
	}))

})

// task watch 
gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('./client/scss/**/*.scss', ['sass']);
	gulp.watch('./client/**/*.html',browserSync.reload);
	gulp.watch('./client/js/**/*.js',browserSync.reload);
})

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'client'
		}
	})
})

gulp.task('connect', function(){
	connect.server({
		root: './client',
		port: '1212'
	})
})

gulp.task('default', ['connect', 'watch']);