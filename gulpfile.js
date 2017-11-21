var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

var pump = require('pump');
var reload = browserSync.reload;

var src = {
	scss: './src/scss/**/*.scss',
	js: './src/js/*.js',
	css: './app/assets/css',
	html: './app/*.html'
};

var vendor_dir = './app/assets/js/vendor/';
var vendor_libs = [
	vendor_dir + 'lodash.custom.js',
	vendor_dir + 'modernizr.js',
	vendor_dir + 'gsap.js',
	vendor_dir + 'jquery.js',
	vendor_dir + 'jquery.blast.js',
	vendor_dir + 'history.js',
	vendor_dir + 'actual.js',
	vendor_dir + 'fittext.js',
	vendor_dir + 'mousewheel.js',
	vendor_dir + 'pixi.js',
	vendor_dir + 'anime.min.js'
];

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
	browserSync.init({
		server: './app',
		open: false,
		files: [
			'./app/assets/js/**/*.js'
		]
	});

	gulp.watch(src.js, ['js']);
	gulp.watch(src.scss, ['sass']);
	gulp.watch(src.html).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function () {
	return gulp
		.src(src.scss)
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: require('node-bourbon').includePaths
		}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(src.css))
		.pipe(reload({ stream: true }));
});

gulp.task('sass:prod', function () {
	return gulp
		.src(src.scss)
		.pipe(sass({
			includePaths: require('node-bourbon').includePaths
		}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(gulp.dest(src.css))
		.pipe(reload({ stream: true }));
});

gulp.task('js:vendor', function () {
	return gulp.src(vendor_libs)
		.pipe(concat('libs.min.js', { newLine: ';' }))
		.pipe(uglify())
		.pipe(gulp.dest('./app/assets/js'));
});

gulp.task('js', function (cb) {
	pump([
		gulp.src('src/js/*.js'),
		sourcemaps.init(),
		uglify(),
		sourcemaps.write(),
		rename('base.min.js'),
		gulp.dest('./app/assets/js') ],
	cb);
});

gulp.task('build', ['js', 'sass:prod']);

gulp.task('default', ['serve']);
