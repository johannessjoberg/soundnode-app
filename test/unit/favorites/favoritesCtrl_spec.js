'use strict';

describe('Unit test: favoritesCtrl', function(){
  var $httpBackend, $rootScope, authRequestHandler, createController;
  beforeEach(module('App'));
  beforeEach(inject(function($injector){
    $httpBackend = $injector.get('$httpBackend');

    $rootScope = $injector.get('$rootScope');

    //authRequestHandler = $httpBackend.when('GET', $rootScope.url)
    //.respond({test: true});
//fa
    var $controller = $injector.get('$controller');

    createController = function() {
      return $controller('FavoritesCtrl', {'$scope' : $rootScope});
    };
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  it("test init values", function(){
    $httpBackend.expectGET('https://api.soundcloud.com/me/favorites.json?&oauth_token=undefined')
    .respond({data:false});
    $httpBackend.expectGET('views/stream/stream.html')
    .respond({data:false});
    var controller = createController();
    $httpBackend.flush();

    expect($rootScope.title).toBe("Favorites");
    expect($rootScope.data).not.toBeUndefined();
    expect($rootScope.busy).toBe(false);
  });

  it("should make a get request on start", function(){
    $httpBackend.expectGET('https://api.soundcloud.com/me/favorites.json?&oauth_token=undefined')
    .respond({data:false});
    $httpBackend.expectGET('views/stream/stream.html')
    .respond({data:false});
    var controller = createController();
    $httpBackend.flush();
  });

  it("test loadMore function", function(){
    $httpBackend.expectGET('https://api.soundcloud.com/me/favorites.json?&oauth_token=undefined')
    .respond({data:false});
    // Expected when i call loadMore
    $httpBackend.expectGET('&oauth_token=undefined')
    .respond({data:false});
    $httpBackend.expectGET('views/stream/stream.html')
    .respond({data:false});
    var controller = createController();
    $rootScope.loadMore();
    $httpBackend.flush();
  });
});
