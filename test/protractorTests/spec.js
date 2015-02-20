// spec.js
//  describe('competency-browser index', function() {
//    it('should have a title', function() {
//      browser.get('http://localhost:8080/#');
//
//      expect(browser.getTitle()).toEqual('Competency-Browser');
//    });
// });

//sample test to make sure protractor is functioning correctly
describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});
