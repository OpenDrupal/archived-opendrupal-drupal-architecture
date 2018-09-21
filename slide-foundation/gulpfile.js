const gulp = require('gulp');  
const sass = require('gulp-sass');  
const browserSync = require('browser-sync');  

gulp.task('sass', function () {  
  gulp.src('css/source/*.scss')
      .pipe(sass({includePaths: ['css/source']}))
      .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {  
  browserSync.init(["css/*.css"], {
      server: {
          baseDir: "../"
      }
  });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
  gulp.watch("css/source/*.scss", ['sass']);
});
