/**
 * Created by Lula on 6/1/2016.
 */
angular.module('paloAltoFrontApp').controller("inboxCtrl", [
    '$scope',
    'DataHandler',
    function($scope, DataHandler){
        $scope.sentMessages = [];
        $scope.receivedMessages = [];

        DataHandler.getMessages("sent").then(function(response) {
            $scope.sentMessages  = response;
            console.log($scope.sentMessages);
        });
        DataHandler.getMessages("received").then(function(response) {
            $scope.receivedMessages  = response;
        });
    }
]);