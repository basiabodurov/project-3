var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulp        = require('gulp');
var connect = require('gulp-connect');
var browserSync = require('browser-sync').create();

gulp.task('compress-js', function() { 
	gulp.src('js/*.js').pipe(concat('main.min.js')).pipe(uglify()).pipe(gulp.dest('build/js'))
});

gulp.task('message', function(){
	console.log('All done!')
});

gulp.task('all-the-tasks', ['compress-js', 'message'])

gulp.task('compress-css', function() { 
	gulp.src('css/*.css').pipe(concat('main.css')).pipe(gulp.dest('build/css'))
});

gulp.task('watch', function (){
	gulp.watch('js/*.js', ['compress-js']);
	gulp.watch('css/*.css', ['compress-css']);

});

gulp.task('connect', function() { 
	connect.server();
});

gulp.task('browser-sync', ['compress-css', 'compress-js'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
gulp.watch(["index.html","css/*.css","js/*.js"]).on('change', browserSync.reload);
});