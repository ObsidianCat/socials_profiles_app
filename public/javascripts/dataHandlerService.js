/**
 * Created by Lula on 6/1/2016.
 */
angular.module('paloAltoFrontApp').factory('DataHandler', [
    "$http",
    "$q",
    "$resource",
    function($http, $q,$resource){
        var profilesRes =  $resource('/data/profiles');
        var inboxRes = $resource('/data/inbox');
        var dataMethods = {
            getAllProfiles: function(){
                return profilesRes.query().$promise
            },
            getAllMessages: function(){
                //work around the fact that res.json can return only object, 
                // not array of my mock up messages data
                return inboxRes.get().$promise
            }
        };

        return dataMethods;
    }]);