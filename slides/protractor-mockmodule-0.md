## Mock a module

```javascript
it('Test whenGET with string response', function() {
    browser.addMockModule('httpBackendMock',
    function() {
        angular.module('httpBackendMock',
       ['mainApp', 'ngMockE2E'])
        .run(function($httpBackend) {
            $httpBackend.whenGET('/results').respond('raoul');    
        });
    });

    browser.get('/');

    var result = element(by.binding('result'));
    expect(result.getText()).toEqual('raoul');
});
```
