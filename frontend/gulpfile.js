const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('backend', shell.task(['java -jar ./libs/mn-jwt-data-0.4-all.jar']))//путь к jar файлу сервера
//java -jar ./micronautserver/micronautserver-0.1-all.jar
// gulp.task('backend', gulp.series(shell.task(['java -jar ../backend/build/libs/mn-jwt-data-0.4-all.jar'])));
// ../backend/build/libs/mn-jwt-data-0.4-all.jar

gulp.task('frontend', () => {
return gulp.src('./').pipe(shell(['npm start']))
})

gulp.task('default', gulp.parallel('backend', 'frontend'))
