/**
 * Created by Lula on 6/1/2016.
 */
angular.module('paloAltoFrontApp').controller("profilesCtrl", [
    '$scope',
    'DataHandler',
    function($scope, DataHandler){
        $scope.profilesList = [];
        console.log("hello from profiles controller");

        DataHandler.getAllProfiles().then(function(response) {
            $scope.profilesList = response;
            console.log($scope.profilesLis);
        });
        
    }
]);