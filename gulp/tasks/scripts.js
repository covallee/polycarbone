var gulp = require('gulp');
// webpack = require('webpack');

// gulp.task('scripts',['modernizr'], function(callback){
//   webpack(require('../../webpack.config.js'), function(err, stats){
//     if(err){
//       console.log(err.toString());
//     }
//     console.log(stats.toString());
//     callback();
//   });
// });
gulp.task('scripts', function() {
  return gulp.src('./app/assets/scripts/*.js')
    .pipe(gulp.dest('./app/temp/scripts'));
});

