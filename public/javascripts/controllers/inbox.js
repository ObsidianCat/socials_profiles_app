/**
 * Created by Lula on 6/1/2016.
 */
angular.module('paloAltoFrontApp').controller("inboxCtrl", [
    '$scope', '$sce',
    'DataHandler', 'MessageType',
    function($scope, $sce, DataHandler, MessageType){
        $scope.sentMessages = [];
        $scope.receivedMessages = [];
        $scope.displayedMessageType = MessageType.RECEIVED;

        function trustHtmlBody(message) {
            message.body = $sce.trustAsHtml(message.body);
        }

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

        loadMessages($scope.displayedMessageType, getMessagesForType($scope.displayedMessageType));

        /**
         * Loads messages for type from the server
         * @param type
         */
        function loadMessages(type) {
            DataHandler.getMessages(type).then(function(response) {
                var messages = getMessagesForType(type);
                $scope[messages]  = response;
                for (var i = 0; i < $scope[messages].length; i++) {
                    trustHtmlBody($scope[messages][i]);
                }
            });
        }

        /**
         * Returns the name of the member on scope
         * for that message type
         * @param type - defaults to received messages
         * @returns {string}
         */
        function getMessagesForType(type) {
            var messages = "receivedMessages";
            if (type == MessageType.SENT) {
                messages = "sentMessages";
            }
            else if (type == MessageType.RECEIVED) {
                messages = "receivedMessages";
            }
            else {
                console.warn("Unknown type " + type);
            }
            return messages;
        }

        /**
         * Triggers on tab switch
         * @param type
         */
        $scope.displayMessages = function(type) {
            $scope.displayedMessageType = type;
            var messages = getMessagesForType(type);

            loadMessages(type, $scope[messages]);
        };

        $scope.toggleStar = function($event, type, index) {
            $event.stopPropagation();
            var messages = getMessagesForType[type];
            $scope[messages][index].isStarred = !$scope[messages][index].isStarred;
        };

        /**
         * Triggers on message header
         * @param type
         * @param index
         */
        $scope.toggleMessage = function(type, index) {
            var messages = getMessagesForType(type);
            toggle($scope[messages], index);
        };
    }
]);