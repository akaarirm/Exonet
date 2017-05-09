(function(){
    var app = angular.module('quiz', []);
    
    app.controller('quizController', function($scope){
        $scope.qNum = 0;
        $scope.countQ= 0;
        $scope.CountR= 0;
        
        $scope.changeQ = function(){
            $scope.qNum++;
            $scope.countQ++;
        };
        $scope.corrigeR = function(){
        	$scope.countQ++;
        }
        
        $scope.reponse = [
        {	


        	Question: '1- Sachant qu’un euro vaut 6,50Fr, combien coûtent en euros 5 kg de carottes à 4,50Fr/kg ?',
			
			Reponse1: '1 : 3,46€',

			Reponse2: '2 : 3,42€',

			Reponse3: '3 : 3,35€',

			Reponse4: '4 : 3,55€',

			ReponseCor: "1- Reponse correcte est : 3,46€"
		},

        {
        	Question: "2- Deux trains partent en même temps de 2 villes distantes de 500km ; l’un roule à 100km/h et l’autre à 150km/h. L’heure de départ est 14h45, à quel heure les 2 trains vont-ils se croiser ?",

			Reponse1: '1 : 15h55',

			Reponse2: '2 : 16h15',

			Reponse3: "3 : 16h45",

			Reponse4: '4 : 16h55',

			ReponseCor: "2- Reponse correcte est : 16h45"
		},
        {
        	Question: '3- Le CDB et le mécanicien font la visite pré-vol en 20 min. Le mécanicien met à lui seul 30 min. Combien de temps mettra le CDB seul pour effectuer la pré-vol ?',

			Reponse1: '1 : 10min',

			Reponse2: '2 : 1h',

			Reponse3: '3 : 45min',

			Reponse4: '4 : 72min',

			ReponseCor: "3- Reponse correcte est : 1h"
		},
		{
        	Question: '4- Vous allez dans un bureau de change pour convertir 130 DM en FS. Sachant que 1 DM = 3,48 FS et que 1 FS = 4FF, quelle somme obtient-on ?',

			Reponse1: '1 : 112,96FS ',

			Reponse2: '2 : 113,10FS',

			Reponse3: '3 : 113,40FS',

			Reponse4: '4 : 114,55FS',

			ReponseCor: "4- Reponses correctes sont : 113,10FS"
		},
		{
        	Question: "5- La vitesse aéro indiquée doit être augmentée de 2% par 300m afin d’obtenir la vitesse aéro vraie. Si la vitesse aéro indiquée à 3000m est de 250km/h, quelle est la vitesse aéro vraie ?",

			Reponse1: '1 : 300km/h',

			Reponse2: '2 : 333km/h ',

			Reponse3: '3 : 500km/h',

			Reponse4: '4 : 260km/h',

			ReponseCor: "5- Reponse correcte est : 300km/h"
		},
		{
        	Question: "6- Deux carreleurs mettent 3 heures pour couvrir une surface de 24 m2. Quel est le temps mis par 3 carreleurs pour couvrir la moitié de cette surface ?",

			Reponse1: '1 : 90min',

			Reponse2: '2 : 72 min ',

			Reponse3: '3 : 1h20',

			Reponse4: '4 : 1h',

			ReponseCor: "6- Reponse correcte est : 1h"
		},
		{
        	Question: "7- Pour faire un ouvrage, 18 ouvriers ont mis 45 jours, combien aurait-il fallu de temps à 27 ouvriers ?",

			Reponse1: '1 : 30 j',

			Reponse2: '2 : 60 j',

			Reponse3: '3 : 35 j',

			Reponse4: '4 : 25 j',

			ReponseCor: "7- Reponse correcte est : 30 j"
		},
		{
        	Question: '8- Si je vis jusqu’à 96 ans, il me reste les 5/3 de l’age que j’ai. Quel est mon age ?',

			Reponse1: '1 : 34 ans',

			Reponse2: '2 : 36 ans',

			Reponse3: '3 : 40 ans',

			Reponse4: '4 : 38 ans',

			ReponseCor: "8- Reponse correcte est : 36 ans"
		},
		{
        	Question: "9- Une somme de 400F est constituée uniquement de pièces de 10F et de 20F. On compte 30 pièces. Combien y a-t-il de pièces de chaque sorte ?",

			Reponse1: '1 : 12(10F)-18(20F)',

			Reponse2: '2 : 18(10F)-12(20F)',

			Reponse3: '3 : 20(10F)-10(20F)',

			Reponse4: '4 : 10(10F)-20(20F)',

			ReponseCor: "9- Reponse correcte est : 20(10F)-10(20F)"
		},
		{
        	Question: '10- Un père a 24 ans de plus que son fils. Calculer l’age de chacun quand ils auront ensemble 100 ans.',

			Reponse1: '1 : P54-F30',

			Reponse2: '2 : P62-F38',

			Reponse3: '3 : P58-F42',

			Reponse4: '4 : P64-F40',

			ReponseCor: "10- Reponse correcte est :  P62-F38"
		}
	];


    });

    	
})();