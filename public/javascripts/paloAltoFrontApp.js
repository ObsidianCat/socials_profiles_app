/**
 * Created by Lula on 6/1/2016.
 */
angular.module('paloAltoFrontApp', ['ngRoute', 'ngResource'])
    .config([
    "$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when('/profiles', {
                templateUrl: '/templates/profiles.ejs',
                controller: 'profilesCtrl'
            })
            .when('/inbox', {
                templateUrl: '/templates/inbox.ejs',
                controller: 'inboxCtrl'
            })
            .otherwise({
                redirectTo: '/profiles'
            });
    }
]);
