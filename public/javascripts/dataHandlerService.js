/**
 * Created by Lula on 6/1/2016.
 */
angular.module('paloAltoFrontApp').factory('DataHandler', [
    "$http",
    "$q",
    "$resource",
    function($http, $q,$resource){
        var profilesRes =  $resource('/data/profiles');
        var messagesRes = $resource('/data/messages/:type',  {type:'@type'});
        var dataMethods = {
            getAllProfiles: function(){
                return profilesRes.query().$promise
            },
            saveProfile:function(newProfile){
                return profilesRes.save(newProfile).$promise;
            },
            getMessages: function(param){
                //work around the fact that res.json can return only object, 
                // not array of my mock up messages data
                return messagesRes.query({type:param}).$promise
            }
        };

        return dataMethods;
    }]);