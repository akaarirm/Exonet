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


        	Question: '1- Barack OBAMA est le :',
			
			Reponse1: '1 : 34 ème président des Etats-Unis',

			Reponse2: '2 : 38ème président des Etats-Unis',

			Reponse3: '3 : 44 ème président des Etats-Unis',

			Reponse4: '4 : 48 ème président des Etats-Unis',

			ReponseCor: "1- Reponse correcte est : 44 ème président des Etats-Unis"
		},

        {
        	Question: "2- A l’occasion des élection européennes de juin 2009, combien de parlementaires seront élus ?",

			Reponse1: '1 : 532',

			Reponse2: '2 : 632',

			Reponse3: "3 : 732",

			Reponse4: '4 : 832',

			ReponseCor: "2- Reponse correcte est : 732"
		},
        {
        	Question: '3- QEn quelle année la région est-elle devenue une collectivité territoriale ?',

			Reponse1: '1 : 1948',

			Reponse2: '2 : 1954',

			Reponse3: '3 : 1972',

			Reponse4: '4 : 1982',

			ReponseCor: "3- Reponse correcte est : 1982"
		},
		{
        	Question: '4- Quel écrivain français a obtenu en 2008 le prix Nobel de littérature ?',

			Reponse1: '1 : Daniel PENNAC',

			Reponse2: '2 : Frédéric BEGBEDER',

			Reponse3: '3 : Jean-Marie LE CLEZIO',

			Reponse4: '4 : Patrick GRAINVILLE',

			ReponseCor: "4- Reponse correcte est : Jean-Marie LE CLEZIO"
		},
		{
        	Question: "5- Qui est le rédacteur de la Constitution de la 5ème République ?",

			Reponse1: '1 : Jacques DELORS',

			Reponse2: '2 : Charles de GAULLE',

			Reponse3: '3 : Robert SCHUMAN',

			Reponse4: '4 : Michel DEBRE',

			ReponseCor: "5- Reponse correcte est : Michel DEBRE"
		},
		{
        	Question: "6- Quel événement a-t-on appelé « le jeudi noir » ?",

			Reponse1: '1 : le premier jour de la crise boursière de 1929',

			Reponse2: '2 : la révolte des esclaves à Saint Domingue le 22 août 1791',

			Reponse3: '3 : le massacre de Sétif en Algérie en 1945',

			Reponse4: '4 : Dla bataille de Gettysburg durant la guerre de Sécession en juillet 1863',

			ReponseCor: "6- Reponse correcte est : le premier jour de la crise boursière de 1929"


		},
		{
        	Question: "7- Quelle actrice française a reçu un oscar en 2008 ?",

			Reponse1: '1 : Sophie Marceau',

			Reponse2: '2 : Marion Cotillard',

			Reponse3: '3 : Cécile de France',

			Reponse4: '4 : Isabelle Adjani',

			ReponseCor: "7- Reponse correcte est : Marion Cotillard"
		},
		{
        	Question: '8- Quels pays font partie de l’Union pour la Méditerranée ?',

			Reponse1: '1 : Allemagne',

			Reponse2: '2 : Tunisie',

			Reponse3: '3 : Mali',

			Reponse4: '4 : Aucune réponse ne convient',

			ReponseCor: "8- Reponse correcte est : Allemagne, Tunisie"
		},
		{
        	Question: "9- Madame Simone Veil a été :",

			Reponse1: '1 : la première femme ministre d’Etat',

			Reponse2: '2 : la première académicienne',

			Reponse3: '3 : la première femme présidente du parlement européen',

			Reponse4: '4 : la première femme Premier ministre en France',

			ReponseCor: "9- Reponses correctes sont : la première femme ministre d’Etat, la première femme présidente du parlement européen"
		},
		{
        	Question: '10- Les Açores sont un archipel qui fait partie du territoire :',

			Reponse1: '1 : portugais',

			Reponse2: '2 : espagnol',

			Reponse3: '3 : sénégalais',

			Reponse4: '4 : pmalien',

			ReponseCor: "10- Reponse correcte est : portuguais"
		}
	];


    });

    	
})();