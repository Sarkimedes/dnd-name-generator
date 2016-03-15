(function()  {
    angular.
    module('ChedMakerApp', []).
    controller('NamesController', [
        '$scope', 
        'names', 
        'generateRace', 
        'generateGender',
        function ($scope, names, generateRace, generateGender) {
        $scope.generate = function () {
            $scope.name = names.generateName();
            $scope.race = generateRace();
            $scope.gender = generateGender.generateGender();
        }
    }])
})();