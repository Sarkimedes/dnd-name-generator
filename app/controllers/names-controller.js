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
            var unbiasedGenerateName = (function () {
                if (debug) { console.info('Called unbiasedGenerateName'); }
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
            var biasedGenerateName = (function () {
                // Flip a 'coin' to get Ched
                if (debug) {
                    console.info('Called biasedGenerateName');
                }
                var returnChed = Math.round(Math.random());
                if(returnChed) {
                    return 'Ched';
                }
                else {
                    return unbiasedGenerateName();
                }
            });
            var generateName = unbiasedGenerateName;
            return {
                generateName : generateName,
                updateChed : function (preferChed) {
                    this.generateName = preferChed ? biasedGenerateName : unbiasedGenerateName;
                }
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
        var genderList = [ 'Male', 'Female' ];
        var tumblrGenderList = ['Male', 'Female', 'Intersex', 'Transman', 'Transwoman',
        'Abimegender',
'Absorgender',
'Adeptogender',
'Aerogender',
'Aesthetgender',
'Aethergender',
'Affectugender',
'Agender',
'Agenderfluid',
'Agenderflux',
'Alexigender',
'Aliusgender',
'Ambigender',
'Ambonec',
'Amicagender',
'Amogender',
'Amorgender',
'Androgyne',
'Anesigender',
'Angeligender',
'Angenital',
'Anogender',
'Anongender',
'Antegender',
'Antigender',
'Anxiegender',
'Anvisgender',
'Apagender',
'Apconsugender',
'Apogender',
'Apollogender',
'Aporagender',
'Aptugender',
'Aquarigender',
'Archaigender',
'Arifluid',
'Arigender',
'Arithmagender',
'Argogender',
'Astergender',
'Astralgender',
'Atmosgender',
'Autogender',
'Axigender',
'Batgender',
'Bigender',
'Bigenderfluid',
'Biogender',
'Blizzgender',
'Boggender',
'Boyflux',
'Brevigender',
'Burstgender',
'Cadensgender',
'Cadogender',
'Caedogender',
'Caelgender',
'Cancegender',
'Canisgender',
'Caprigender',
'Carmigender',
'Cassflux',
'Cassgender',
'Caveagender',
'Cavusgender',
'Cendgender',
'Cennedgender',
'Ceterofluid',
'Ceterogender',
'Chaosgender',
'Cheiragender',
'Circgender',
'Cloudgender',
'Cocoongender',
'Cogitofluid',
'Cogitogender',
'Coigender',
'Collgender',
'Colorgender',
'Comgender',
'Contigender',
'Corugender',
'Cryptogender',
'Crystagender',
'Cyclogender',
'Daimogender',
'Deaboy',
'Delphigender',
'Demigender',
'Digigender',
'Diurnalgender',
'Drakefluid',
'Dryagender',
'Dulcigender',
'Duragender',
'Eafluid',
'Earthgender',
'Egender',
'Ectogender',
'Effreu',
'Egogender',
'Ekragender',
'Eldrigender',
'Elegender',
'Elementgender',
'Elissogender',
'Enbyfluid',
'Endogender',
'Energender',
'Entheogender',
'Entrogender',
'Equigender',
'Espigender',
'Evaisgender',
'Exgender',
'Exiccogender',
'Existigender',
'Explorogender',
'Faegender',
'Fascigender',
'Faunagender',
'Fawngender',
'Felisgender',
'Femfluid',
'Femgender',
'Firegender',
'Fissgender',
'Flirtgender',
'Flowergender',
'Fluidflux',
'Foggender',
'Frostgender',
'Fuzzgender',
'Gemelgender',
'Gemigender',
'Geminigender',
'Genderale',
'Genderamas',
'Genderblank',
'Genderblur',
'Gendercosm',
'Genderdormant',
'Gendereaux',
'Genderflora',
'Genderflight',
'Genderflow',
'Genderfluid',
'Genderflux',
'Genderfuzz',
'Gendermaverick',
'Gendernegative',
'Genderplasma',
'Genderpositive',
'Genderpunk',
'Genderqueer',
'Gendersea',
'Genderstrange',
'Gendervague',
'Gendervex',
'Gendervoid',
'Genderwitched',
'Gendfleur',
'Girlflux',
'Glassgender',
'Glimragender',
'Glitchgender',
'Gossagender',
'Greengender',
'Greygender',
'Gyraboy',
'Gyragender',
'Gyragirl',
'Healegender',
'Heliogender',
'Hemigender',
'Horogender',
'Hydrogender',
'Hypogender',
'Illusogender',
'Imperigender',
'Inersgender',
'Intergender',
'Invisigender',
'Iragender',
'Jupitergender',
'Juxera',
'Kingender',
'Kynigender',
'Lamingender',
'Leogender',
'Lethargender',
'Leukogender',
'Levigender',
'Liberique',
'Libragender',
'Librafluid',
'Lipsigender',
'Locugender',
'Lovegender',
'Ludogender',
'Lysigender',
'Magigender',
'Maringender',
'Marfluid',
'Mascfluid',
'Mascugender',
'Maverique',
'Medeigender',
'Melogender',
'Mirrorgender',
'Molligender',
'Moongender',
'Musicgender',
'Mutaregender',
'Mutogender',
'Mystigender',
'Nanogender',
'Narkissigender',
'Necrogender',
'Nesciogender',
'Neurogender',
'Neutrois',
'Nobifluid',
'Nocturnalgender',
'Novigender',
'Nubilagender',
'Nullgender',
'Nyctogender',
'Obruogender',
'Offgender',
'Omnigay',
'Orbgender',
'Owlgender',
'Paragender',
'Pendogender',
'Perigender',
'Perogender',
'Personagender',
'Perospike',
'Pixelgender',
'Polygender',
'Polygenderflux',
'Portiogender',
'Praegender',
'Preciogender',
'Preterbinary',
'Primusgender',
'Privagender',
'Proxvir',
'Quivergender',
'Quoigender',
'Salugender',
'Schrodigender',
'Scorigender',
'Scorpifluid',
'Scorpigender',
'Seagender',
'Selenogender',
'Sequigender',
'Shellgender',
'Skygender',
'Spesgender',
'Spikegender',
'Stargender',
'Staticgender',
'Stratogender',
'Subgender',
'Subfluid',
'Surgender',
'Swampgender',
'Sychnogender',
'Systemfluid',
'Systemgender',
'Tachigender',
'Tangender',
'Tauragender',
'Technogender',
'Telegender',
'Tempgender',
'Temporagender',
'Tenuigender',
'Tragender',
'Traumatgender',
'Trigender',
'Turbogender',
'Ungender',
'Vaguefluid',
'Vagueflux',
'Vaguegender',
'Vapogender',
'Vectorgender',
'Veloxigender',
'Venngender',
'Venufluid',
'Verangender',
'Vestigender',
'Vibragender',
'Videgender',
'Videogender',
'Virge',
'Vocigender',
'Voidfluid',
'Voidgender',
'Witchgender',
'Xenogender',
'Xirl',
'Xoy',
'Xumgender',
'Zodiacgender'
]
        var generateGender = function () {
            return genderList[Math.floor(Math.random() * genderList.length)];
        }
        var updateGender = function (genderOptionValue) {
            if (debug) console.info('Calling update gender with gender option ' + genderOptionValue)
            switch (genderOptionValue) {
                case 'standard':
                    genderList = ['male', 'female'];
                    break;
                case 'tumblr':
                    genderList = tumblrGenderList;
                    break;
                default:
                    if (debug) console.warn('Invalid genderOptionValue reached.');
                    break;
            }
        }
        return {
            generateGender,
            updateGender
        };
    });
})();