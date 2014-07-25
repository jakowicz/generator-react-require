module.exports = function(grunt) {
    "use strict";

    // Load grunt plugins
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Paths configuration
    var pathConfig     = {};
    pathConfig.rootDir = "./";
    pathConfig.webDir  = pathConfig.rootDir + "www/";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        pathConfig: pathConfig,
        uglify: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: "preprocess/js",
                        src: "**/**.js",
                        dest: "www/js"
                    }
                ]
            }
        },
        watch: {
            scripts: {
                files: ["<%= pathConfig.rootDir %>preprocess/js/**"],
                tasks: ["react"],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ["<%= pathConfig.rootDir %>preprocess/sass/*.scss"],
                tasks: ["compass"]
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: "<%= pathConfig.rootDir %>preprocess/sass",
                    cssDir: "<%= pathConfig.webDir %>css",
                    outputStyle: "compressed"
                }
            }
        },
        jshint: {
            all: {
                src: [
                    "*.js",
                    "*.json",
                    "preprocess/js/**"
                ],
                options: {
                    jshintrc: true
                }
            }
        },
        jscs: {
            src: [
                "bower.json",
                "Gruntfile.js",
                "package.json",
                "preprocess/js/**",
            ]
        },
        react: {
            dynamic_mappings: {
                files: [
                    {
                        expand: true,
                        cwd: "<%= pathConfig.rootDir %>preprocess/js",
                        src: ["*.jsx"],
                        dest: '<%= pathConfig.webDir %>js',
                        ext: '.js'
                    }
                ]
            }
        }
    });

    // Tasks
    grunt.registerTask("default", [ "copy", "compass" ]);
    grunt.registerTask("compress", [ "uglify", "compass" ]);
    grunt.registerTask("sca", [ "jshint", "jscs" ]);
    grunt.registerTask("build", [ "jshint", "jscs", "uglify", "compass" ]);

};