## Use `multiCapabilities`

```javascript
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [
	{
	  'browserName' : 'chrome'
	}, 
	{
	  'browserName' : 'firefox'
	}
  ],

  specs: ['homage-spec.js'],

  jasmineNodeOpts: {
    showColors: true
  }
};
```
