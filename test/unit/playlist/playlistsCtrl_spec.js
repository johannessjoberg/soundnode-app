'use strict';

describe('Unit test: playlistCtrl', function(){
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
      return $controller('PlaylistsCtrl', {'$scope' : $rootScope});
    };
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  it("checkForPlaceholder", function(){
    $httpBackend.expectGET('https://api.soundcloud.com/me/playlists.json?&oauth_token=undefined')
    .respond({data:false});
    $httpBackend.expectGET('views/stream/stream.html')
    .respond({data:false});
    var controller = createController();
    expect($rootScope.title).toBe("Playlists");
    expect($rootScope.data).not.toBeUndefined();
    $httpBackend.flush();
  });
  it("test init of controller", function(){
    $httpBackend.expectGET('https://api.soundcloud.com/me/playlists.json?&oauth_token=undefined')
    .respond({data:false});
    $httpBackend.expectGET('views/stream/stream.html')
    .respond({data:false});
    //.respond({data:false});
    //$httpBackend.expectGET('views/stream/stream.html')
    //.respond({data:false});
    var controller = createController();
    $httpBackend.flush();

    //expect($rootScope.title).toBe("Favorites");
    //expect($rootScope.data).not.toBeUndefined();
    //expect($rootScope.busy).toBe(false);
  });
  it("checkForPlaceholder", function(){
    $httpBackend.expectGET('https://api.soundcloud.com/me/playlists.json?&oauth_token=undefined')
    .respond({data:false});
    $httpBackend.expectGET('views/stream/stream.html')
    .respond({data:false});
    var controller = createController();
    expect($rootScope.checkForPlaceholder(null)).toBe('public/img/temp-playing.png');
    $httpBackend.flush();
  });
});
