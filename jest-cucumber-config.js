const { setJestCucumberConfiguration } = require('jest-cucumber');

setJestCucumberConfiguration({
  tagFilter: 'not @skip',
  loadRelativePath: true
});
