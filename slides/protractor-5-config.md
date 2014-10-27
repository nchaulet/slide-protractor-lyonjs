## Protractor config file

```javascript
exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['angular-homepage.spec.js', 'tests/*.spec.js'],
  jasmineNodeOpts: {
    showColors: true
  }
};
```
