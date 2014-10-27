exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['angular-homepage.spec.js'],
  jasmineNodeOpts: {
    showColors: true
  },
  debug: true
};