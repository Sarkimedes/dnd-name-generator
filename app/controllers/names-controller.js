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
    }]).
    factory('generateRace', function() {
        return (function () {
            var races = [
                'Dragonborn',
                'Drow',
                'Dwarf',
                'Elf',
                'Gnome',
                'Half-elf',
                'Half-orc',
                'Halfling',
                'Human',
                'Tiefling'
            ]
            return function() {
                return races[Math.floor(Math.random() * races.length)]
            }
        })();
    })
})();