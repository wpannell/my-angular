module.exports = function(grunt) {
  //noinspection JSUnresolvedFunction
  grunt.initConfig({
    jshint:{
      all: ['src/**/*.js'],
      options: {
        globals: {
          _: false,
          $: false
        },
        browser: true,
        devel: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint') ;
};