'use strict';

app.controller('searchCtrl', function ($scope, $http, $stateParams, SCapiService, $rootScope) {
    var endpoint = 'tracks'
        , params = 'limit=51&q=' + $stateParams.q;

    $scope.title = 'Results for: ' + $stateParams.q;
    $scope.data = '';
    var next_url = '';

    SCapiService.get(endpoint, params)
        .then(function(data) {
            $scope.data = data.collection;
            next_url = data.next_href;
        }, function(error) {
            console.log('error', error);
        }).finally(function(){
            $rootScope.isLoading = false;
        });

    $scope.loadMore = function() {
        if ($scope.busy) {
            return;
        }
        $scope.busy = true;
         SCapiService.getNextPage(next_url)
             .then(function(data) {
                 for ( var i = 0; i < data.collection.length; i++ ) {
                     $scope.data.push( data.collection[i] )
                 }
                 next_url = data.next_href;
             }, function(error) {
                 console.log('error', error);
             }).finally(function() {
                 $scope.busy = false;
                 $rootScope.isLoading = false;
             });
    };

});