/**
 * Created by Lula on 6/1/2016.
 */


module.exports = function($scope, DataHandler){
    $scope.profilesList = [];
    $scope.profileRows = [];

    const profileRows = 3;
    DataHandler.getAllProfiles().then(function(response) {
        $scope.profilesList = response;
        //divide data in chunks for better dealing with responsive layout
        for (var i = 0; i < $scope.profilesList.length; i++) {
            if (i % profileRows == 0) {
                $scope.profileRows.push([]);
            }
            $scope.profileRows[$scope.profileRows.length - 1].push($scope.profilesList[i]);
        }
    });

};
