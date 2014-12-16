describe('Services', function(){
  var playerS, scope, httpBackend;
  beforeEach(module('App'));
  beforeEach(inject(function($injector){
    playerS = $injector.get('playerService');
    scope = $injector.get('$rootScope');
    httpBackend = $injector.get('$httpBackend');
  }));

  describe('Test: playerService', function(){
    it('get',
     function(){
     });
  });
});
