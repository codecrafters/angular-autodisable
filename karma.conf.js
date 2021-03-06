module.exports = function (config) {
  'use strict';
  config.set({
    frameworks : [ 'jasmine' ],
    files : [
      'components/jquery/dist/jquery.js',
      'components/angular/angular.js',
      'components/angular-mocks/angular-mocks.js',

      // The phantomJs does not support bind. Hence we include a shim
      'components/es5-shim/es5-shim.js',

      // ES6 Promise
      'components/es6-promise/promise.js',

      // The library itself
      'src/*.js',

      'test/**.spec.js'
    ],

    colors    : true,
    singleRun : true,
    autoWatch : false,
    browsers  : ['PhantomJS'],
    reporters : ['progress', 'growl'],
  });
};
