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

        function toggle(messages, index) {
            for (var i = 0; i < messages.length; i++) {
                // Could be simplified, but left for readability
                // Readability is important
                if (index != i || messages[i].isOpen) {
                    messages[i].isOpen = false;
                }
                else {
                    messages[i].isOpen = true;
                }
            }
        }

        $scope.toggleStar = function($event, type, index) {
            $event.stopPropagation();


            if (type == "sent") {
                $scope.sentMessages[i].isStarred = !$scope.sentMessages[i].isStarred;
            }
            else if (type == "received") {
                $scope.receivedMessages[i].isStarred = !$scope.receivedMessages[i].isStarred
            }
            else {
                console.warn("Unknown type " + type);
            }
        };
        
        $scope.toggleMessage = function(type, index) {
            switch (type) {
                case "sent":
                    toggle($scope.sentMessages, index);
                    break;
                case "received":
                    toggle($scope.receivedMessages, index);
                    break;
                default:
                    console.warn("Unknown type " + type);
            }
        };
    }
]);