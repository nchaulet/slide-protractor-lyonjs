## Protractor config file

```javascript
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['angular-homepage.spec.js'],

  jasmineNodeOpts: {
    showColors: true
  }
};
```
