'use strict';

//Does scope inherit everything in root scope

describe('Unit test: AboutCtrl', function(){
  var $httpBackend, $rootScope, authRequestHandler, createController;
  beforeEach(module('App'));
  beforeEach(inject(function($injector){
      $httpBackend = $injector.get('$httpBackend');

        $rootScope = $injector.get('$rootScope');

    authRequestHandler = $httpBackend.when('GET', $rootScope.url)
    .respond({test: true});

      var $controller = $injector.get('$controller');

      createController = function() {
        return $controller('AboutCtrl', {'$scope' : $rootScope});
      };
    //$httpBackend = _$httpBackend_;
    //scope.$apply();
    //$httpBackend = $injector.get('$httpBackend');
    //$httpBackend.when('GET', scope.url).respond([
    //  { tom : "Empty" }
    //]);
  }));
     afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });
  //afterEach(function() {
  //  $httpBackend.verifyNoOutstandingExpectation();
  //  $httpBackend.verifyNoOutstandingRequest();
  //});

  it("should fetch about content", function(){
    var url = "https://api.github.com/repos/Soundnode/soundnode-about/contents/about.html";
      $httpBackend.expectGET(url);
      var controller = createController();
      expect($rootScope.content).not.toBeNull();
      $httpBackend.flush();
  });

  //describe('toggleAboutView method', function(){
    it("test toggleAboutView method", function(){
    //$httpBackend.expect('GET', function($rootScope.url){
    //.respond(200, {heja : 123});
    //$httpBackend.flush();
      var controller = createController();
      expect($rootScope.isAboutVisible).toBeFalsy();
      $rootScope.toggleAboutView();
      expect($rootScope.isAboutVisible).toBeTruthy();
      $rootScope.toggleAboutView();
      expect($rootScope.isAboutVisible).toBeFalsy();
      $httpBackend.flush();
      //expect(scope.isAboutVisible).toBeTruty();
      //scope.toggleAboutView();
      //expect(scope.isAboutVisible).toBeFalsy();
    });

    //Some specs
    //it('toggle from false - true - false', function(){
      //scope.isAboutVisible = false;
      //expect(scope.isAboutVisible).toBeFalsy();
      //scope.toggleAboutView();
      //expect(scope.isAboutVisible).toBeTruty();
      //scope.toggleAboutView();
      //expect(scope.isAboutVisible).toBeFalsy();
    //});
  });

  //TODO: Test the API call also
  //httpBackend is used to mock out http calls

  //Specify which module contains MainController
//  beforeEach(module('App'));

  //Get access to ctroller and scope of controller
//  var ctrl, scope;
//  beforeEach(inject(function($controller, $rootScope){
    //Create a new scope that is a child
//    scope = $rootScope.$new();
//    ctrl = $controller('AboutCtrl', {
//      $scope: scope
//    });
//  }));

  //This is where the actual tests go
//  it('',
//    function(){
//      expect(scope.greeting).toBeUndefined();
//      scope.shout();
//      expect(scope.greeting).toEqual("Hello scloud");
//    });

//});
