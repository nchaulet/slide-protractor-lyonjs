describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');
    browser.debugger();
    element(by.model('yourName')).sendKeys('LyonJS');

    var greeting = element(by.binding('yourName'));
    browser.debugger();
    expect(greeting.getText()).toEqual('Hello LyonJS!');
  });
});