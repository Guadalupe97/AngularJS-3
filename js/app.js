//Directivas o modulo general 
//[] librerias o dependencias
var app = angular.module('universidadApp', []);

//controladores, se recomienda encapsular perfectamente las funciones de cada controlador.
//scope es una variable global fuera del controlador propia de angular
app.controller('profesorCtrl', function ($scope) {

	//Propiedad que tendra los valores del objeto
	$scope.profesor = profesorData;
	$scope.editando = {};

	//definir función

	$scope.editarprofesor = function(){
		//hacer copia de alguna información y almacenarla en otro lugar 
		// de donde lo va a copiar, donde lo va a guardar
		angular.copy($scope.profesor, $scope.editando);
	}

	$scope.guardarcambios = function(){
		// Se invierten los lugares
		angular.copy($scope.editando, $scope.profesor);
	}

	$scope.cancelar = function(){

		//arreglo vacío

		$scope.editando = {};
	}

});

		

//Objetos

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}