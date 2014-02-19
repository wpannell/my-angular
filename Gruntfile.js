module.exports = function(grunt) {
  //noinspection JSUnresolvedFunction
  grunt.initConfig({
    jshint:{
      all: ['src/**/*.js', 'specs/**/*.js'],
      options: {
        globals: {
          _: false, //lodash
          $: false, //jquery

          //jasmine
          jasmine: false,
          describe: false,
          it: false,
          expect: false,
          beforeEach: false,
          waits: false,
          runs: false
        },
        browser: true,
        devel: true
      }
    },
    jasmine:{
      unit:{
        src: 'src/**/*.js',
        options:{
          specs: ['specs/**/*.js']
        }
      }
    }
    });

  grunt.loadNpmTasks('grunt-contrib-jshint') ;
  grunt.loadNpmTasks('grunt-contrib-jasmine') ;
};