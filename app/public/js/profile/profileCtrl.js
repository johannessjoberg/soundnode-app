/**
 * Created by Johannes Sjöberg on 11/11/2014.
 */

'use strict'

app.controller('ProfileCtrl', function ($scope, SCapiService, $rootScope, $stateParams) {
    $scope.id = $stateParams.id;
    console.log("id: " + $scope.id)

    var endpoint = 'users/' + $scope.id  + '/tracks'
        , params = 'limit=9';


    $scope.userData = '';
    $scope.title = 'Profile';
    $scope.data = '';
    $scope.busy = false;
    $scope.next_url = '';

    SCapiService.getProfile($scope.id)
        .then(function(data) {
            console.log("get data:" + data)
            $scope.data = data;
            console.log("scope data:" + $scope.data)
        }, function(error) {
            console.log('error', error);
        }).finally(function() {
            $rootScope.isLoading = false;
        });

    SCapiService.get(endpoint, params)
        .then(function(data) {
            console.log("get data:" + data)
            $scope.data = data.collection;
            $scope.next_url = data.next_href;
            console.log("scope data:" + $scope.data)
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