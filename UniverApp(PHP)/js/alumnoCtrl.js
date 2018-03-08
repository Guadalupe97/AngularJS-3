app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	$scope.setActive("mAlumnos");

	var codigo = $routeParams.codigo;

	$scope.actualizado = false;
	$scope.alumno = {};

	$scope.creando =  false;

	if (codigo == "nuevo") {
			$scope.creando = true
	}else{
		$http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).success(function(data){

		if(data.err !== undefined){
			window.location = "#/alumnos"
			return;
		}	
		$scope.alumno = data;
	});

	}

	
	//crear funcion para porcesar la informacion
	$scope.guardarAlumno = function(){

		if($scope.creando){

				//alert("Bien");

		$http.post('php/servicios/alumnos.crear.php', $scope.alumno).success(function(data){

			if (data.err === false){
			$scope.actualizado = true;

			setTimeout(function(){
				$scope.actualizado = false;
				//decir a angular que se actualice
				$scope.$apply();
			}, 3500);
		};
		
		});

		}
		else{
				//alert("Bien");

		$http.post('php/servicios/alumnos.guardar.php', $scope.alumno).success(function(data){

			if (data.err === false){
			$scope.actualizado = true;

			setTimeout(function(){
				$scope.actualizado = false;
				//decir a angular que se actualice
				$scope.$apply();
			}, 3500);
		};
		
		});
		}
	
	}

}]);



//routeParams atajar parametros