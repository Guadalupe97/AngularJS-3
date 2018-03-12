var app = angular.module( 'LoginApp',['login.loginService']);


app.controller('mainCtrl', ['$scope', 'LoginService', function($scope, LoginService){

	$scope.invalido = false;
	$scope.cargando = false;
	$scope.mensaje = "";

	$scope.datos = {};

	$scope.ingresar = function(datos){

		if (datos.usuario.length < 3){

			$scope.invalido = true;
			$scope.mensaje = "Por favor ingrese un usuario con más de 3 caracteres";
			return;
		}
		else if (datos.contrasena.length < 8){
			$scope.invalido = true;
			$scope.mensaje = "Por favor ingrese una contraseña con más de 8 caracteres";
			return;
}

			$scope.invalido = false;
			$scope.cargando = true;

			LoginService.login(datos).then(function(data){

				if(data.err){
					$scope.invalido = true;
					$scope.cargando = false;
					$scope.mensahe = data.mensaje;
				}else{

					window.location = data.url;
					console.log (data.mensaje);
				}


			});		

	}

}]);
	
