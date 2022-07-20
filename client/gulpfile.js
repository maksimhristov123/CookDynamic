const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

/*
    GULP TASKS
*/

// compile scss into css

function style(){
    const scssPath = './src/assets/scss/**/*.scss';
    //where is my scss file
    return gulp.src(scssPath)
        //pass that file trougn sass compiler
        .pipe(sass().on('error', sass.logError))
        //where do I save the compiled CSS
        .pipe(gulp.dest('./src/assets/css'));
}

exports.style = style;

exports.watch = function () {
    gulp.watch('./src/assets/scss/**/*.scss', style);
};

// Default function to trigger all gulp tasks

exports.default = style;

