var jasmineReporters = require('jasmine-reporters');
var jasmine = require('jasmine-reporters');
jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(
  new jasmineReporters.JUnitXmlReporter({
    consolidateAll: true,
    savePath: "output/",
    filePrefix: "test-results"
  })
);