const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('backend', gulp.series(shell.task(['java -jar ./../backend/build/libs/mn-jwt-data-0.4-all.jar'])));

gulp.task('frontend', () => {
return gulp.src('./').pipe(shell(['npm start']))
})

gulp.task('default', gulp.parallel('backend', 'frontend'))
