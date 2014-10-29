
```javascript
//angular-homepage.spec.js

var AngularHomepage = require('page/homepage.js'),
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var page = new AngularHomepage();

    page.setName('LyonJS');

    expect(page.greeting.getText()).toEqual('Hello LyonJS!');
  });
});
```