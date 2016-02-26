(function () {
    var app = angular.module('ChedMakerApp');
    if (debug && app == 'undefined') {
        alert('App not found');
    }
    app.controller('SettingsController', ['$scope', 'names', 'generateGender', function ($scope, names, generateGender) {
        if(debug) {
            console.info('Controller created.');
        }
        
        // Marks if the app should prefer to generate the name 'Ched'
        $scope.preferChed = false;
        $scope.updateChed = function () {
            if (debug) {
                console.info('Updated Ched preference');
            }
            if (debug && !names) throw 'Names service not found';
            names.updateChed($scope.preferChed);
        }
        $scope.genderOption = 'standard';
        $scope.updateGender = function () {
            generateGender.updateGender($scope.genderOption);
        }
    }])
})();