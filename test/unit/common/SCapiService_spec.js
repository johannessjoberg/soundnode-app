describe('Services', function(){
  var scApi, scope, httpBackend;
  beforeEach(module('App'));
  beforeEach(inject(function($injector){
    scApi = $injector.get('SCapiService');
    scope = $injector.get('$rootScope');
    httpBackend = $injector.get('$httpBackend');

    //This get is made before every It so i must
    //expect it!
        httpBackend.expectGET('views/stream/stream.html')
        .respond({data: false});
       httpBackend.flush();
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('Test: SCapiService', function(){
    it('get',
     function(){
       httpBackend.expectGET('https://api.soundcloud.com/10.json?9&oauth_token=undefined')
       .respond({data:false});
           scApi.get(10,9);
       httpBackend.flush();
     });
    it('isLoading',
     function(){
           scope.isLoading = false;
           scApi.isLoading();
           expect(scope.isLoading).toBe(true);
     });
    it('getNextPage',
     function(){
       httpBackend.expectGET('&oauth_token=undefined&linked_partitioning=1')
       .respond({data:false});
       scApi.getNextPage();
       httpBackend.flush();
     });
    it('saveFavorite',
     function(){
       httpBackend.expectPUT('https://api.soundcloud.com/users/10/favorites/9.json?&oauth_token=undefined')
       .respond({data:false});
       scApi.saveFavorite(10,9);
       httpBackend.flush();
     });
    it('deleteFavorite',
     function(){
         httpBackend.expectDELETE('https://api.soundcloud.com/users/10/favorites/9.json?&oauth_token=undefined')
       .respond({data:false});
           scApi.deleteFavorite(10,9);
       httpBackend.flush();
     });
  });
});
