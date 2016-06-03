
var angular = require('angular');
require('angular-route');
require('angular-resource');


angular.module('paloAltoFrontApp', ['ngRoute', 'ngResource']);

var types = require("./constants/types");
var DataHandler = require("./dataHandlerService");
var profilesCtrl = require("./controllers/profiles");
var inboxCtrl = require("./controllers/inbox");
var newProfileCtrl = require("./controllers/newProfile");
var menuItem = require("./directives/menuItem");
var errSrc = require("./directives/errSrc");

angular.module('paloAltoFrontApp').directive('menuItem', ['$location',
    menuItem
]);

angular.module('paloAltoFrontApp').directive('errSrc', errSrc);

angular.module('paloAltoFrontApp').constant("MessageType",
    types
);

angular.module('paloAltoFrontApp').factory('DataHandler', [
    "$http",
    "$q",
    "$resource",
    DataHandler
]);

angular.module('paloAltoFrontApp').controller("profilesCtrl", [
    '$scope',
    'DataHandler',
    profilesCtrl
]);

angular.module('paloAltoFrontApp').controller("inboxCtrl", [
    '$scope', '$sce',
    'DataHandler', 'MessageType',
    inboxCtrl
]);


angular.module('paloAltoFrontApp').controller("newProfileCtrl", [
    '$scope',
    'DataHandler',
    '$window',
    '$location',
    newProfileCtrl
]);

angular.module('paloAltoFrontApp').config([
    "$routeProvider",
    function ($routeProvider) {
        //set up all routes of the front end app. 
        $routeProvider
            .when('/profiles', {
                templateUrl: '/templates/profiles.ejs',
                controller: 'profilesCtrl'
            })
            .when('/inbox', {
                templateUrl: '/templates/inbox.ejs',
                controller: 'inboxCtrl'
            })
            .when('/new-profile', {
                templateUrl: '/templates/newProfile.ejs',
                controller: 'newProfileCtrl'
            })
            .otherwise({
                redirectTo: '/profiles'
            });
    }
]);
