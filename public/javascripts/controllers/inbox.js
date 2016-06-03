/**
 * Created by Lula on 6/1/2016.
 */
angular.module('paloAltoFrontApp').controller("inboxCtrl", [
    '$scope',
    'DataHandler', 'MessageType',
    function($scope, DataHandler, MessageType){
        $scope.sentMessages = [];
        $scope.receivedMessages = [];

        DataHandler.getMessages(MessageType.SENT).then(function(response) {
            $scope.sentMessages  = response;
            console.log($scope.sentMessages);
        });
        DataHandler.getMessages(MessageType.RECEIVED).then(function(response) {
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

        $scope.displayedMessageType = MessageType.RECEIVED;

        $scope.displayMessages = function(type) {
            $scope.displayedMessageType = type;
            if (type == MessageType.SENT) {

            }
            else if (type == MessageType.RECEIVED) {

            }
        };

        $scope.toggleStar = function($event, type, index) {
            $event.stopPropagation();

            if (type == MessageType.SENT) {
                $scope.sentMessages[index].isStarred = !$scope.sentMessages[index].isStarred;
            }
            else if (type == MessageType.RECEIVED) {
                $scope.receivedMessages[index].isStarred = !$scope.receivedMessages[index].isStarred
            }
            else {
                console.warn("Unknown type " + type);
            }
        };
        
        $scope.toggleMessage = function(type, index) {
            switch (type) {
                case MessageType.SENT:
                    toggle($scope.sentMessages, index);
                    break;
                case MessageType.RECEIVED:
                    toggle($scope.receivedMessages, index);
                    break;
                default:
                    console.warn("Unknown type " + type);
            }
        };
    }
]);