'use strict'

app.controller('StreamCtrl', function ($scope, SCapiService, $rootScope) {
    var endpoint = 'me/activities'
        , params = 'limit=33';

    $scope.title = 'Stream';
    $scope.data = '';
    $scope.busy = false;
    $scope.next_url = '';

    SCapiService.get(endpoint, params)
                .then(function(data) {
                    $scope.data = data.collection;
                    console.log("data stream:", data.collection);
                    $scope.next_url = data.next_href;
                    console.log("next_href stream:", data.next_href);
                }, function(error) {
                    console.log('error', error);
                }).finally(function() {
                    $rootScope.isLoading = false;
                });

    $scope.loadMore = function() {
        console.log("1, busy:", $scope.busy)
        if ( $scope.busy ) {
            return;
        }
        $scope.busy = true;

        SCapiService.getNextPage($scope.next_url)
                    .then(function(data) {
                console.log("2")
                        for ( var i = 0; i < data.collection.length; i++ ) {
                            $scope.data.push( data.collection[i] )
                            console.log("stream push collection")
                        }
                        console.log("$scope.next_url stream", $scope.next_url)
                        $scope.next_url = data.next_href;
                        console.log("steam busy = false")
                    }, function(error) {
                        console.log('error', error);
                    }).finally(function(){
                        $scope.busy = false;
                        $rootScope.isLoading = false;
                    });
    };

});