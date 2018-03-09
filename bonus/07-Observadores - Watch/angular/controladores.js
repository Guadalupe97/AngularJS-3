var app = angular.module('paginacionApp.controladores',[]);

app.controller('observadorCtrl', ['$scope', function ($scope) {
	
	
	$scope.nombre = "David";

	//observador que este pendiente de una variable, util cuando se requiere hacer una busqueda basada en lo que se esta escribiendo o una llenada dinamica al escribir

	$scope.$watch('nombre', function(valorNuevo, valorViejo){
		console.log(valorViejo, valorNuevo);
	});

	

}]);