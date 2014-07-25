module.exports = function(config) {
    config.set({
        basePath: './',
        files: [
            {pattern: 'test/**/*.spec.js', included: false},
            {pattern: 'www/js/**/*.js', included: false},
            'test.require.conf.js'
        ],
        frameworks: ['jasmine', 'requirejs'],
        exclude: [],
        reporters: ['progress'],
        junitReporter: {
            outputFile: "build/reports/test-results.xml"
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-requirejs'
        ]
    });
};
