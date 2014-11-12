'use strict'

app.controller('TracksCtrl', function ($scope, SCapiService, $rootScope) {
    var endpoint = 'me/tracks'
        , params = 'limit=33';
    var next_url = '';

    $scope.title = 'Tracks';
    $scope.data = '';
    $scope.busy = false;

    SCapiService.get(endpoint, params)
                .then(function(data) {
                    $scope.data = data.collection;
                    next_url = data.next_href;
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

        SCapiService.getNextPage(ext_url)
            .then(function(data) {
                for ( var i = 0; i < data.collection.length; i++ ) {
                    $scope.data.push( data.collection[i] )
                }
                next_url = data.next_href;
                console.log("steam busy = false")
            }, function(error) {
                console.log('error', error);
            }).finally(function(){
                $scope.busy = false;
                $rootScope.isLoading = false;
            });
    };

});