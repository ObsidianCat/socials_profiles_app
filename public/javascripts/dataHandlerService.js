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
            /**
             * fetch all existing profiles from the server
             * @returns {*}
             */
            getAllProfiles: function(){
                return profilesRes.query().$promise
            },
            /**
             * Send object with data for new profiles
             * to server for saving
             * @param Object newProfile
             * @returns {*}
             */
            saveProfile:function(newProfile){
                return profilesRes.save(newProfile).$promise;
            },
            /**
             * fetch array of messages for inbox 
             * @param String messagesType
             * @returns {Promise}
             */
            getMessages: function(messagesType){
                return messagesRes.query({type:messagesType}).$promise
            }
        };

        return dataMethods;
    }]);