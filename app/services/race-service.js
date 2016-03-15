(function () {
    angular.module('ChedMakerApp').factory('generateRace', function() {
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