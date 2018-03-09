var app = angular.module('promesaApp.servicios', []);

app.factory('personas', ['$http','$q','$rootScope' , function ($http, $q, $rootScope) {
	
	var self =  {
	"cargando": false,
	"mensaje": "",
	"data": []
};

	//funcion javascript
	self.cargarData = function(){

		self.cargando = true;

		var q = $q.defer();

		//jsonp para traer informacion fuera de nuestro dominio
		$http.jsonp('http://www.json-generator.com/api/json/get/bPfanQQVyW?callback=JSON_CALLBACK')
		.then (function success(respuesta){

			/*self.cargando = false;
			self.data = respuesta.data;

			console.log("Todo bin");
			console.log(respuesta);*/

				q.resolve(respuesta.data);


		},

		function error(response){

			console.log(":(");
			q.reject("Error al cargar");

		});

		return q.promise;
};

	$rootScope.promise = self.cargarData();
	$rootScope.promise.then(
		function(data){

			self.cargando = false;
			self.mensaje = "Informacion cargada correctamente"
			self.data = data;
		},

		function(error){

			self.cargando = false;
			self.mensaje = "Error al cargar la data";
			console.error(error);
		});

	return self;
}])
