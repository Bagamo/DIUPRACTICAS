/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Ramon Jimenez",
				Photo: "deportista.png",
				Quote: "Las gallinas que entran por las que salen",
				Age: 39,
				Occupation: "Monitor de gimnasio",
				Family: "Soltero",
				Location: "Granada Capital",
				Character: "Le gusta comer después de un buen entrenamiento",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Comer sano sin pasar hambre", "Conocer gente nueva que aporte cosas positivas"],
				Frustrations: ["Peca de comer comida basura a veces", "Desde su última relacion no sale mucho de casa"],
				Bio: "El deporte siempre ha sido su pasión. Estuvo en varios equipos de fútbol pero lo acabó dejando. Se mudó a otras ciudades buscando ser entrenador profesional pero no pasó las pruebas de acceso al colegio de entrenadores. Actualmente trabajo en un gimnasio como monitor.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4}
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Rachel Brown",
				Photo: "womanE.png",
				Quote: "All you need is love. But a little chocolate now and then doesn't hurt.",
				Age: 59,
				Occupation: "Ama de casa",
				Family: "Casada con hijos y nietos",
				Location: "Plymouth, Inglaterra",
				Character: "Visitar nuevos lugares y cocinar",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Pasar tiempo con su familia.", "Vivir nuevas experiencias.", "Convertirse en la mejor cocinera de su barrio."],
				Frustrations: ["Que sus nietos no se coman su comida.", "Pasar demasiado tiempo sin hacer nada.", "Que no todos en la familia se lleven bien."],
				Bio: "Es una ama de casa que disfruta que todos los fines de semana vengan sus hijos a comer y aprovecha cualquier excusa para realizar un viaje y visitar nuevos lugares, aunque su verdadera pasión es la cocina haciendo que se interese por la gastronimia de aquellos lugares que visita.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "A pesar de que le gusta viajar no soporta estar mucho tiempo lejos de su familia." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
