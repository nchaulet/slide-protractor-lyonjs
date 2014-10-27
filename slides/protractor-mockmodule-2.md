[httpbackend](https://github.com/nchaulet/httpbackend)


```javascript
var backend = new require('httpbackend')(browser);

it('Test whenGET with string response', function() {
    backend.whenGET(/result/).respond('raoul');

    browser.get('/');

    var result = element(by.binding('result'));
    expect(result.getText()).toEqual('raoul');
});
```
