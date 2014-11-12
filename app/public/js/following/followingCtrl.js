'use strict';

app.controller('FollowingCtrl', function ($scope, SCapiService, $rootScope) {
    var next_url = '';

    $scope.title = 'Following:';
    $scope.data = '';
    $scope.busy = false;

    SCapiService.getFollowing()
        .then(function(data) {
            $scope.data = data.collection.sort( predicatBy("username") );
            next_url = data.next_href;
            console.log($scope.data)
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

        SCapiService.getNextPage(next_url)
            .then(function(data) {
                for ( var i = 0; i < data.collection.length; i++ ) {
                    $scope.data.push( data.collection[i] )
                }
                next_url = data.next_href;
            }, function(error) {
                console.log('error', error);
            }).finally(function(){
                $scope.busy = false;
                $rootScope.isLoading = false;
            });
    };

    function predicatBy(prop){
        return function(a,b){
            if( a[prop] > b[prop]){
                return 1;
            }else if( a[prop] < b[prop] ){
                return -1;
            }
            return 0;
        }
    }


});