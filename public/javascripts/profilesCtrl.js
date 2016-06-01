/**
 * Created by Lula on 6/1/2016.
 */
angular.module('paloAltoFrontApp').controller("profilesCtrl", [
    '$scope',
    'DataHandler',
    function($scope, DataHandler){
        $scope.hello = "Hello from profile controller";
        $scope.profiles = [];
        console.log("hello from profiles controller");

        DataHandler.getAllProfiles().then(function(response) {
            $scope.profiles = response;
            console.log($scope.profiles);
        });
        
    }
]);