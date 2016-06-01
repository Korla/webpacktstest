var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      'test/*.test.ts',
      'test/**/*.test.ts'
    ],

    preprocessors: {
        // add webpack as preprocessor
        'test/**/*.test.ts': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
        noInfo: true
    }
  });
};
