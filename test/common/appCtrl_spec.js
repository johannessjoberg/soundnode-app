'use strict';

describe('Unit test: AppCtrl', function(){
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
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it("should fetch about content", function(){
    var url = "https://api.github.com/repos/Soundnode/soundnode-about/contents/about.html";
    $httpBackend.expectGET(url);
    var controller = createController();
    expect($rootScope.content).not.toBeNull();
    $httpBackend.flush();
  });

  it("test toggleAboutView method", function(){
    var controller = createController();
    expect($rootScope.isAboutVisible).toBeFalsy();
    $rootScope.toggleAboutView();
    expect($rootScope.isAboutVisible).toBeTruthy();
    $rootScope.toggleAboutView();
    expect($rootScope.isAboutVisible).toBeFalsy();
    $httpBackend.flush();
  });
});
