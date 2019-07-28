const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
let usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

//revision i kompresja po każdym zachowaniu zmian.
gulp.task('previewDist', function(){
    browserSync.init({
        notify: false,
        server: {
        baseDir: "docs"
        }
        });
});

//usuwanie folderu dist przed każdym dokonaniem zmian
gulp.task('deleteDistFolder',['icons'] , function(){
return del('./docs');
});

//kopiowanie plików do dist folder.
gulp.task('copyGeneralFiles',['deleteDistFolder'], function(){
    let pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ] 
    return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
    }); 
    
 

//kopiowanie wszystkim img do dist folder oraz ich kompresja
gulp.task('optimizeImages',['deleteDistFolder'], function(){
//które zdjęcia chcę skopiować, idż do images folder i złap subfodery wraz z plikami wewnątrz,  ścieżki z wykrzyknikami - to co ma zostać wykluczone.
return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
.pipe(imagemin({
progressive: true,
//git images
interlaced: true,
//svg files
multipass: true
}))
.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger',['deleteDistFolder'], function(){
gulp.start("usemin");
});

//revision i kompresja plików js i css.
gulp.task('usemin', ['styles','scripts'], function(){
return gulp.src('./app/index.html')
.pipe(usemin({
css: [
function(){
//revision of files css
return rev();
}, 
//kompresja plików css
function(){
return cssnano();
}],
js: [
function(){
//revision of files js
return rev();
},
function(){
//kompresja plików js
return uglify();
}
]
}))
.pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder' ,'copyGeneralFiles' , 'optimizeImages', 'useminTrigger']);