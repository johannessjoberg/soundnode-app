'use strict'

app.controller('FavoritesCtrl', function ($scope, SCapiService, $rootScope) {
    var endpoint = 'me/favorites'
        , params = 'limit=9';

    $scope.title = 'Favorites';
    $scope.data = '';
    $scope.busy = false;
    $scope.next_url = '';

    SCapiService.get(endpoint, params)
                .then(function(data) {
                    $scope.data = data.collection;
                    $scope.next_url = data.next_href;
                }, function(error) {
                    console.log('error', error);
                }).finally(function() {
                    $rootScope.isLoading = false;
                });

    $scope.loadMore = function() {
        if ( $scope.busy ) {
            return;
        }
        $scope.busy = true;

        SCapiService.getNextPage($scope.next_url)
            .then(function(data) {
                for ( var i = 0; i < data.collection.length; i++ ) {
                    $scope.data.push( data.collection[i] )
                }
                $scope.next_url = data.next_href;
            }, function(error) {
                console.log('error', error);
            }).finally(function(){
                $scope.busy = false;
                $rootScope.isLoading = false;
            });
    };

});