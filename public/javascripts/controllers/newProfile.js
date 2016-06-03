var newProfileCtrl = function($scope, DataHandler, $window, $location){
    $scope.newProfile = {};
    $scope.addNewProfile = function(){
        if($scope.newProfile.fullName &&
            $scope.newProfile.fullName.trim() !="" &&
            $scope.newProfile.shortTitle &&
            $scope.newProfile.shortTitle.trim() !=""){
            DataHandler.saveProfile($scope.newProfile).then(function(result){
                if(result.status=="success"){
                    $location.path('/profiles');

                }
                else {
                    $window.alert("some errors occurred");
                }
            });

        }
        else{
            $window.alert("Please fill title and text fields!");
        }
    };

};

module.exports = newProfileCtrl;
