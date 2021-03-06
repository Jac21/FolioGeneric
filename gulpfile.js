"use strict";

var gulp = require("gulp"); // gulping!
var browserSync = require("browser-sync"); // sync browser with code changes!
var lint = require("gulp-eslint"); // lint JS files!
var imagemin = require("gulp-imagemin"); // optimizing images!
var rename = require("gulp-rename"); // renaming JS!
var sourcemaps = require("gulp-sourcemaps"); // sourcemapping!
var uncss = require("gulp-uncss"); // shedding CSS!
var crass = require("gulp-crass"); // optimizing CSS!
var concat = require("gulp-concat"); // concat helper!
var historyApiFallback = require("connect-history-api-fallback"); // local development helper!

// configuration object
var config = {
  proxyUrl: "http://localhost:8080",
  browser: "chrome",
  port: 7002,
  paths: {
    files: "**/*.*",
    images: "images/**/*.*",
    applicationJavascript: [
      "scripts/app.js",
      "scripts/controllers/*.js",
      "scripts/directives/responsiveImage.js"
    ],
    libJavascript: [
      'node_modules/angular/angular.min.js',
      'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
      'node_modules/materialize-css/dist/js/materialize.min.js'
    ],
    styles: "styles/*.css"
  }
};

// destination configuration object
var destConfig = {
  paths: {
    images: "dist/images",
    javascript: "dist/scripts",
    styles: "dist/styles",
    stylesUncss: "dist/stylesUncss",
    libJavascript: "dist/scripts/lib"
  }
};

// browser-sync task
gulp.task("browser-sync", function () {
  browserSync.init({
    files: [config.paths.files],
    browser: config.browser,
    port: config.port,
    server: {
      baseDir: "./",
      middleware: [historyApiFallback()]
    }
  });
});

// image task
gulp.task("images", function () {
  return gulp
    .src(config.paths.images)
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest(destConfig.paths.images));
});

// Scripts task
gulp.task("scripts", ["lib-scripts"], function () {
  return gulp
    .src(config.paths.applicationJavascript)
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.js"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destConfig.paths.javascript));
});

// Library scripts task
gulp.task("lib-scripts", function () {
  return gulp
    .src(config.paths.libJavascript)
    .pipe(concat("lib-bundle.js"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(destConfig.paths.libJavascript));
});

// linting task
gulp.task("lint", function () {
  return gulp
    .src(config.paths.applicationJavascript)
    .pipe(lint({ config: "eslint.config.json" }))
    .pipe(lint.format());
});

//uncss-ing task
gulp.task("uncss", function () {
  return gulp
    .src(config.paths.styles)
    .pipe(
      uncss({
        html: ["index.html", "templates/**/*.html"]
      })
    )
    .pipe(gulp.dest(destConfig.paths.stylesUncss));
});

// crass, used for CSS minification
gulp.task("crass", function () {
  return gulp
    .src(config.paths.styles)
    .pipe(crass({ pretty: false }))
    .pipe(gulp.dest(destConfig.paths.styles));
});

// watch task for any html/js changes
gulp.task("watch", function () {
  gulp.watch(config.paths.applicationJavascript, ["lint"]);
  gulp.watch(config.paths.applicationJavascript, ["scripts"]);
  gulp.watch(config.paths.libJavascript, ["lib-scripts"]);
  gulp.watch(config.paths.images, ["images"]);
  gulp.watch(config.paths.styles, ["crass"]);
});

// default gulp tasks
gulp.task("default", ["browser-sync", "watch"], function () { });
