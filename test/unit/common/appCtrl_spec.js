'use strict';

describe('Unit test: AppCtrl', function(){
  var $rootScope, createController;
  beforeEach(module('App'));
  beforeEach(inject(function($injector){

    $rootScope = $injector.get('$rootScope');

    var $controller = $injector.get('$controller');

    createController = function() {
      return $controller('AppCtrl', {'$scope' : $rootScope});
    };
  }));
  //Dont know how to test this
  it("showBigArtwork", function(){
    var controller = createController();
    //expect($rootScope.showBigArtwork({}).toBe('public/img/logo-short.png'));
  });

  it("formatSongDuration method", function(){
    var controller = createController();
    expect($rootScope.formatSongDuration(60000)).toBe("1:00");
    expect($rootScope.formatSongDuration(61000)).toBe("1:01");
    expect($rootScope.formatSongDuration(619000)).toBe("10:19");
  });


});
