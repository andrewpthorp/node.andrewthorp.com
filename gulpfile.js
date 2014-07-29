var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['styles', 'watch']);

gulp.task('styles', function(){
  return gulp.src('./public/stylesheets/site.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch('./public/stylesheets/**/*.scss', ['styles']);
});
