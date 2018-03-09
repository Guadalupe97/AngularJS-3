var app = angular.module('paginacionApp.controladores',[]);

app.controller('paisesCtrl', ['$scope','Paises', function($scope,Paises){
		
		$scope.paises = Paises;

		$scope.ir_ultimo = function(){

			//los objetos pasan por referencia
			Paises.cargarUltima();

		}

		$scope.ir_primera = function(){

			//los objetos pasan por referencia
			Paises.cargarPrimera();

		}


		$scope.ir_a = function(num){
			Paises.ir_a(num);
		}


		//generador de arreglo, controla las paginas que se muestran

		$scope.arrPaginas = function(num){

			var arr = [];

			for (var i = 0;  i < num; i++) {
				arr.push(i+1);

				}
				return arr;
			}


}]);