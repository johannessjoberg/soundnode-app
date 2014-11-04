'use strict';

app.controller('FollowingCtrl', function ($scope, SCapiService, $rootScope) {
    $scope.title = 'Following view:';
    $scope.data = '';
    $scope.busy = false;

    var endpoint = 'me/followings'
        , params = '';

    SCapiService.get(endpoint, params)
        .then(function(data) {
            $scope.data = data;
            console.log("data:", data);
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

        SCapiService.getNextPage()
            .then(function(data) {
                for ( var i = 0; i < data.collection.length; i++ ) {
                    $scope.data.push( data.collection[i] )
                }
                $scope.busy = false;
            }, function(error) {
                console.log('error', error);
            }).finally(function(){
                $rootScope.isLoading = false;
            });
    };

});