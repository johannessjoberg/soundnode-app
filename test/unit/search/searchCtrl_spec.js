'use strict';

describe('Unit test: searchCtrl', function(){
  var $httpBackend, $rootScope, authRequestHandler, createController;
  beforeEach(module('App'));
  beforeEach(inject(function($injector){
    $httpBackend = $injector.get('$httpBackend');

    $rootScope = $injector.get('$rootScope');

    var $controller = $injector.get('$controller');

    createController = function() {
      return $controller('searchCtrl', {'$scope' : $rootScope});
    };
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  it("test init of controller", function(){
    $httpBackend.expectGET('https://api.soundcloud.com/tracks.json?linked_partitioning=1&limit=20&q=undefined&oauth_token=undefined')
    .respond({data:false});
    $httpBackend.expectGET('views/stream/stream.html')
    .respond({data:false});
    var controller = createController();
    $httpBackend.flush();

  });
});
