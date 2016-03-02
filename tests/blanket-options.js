/* globals blanket, module */

var options = {
  modulePrefix: 'mad-bricks',
  filter: '//.*mad-bricks/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [
    'mad-bricks/initializers/export-application-global',
    'mad-bricks/config'
  ],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true
  },
  lcovOptions: {
    outputFile: 'lcov.dat',

    // automatically skip missing files, relative to project's root dir
    excludeMissingFiles: true, // default false

    // provide a function to rename es6 modules to a file path
    renamer: function(moduleName){
      // return a falsy value to skip given module
      if (moduleName === 'unwanted') { return; }

      var expression = /^APP_NAME/;
      return moduleName.replace(expression, 'app') + '.js';
    }
  },
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
