const { src, dest, series, watch } = require('gulp');
const gulpSass = require('gulp-sass');  
const browserSync = require('browser-sync');  

function sass() {
  return src('css/source/*.scss')
    .pipe(gulpSass({includePaths: ['css/source']}))
    .pipe(dest('css'));
}

function serve() {
  browserSync.init( {
    server: {
      baseDir: "../"
    }
  });

  watch("css/source/*.scss").on('change', series(sass, browserSync.reload));
}

exports.sass = sass;
exports.default = serve;