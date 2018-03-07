(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  
	$scope.profesores = {};

	$http.get('json/profesores.json').success(function(data){

		//Código cuando la petición es correcta
		$scope.profesores = data.profesores;
	});

}]);

})();
