describe('PasswordController', function() {
  beforeEach(module('CompBrowserControllers'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('PasswordController', { $scope: $scope });
    });

    it('sets the strength to "strong" if the password length is >8 chars', function() {
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });

    it('sets the strength to "weak" if the password length <3 chars', function() {
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });

    it('sets the strength to "medium" if the password length >3 chars, <8 chars', function() {
      $scope.password = 'abcd';
      $scope.grade();
      expect($scope.strength).toEqual('medium');
    });

    it('returns "I am awesome"', function(){
      expect($scope.message()).toEqual('I am awesome')
    })

  });
});
