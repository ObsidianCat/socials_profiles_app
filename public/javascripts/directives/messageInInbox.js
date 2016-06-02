/**
 * Created by Lula on 6/2/2016.
 */
angular.module('paloAltoFrontApp').directive('messageInInbox', function() {
    return {
        replace:true,
        templateUrl: "./templates/add-comment.html"
    };
});