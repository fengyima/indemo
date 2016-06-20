var gulp= require("gulp");
var compass= require("gulp-compass");
var gutil = require('gulp-util');
var browserSync= require("browser-sync");

var webpack= require("webpack");
var webpackConfig= require("./webpack.config.js");

var baseDir= "./"

//compass
gulp.task("compass", function () {
  return gulp.src("sass/*.scss")
        .pipe(compass({
          css: "./css",
          sass: "./sass",
          sourcemap: true,
          style: "compressed"
        }))
        .on("error", function () {
          console.log("compass compile error");
          this.emit("end");
        })
});

//webpack
gulp.task("webpack", function(callback){
  webpack(webpackConfig, function(err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", 'webpack done!');
    callback();
  })
});


// browserSync
gulp.task("browserSync", function () {
  browserSync({
    files: baseDir+ "*.html,"+ baseDir+ "dist/*.js,"+ baseDir+ "css/*.css",
    server: {
      baseDir: "./"
    }
  })
});


//watch
gulp.task("watch", function(){
  gulp.watch(baseDir+ "sass/*.scss", ["compass"]).on("chage", function(){
    console.log("sass files change")
  });
  gulp.watch("./components/*.js", ["webpack"]).on("change", function(){
    console.log("react compnents webpack done!")
  });
  gulp.watch("./js/*.js", ["webpack"]).on("change", function(){
    console.log("normal js file webpack done!")
  });
})


//default
gulp.task("default",["compass"], function(){
  gulp.start(["browserSync", "watch"])
});
