(function()  {
    angular.
    module('chedMakerApp', []).
    controller('NamesController', [
        '$scope', 
        'names', 
        'generateRace', 
        'generateGender',
        function ($scope, names, generateRace, generateGender) {
        $scope.generate = function () {
            $scope.name = names.generateName();
            $scope.race = generateRace();
            $scope.gender = generateGender();
        }
    }]).
    factory('names', function () {
        return (function () {
            var names = {
                beginnings: [
                    '', '', '', '', 'a', 'be', 'de', 'el', 'fa', 'jo',
                    'ki', 'la', 'ma', 'na', 'o', 'pa', 're', 'si', 'ta', 'va'
                ],
                middles: [
                    'bar', 'ched', 'dell', 'far', 'gran', 'hal', 'jen', 'kel',
                    'lim', 'mor', 'net', 'penn', 'quil', 'rond', 'sark', 'shen',
                    'tur', 'vash', 'yor', 'zen'
                ],
                ends: [ 
                    '', 'a', 'ac', 'ai', 'al', 'am', 'an', 'ar', 'ea', 'el', 
                    'er', 'ess', 'ett', 'ic', 'id', 'il', 'in', 'is', 'or', 'us' 
                ]
            }
            var generateName = (function() {
                var getRandomIndex = (function () {
                    return Math.floor(Math.random() * 20);
                });
                var beginningIndex = getRandomIndex();
                var middleIndex = getRandomIndex();
                var endIndex = getRandomIndex();
                var name = 
                    (names.beginnings[beginningIndex] + 
                    names.middles[middleIndex] +
                    names.ends[endIndex]);
                return name.charAt(0).toUpperCase() + name.slice(1);
            });
            return {
                generateName : generateName
            }
        })();
    }).
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
    }).
    factory('generateGender', function() {
        return function() {
            var gender = Math.random() + 0.5 >= 1 ? 'Male' : 'Female';
            return gender;
        } 
    });
})();