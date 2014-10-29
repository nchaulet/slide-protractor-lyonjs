### Use page object pattern

```javascript
// page/homepage.js
var AngularHomepage = function() {
  this.nameInput = element(by.model('yourName'));
  this.greeting = element(by.binding('yourName'));

  this.setName = function(name) {
    this.nameInput.sendKeys(name);
  };

  browser.get('http://www.angularjs.org');
};
```