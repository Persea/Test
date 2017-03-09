var gulp           = require('gulp'),
		browserSync    = require('browser-sync');

//Сервер
gulp.task('server', function() {
	browserSync({
		server: {
			port: 9000,
			baseDir: 'app'
		},
		notify: false
	});
});

//Слежка

gulp.task('watch', function() {
	gulp.watch([
			'app/*.php',
			'app/js/**/*.js',
			'app/css/**/*.css'
		]).on('change', browserSync.reload);
});

//задача по умолчанию
gulp.task('default', ['server','watch']);