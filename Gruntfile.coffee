module.exports = (grunt) ->
  grunt.initConfig
    jshint:
      all: [
        "src/**/*.js"
        "specs/**/*.js"
      ]
      options:
        globals:
          _: false #lodash
          $: false #jquery
          #jasmine
          jasmine: false
          describe: false
          it: false
          expect: false
          beforeEach: false
          waits: false
          runs: false

        browser: true
        devel: true

    jasmine:
      unit:
        src: "src/**/*.js"
        options:
          specs: ["specs/**/*.js"]
          vendor: [
            "node_modules/lodash/lodash.js"
            "node_modules/jquery/dist/jquery.js"
          ]

    watch:
      all:
        files: [
          "src/**/*.js"
          "specs/**/*.js"
        ]
        tasks: ["default"]

  grunt.loadNpmTasks "grunt-contrib-jshint"
  grunt.loadNpmTasks "grunt-contrib-jasmine"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.registerTask "default", ["jshint", "jasmine"]