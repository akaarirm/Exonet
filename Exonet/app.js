(function(){
    var app = angular.module('quiz', []);
    
    app.controller('quizController', function($scope){
        $scope.qNum = 0;
        $scope.countQ= 0;
        $scope.CountR= 10;

        $scope.decompte = function(){
        	if($scope.CountR == 0 || $scope.CountR <0){
        		$scope.CountR = 10;
        		clearInterval(timer);
        	}
        	$scope.CountR--;
        	if($scope.CountR == 0){
        		$scope.CountR = 10;
        	}
        }
        
        $scope.changeQ = function(){
            $scope.qNum++;
            $scope.countQ++;
        };
        $scope.corrigeR = function(){
        	$scope.countQ++;
        }
        
        $scope.reponse = [
        {	


        	Question: '1- Une directive du préprocesseur est une ligne qui commence par :',
			
			Reponse1: '1 : {',

			Reponse2: '2 : #',

			Reponse3: '3 : //',

			Reponse4: '4 : /*',

			ReponseCor: "1- Reponse correcte est : #"
		},

        {
        	Question: "2- Quel est le nom de la fonction principale d'un programme ?",

			Reponse1: '1 : Principal',

			Reponse2: '2 : Main',

			Reponse3: "3 : N'importe quel nom",

			Reponse4: '4 : Start',

			ReponseCor: "2- Reponse correcte est : Main"
		},
        {
        	Question: '3- Quel symbole termine toujours une instruction ?',

			Reponse1: '1 : .',

			Reponse2: '2 : ,',

			Reponse3: '3 : ;',

			Reponse4: '4 : }',

			ReponseCor: "3- Reponse correcte est : ;"
		},
		{
        	Question: '4- Comment ecrire un commentaire sur une seule ligne ?',

			Reponse1: '1 : //mon commenatire//',

			Reponse2: '2 : //mon commentaire',

			Reponse3: '3 : /*mon commentaire*/',

			Reponse4: '4 : /*mon commentaire',

			ReponseCor: "4- Reponses correctes sont : //mon commenatire// , //mon commentaire , /*mon commentaire*/"
		},
		{
        	Question: "5- Quelle est la fonction qui permet d'afficher du texte l'ecran en mode console ?",

			Reponse1: '1 : Aff(" un message ");',

			Reponse2: '2 : print(" un message ");',

			Reponse3: '3 : printf(" un message ");',

			Reponse4: '4 : fprintf(" un message ");',

			ReponseCor: "5- Reponse correcte est : fprintf('' un message '');"
		},
		{
        	Question: "6- La programmation en C permet la création de quel type de fichier ?",

			Reponse1: '1 : Des images (*.jpg, *.png, *.bmp ..',

			Reponse2: '2 : Des images (*.jpg, *.png, *.bmp ...',

			Reponse3: '3 : Des sources (*.c)',

			Reponse4: '4 : Des fichiers texte (*.txt)',

			ReponseCor: "6- Reponse correcte est : Des exécutables (*.exe sous Windows)"


		},
		{
        	Question: "7- Le programme charge de traduire votre code d'un langage de haut niveau vers le langage binaire est appele :",

			Reponse1: '1 : Le programmeur',

			Reponse2: '2 : Le compilateur',

			Reponse3: '3 : Le traducteur',

			Reponse4: '4 : Le linkeur',

			ReponseCor: "7- Reponse correcte est : Le compilateur"
		},
		{
        	Question: '8- Que se passe-t-il en mémoire avec le code suivant : malloc(sizeof(int) * 25); ?',

			Reponse1: '1 : Cela réserve de la mémoire pour un entier de 25 octets',

			Reponse2: '2 : Cela réserve de la mémoire pour un tableau de 25 entiers',

			Reponse3: '3 : Cela réserve de la mémoire pour un tableau de 25 octets',

			Reponse4: '4 : Cela réserve de la mémoire pour un tableau de 25 cchar',

			ReponseCor: "8- Reponse correcte est : Cela réserve de la mémoire pour un tableau de 25 entiers"
		},
		{
        	Question: "9- L'allocation dynamique de mémoire suit des étapes dans un ordre particulier, lequel ?",

			Reponse1: '1 : malloc, utilisation de la mémoire, vérification allocation réussie, free',

			Reponse2: '2 : malloc, utilisation de la mémoire, free, vérification allocation réussie',

			Reponse3: '3 : free, vérification de l(allocation réussie, malloc, utilisation de la mémoire',

			Reponse4: '4 : malloc, vérification allocation réussie, utilisation de la mémoire , free',

			ReponseCor: "9- Reponse correcte est : malloc, vérification allocation réussie, utilisation de la mémoire , free"
		},
		{
        	Question: '10- Comment initialiser un pointeur sur un tableau de 10 char ?',

			Reponse1: '1 : p = malloc (10);',

			Reponse2: '2 : p = (char *) malloc(10,1);',

			Reponse3: '3 : p = (char *) malloc (sizeof(10*char));',

			Reponse4: '4 : p = (char *) malloc(10 * sizeof(char));',

			ReponseCor: "10- Reponse correcte est : p = (char *) malloc(10 * sizeof(char));"
		}
	];


    });

    	
})();