let gulp = require('gulp');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssvars = require('postcss-simple-vars');
let nested = require('postcss-nested');
let cssImport = require('postcss-import'),
 hexrgba = require('postcss-hexrgba');


gulp.task('styles', function(){
return gulp.src('./app/assets/styles/styles.css')
.pipe(postcss([cssImport, cssvars, nested,hexrgba, autoprefixer]))
.on('error', function(errorInfo){
console.log(errorInfo.toString());
this.emit('end');
})
.pipe(gulp.dest('./app/temp/styles'));
})