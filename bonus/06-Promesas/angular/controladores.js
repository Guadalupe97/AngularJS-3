var app = angular.module('promesaApp.controladores', []);

app.controller('mainCtrl', ['$scope', '$q', function ($scope, $q) {
	
	$scope.miVar = 0;

	$scope.suma = function(num){

		var q = $q.defer();
		var valido = false;


		setTimeout(function(){

			if(valido){

			q.resolve(num)
		}
		else{

			q.reject('No se sumar');
		}

		}, 2000);

		
		return q.promise;
	}

		$scope.promise = $scope.suma(8);

		$scope.promise.then (
				function(valor){
					console.log("Promesa Cumplida");
					$scope.miVar = valor;

				},
				function(error){
					console.error(error);
					$scope.miVar = "Error!!!";
				}

			)

}]);