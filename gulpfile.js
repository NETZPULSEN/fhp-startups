var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
	gulp.src('docs/_scss/screen.scss')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}))
	.pipe(gulp.dest('docs/css'))
	.pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('docs/_scss/**/*.scss', ['sass']);
});

gulp.task('default',['watch']);