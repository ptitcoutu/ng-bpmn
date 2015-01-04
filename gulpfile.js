var gulp = require('gulp');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
  console.info('you can run gulp serve in order to test demo');
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['demo/**/*.html', 'src/**/*.js','demo/**/*.js'], {cwd: '.'}, reload);
});

// Lint JavaScript
gulp.task('jshint', function () {
return gulp.src('src/**/*.js')
.pipe(reload({stream: true, once: true}))
.pipe($.jshint())
.pipe($.jshint.reporter('jshint-stylish'))
.pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});