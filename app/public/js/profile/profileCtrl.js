/**
 * Created by Johannes Sjöberg on 11/11/2014.
 */

'use strict'

app.controller('ProfileCtrl', function ($scope, SCapiService, $rootScope, $stateParams) {
    var userId = $stateParams.id;
    var endpoint = 'users/' + userId  + '/tracks'
        , params = 'limit=9';
    var next_url = '';

    $scope.profileData = '';
    $scope.followers_count = '';
    $scope.descLimit = '1800';
    $scope.expandleable = false;
    $scope.expanded = false;


    $scope.userData = '';
    $scope.title = 'Profile';
    $scope.data = '';
    $scope.busy = false;



    SCapiService.getProfile(userId)
        .then(function(data) {
            $scope.profileData = data;
            $scope.followers_count = numberWithCommas(data.followers_count);
            if(data.description.length > 1800) {
                $scope.expandable = true;
            }
        }, function(error) {
            console.log('error', error);
        }).finally(function() {
            $rootScope.isLoading = false;
        });

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

    $

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

});