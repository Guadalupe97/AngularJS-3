
var app = angular.module('bonusApp',['jcs-autoValidate']);


//errores personalizados
//codigo que resuelve los errores
angular.module('bonusApp')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
        // otherwise the current default culture is returned.
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          errorMessages['edadMinima'] = 'Edad mayor a {0}';
          errorMessages['edadMaxima'] = 'Edad menor a {0}';
        });
    }
]);
       

app.controller('mainCtrl', ['$scope', function($scope){

	$scope.formData = {};

	//el autovalidate no necesita de esta funcion solo postea la informacion si es jcs-autoValidate
	$scope.guardar_datos = function( /*valido*/ ){
		/*
		if( !valido ){
			return;
		}
		*/


		console.log("Posteando...");


	}


	
}]);
