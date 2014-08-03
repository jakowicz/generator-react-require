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
            js: {
                files: ["<%= pathConfig.rootDir %>preprocess/js/**/**"],
                tasks: ["copy:js"],
                options: {
                    spawn: false
                }
            },
            jsx: {
                files: ["<%= pathConfig.rootDir %>preprocess/jsx/**"],
                tasks: ["react"],
                options: {
                    spawn: false
                }
            },
            server: {
                files: ["<%= pathConfig.rootDir %>preprocess/server/**"],
                tasks: ["copy:server"],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ["<%= pathConfig.rootDir %>preprocess/scss/**.scss"],
                tasks: ["compass"]
            }
        },
        copy: {
            js: {
                expand: true,
                cwd: "<%= pathConfig.rootDir %>preprocess/js",
                src: "**/**",
                dest: "<%= pathConfig.webDir %>js"
            },
            server: {
                expand: true,
                cwd: "<%= pathConfig.rootDir %>preprocess/server",
                src: "**/**",
                dest: "<%= pathConfig.rootDir %>server"
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: "<%= pathConfig.rootDir %>preprocess/scss",
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
                "preprocess/js/**"
            ]
        },
        react: {
            dynamicMappings: {
                files: [
                    {
                        expand: true,
                        cwd: "<%= pathConfig.rootDir %>preprocess/jsx",
                        src: ["*.jsx"],
                        dest: "<%= pathConfig.webDir %>js/pages",
                        ext: ".js"
                    }
                ]
            }
        }
    });

    // Tasks
    grunt.registerTask("default", [ "copy", "compass", "react" ]);
    grunt.registerTask("compress", [ "uglify", "compass" ]);
    grunt.registerTask("sca", [ "jshint", "jscs" ]);
    grunt.registerTask("build", [ "jshint", "jscs", "uglify", "compass", "react", "copy" ]);

};