describe('Services', function(){
  var playerS, scope, httpBackend;
  beforeEach(module('App'));
  beforeEach(inject(function($injector){
    playerS = $injector.get('playerService');
    scope = $injector.get('$rootScope');
    httpBackend = $injector.get('$httpBackend');

    //This get is made before every It so i must
    //expect it!
        //httpBackend.expectGET('views/stream/stream.html')
        //.respond({data: false});
       //httpBackend.flush();
  }));

  //afterEach(function() {
  //  httpBackend.verifyNoOutstandingExpectation();
  //  httpBackend.verifyNoOutstandingRequest();
  //});

  describe('Test: playerService', function(){
    it('get',
     function(){
       //httpBackend.expectGET('https://api.soundcloud.com/10.json?9&oauth_token=undefined')
       //.respond({data:false});
       //playerS.songClicked();
       //httpBackend.flush();
     });
  });
});
