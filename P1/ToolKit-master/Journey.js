/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Ramón Jimenez",
                Photo: "deportista.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere comer sano y conocer gente nueva",
                touch1: "agenda",
                feel1: "4",
                con1: "ver que comida debe comer",
                ima1: "cartoon-speaking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "decide buscar paginas donde poder comer con gente desconocida",
                touch2: "ordenador",
                feel2: "1",
                con2: "cree que solo va a haber sitios de comida 'basura'",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "encuentra eatwith y decide crearse una cuenta",
                touch3: "ordenador",
                feel3: "5",
                con3: "ve que hay una comunidad grande con muchas personas",
                ima3: "cartoon-PChappy.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "observa varios anfitriones que se adecuen a sus gustos culinarios",
                touch4: "ordenador",
                feel4: "3",
                con4: "encuentra comida sana, pero no hay mucha gente que vaya a ir",
                ima4: "cartoon-thinking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "selecciona un anfitrion con muchas valoraciones positivas",
                touch5: "móvil (google maps)",
                feel5: "4",
                con5: "mira en google maps la calle en la que vive el anfitrión y comprueba que está cerca de su casa",
                ima5: "cartoon-phone.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar sitio para comer",
                touch6: "ordenador",
                feel6: "3",
                con6: "comerá sano pero no conocerá mucha gente nueva",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Rachel Brown",
                Photo: "womanE.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Tiene reservado un viaje a Valencia y quiere buscar actividades de ocio a relizar",
                touch1: "ordenador",
                feel1: "2",
                con1: "Hay demasiadas actividades pero no encuentra ninguna que le guste",
                ima1: "cartoon-writting.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide buscar por aquellas aficiones que le guste y encuentra Eatwith",
                touch2: "ordenador",
                feel2: "4",
                con2: "Empieza a buscar actividades en el lugar del viaje",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Reserva para dar una clase para aprender a hacer la famosa paella valenciana",
                touch3: "Móvil (llamada)",
                feel3: "5",
                con3: "Esta emocionada por ir a dar la clase y cocinarla luego en casa",
                ima3: "cartoon-PCSurprised.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Llega a su destino y se pone en contacto con la profesora de la clase",
                touch4: "Móvil (llamada)",
                feel4: "2",
                con4: "Solo le manda una ubicación al movil, esta en una calle bastante escondida y es dificil de encontrar",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Llega tarde a la clase y la profesora no da la clase en ingles",
                touch5: "Lugar de la clase",
                feel5: "2",
                con5: "Al llegar tarde a la clase y no estar familiarizada con el idioma no puede seguir la clase",
                ima5: "cartoon-talking.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Ha terminado la clase pero dada a sus dificultades no ha aprender la como hacer la paella ",
                touch6: "Movil (aplicación) ",
                feel6: "1",
                con6: "Tendrá que aprender como hacerla por ella misma y le pondrá una mala calificación a la actividad",
                ima6: "cartoon-PCangry.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



