
var app = angular.module('bonusApp',[ ]);

var app = angular.module('bonusApp', ['jcs-autoValidate']);

angular.module('jcs-autoValidate').run([
	'defaultErrorMessageResolver',
	function (defaultErrorMessageResolver) {
		// To change the root resource file path
	        //para hacer referencia al archivo de cambio de lenguaje
	        defaultErrorMessageResolver.setI18nFileRootPath('js/lib');
	        //hacer referencia al lenguaje
	        defaultErrorMessageResolver.setCulture('es-CO');


		defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
			errorMessages['edadMinima'] = 'Debe de ser mayor a {0} años de edad.';
			errorMessages['edadMaxima'] = 'Debe de ser menor a {0} años de edad.';
		});
	}
]);

app.controller('mainCtrl', ['$scope', function($scope){

	$scope.formData = {};

	$scope.guardar_datos = function(){
		console.log("Posteando...");
	}
	
}]);



