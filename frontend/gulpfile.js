const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('backend', shell.task(['java -jar ./backend/build/libs/mn-jwt-data-0.4-all.jar']))//путь к jar файлу сервера

gulp.task('serve', () => {
return gulp.src('./').pipe(shell(['ng serve —open']))
})

gulp.task('default', gulp.parallel('backend', 'serve'))
