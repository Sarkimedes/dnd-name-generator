(function()  {
    var app = angular.module('chedMakerApp', [])
    app.controller('NamesController', ['$scope', function ($scope) {
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
        $scope.name = generateName();
        
        $scope.generate = function () {
            $scope.name = generateName();
        }
    }]);
})();