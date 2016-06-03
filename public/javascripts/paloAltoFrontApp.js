/**
 * Created by Lula on 6/1/2016.
 */
angular.module('paloAltoFrontApp', ['ngRoute', 'ngResource'])
    .config([
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
