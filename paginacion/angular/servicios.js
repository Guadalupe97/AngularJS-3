var app = angular.module('paginacionApp.servicios',[]);

app.factory('Paises', ['$http', function($http){
		
		var self = {

			cargando: false,
			pagina: 1,
			totalregistros:0,
			totalpaginas: 0,
			data:[],

			//cargar todas las paginas 

			ir_a: function(pag){

				self.cargarData({
						pagina: pag

					});

			},

			//Primer método para cargar páginas --objeto anonimo--

			cargarUltima: function(){

				self.cargarData(
				{
					pagina: self.totalpaginas
				});

			},

			cargarPrimera: function(){

				self.cargarData(
				{
					pagina: 1
				});

			},



			cargarData: function(opciones){

				self.cargando = true;
				self.pagina = opciones.pagina;

				$http.post('php/servicios/paises.getPaises.php', opciones).success (function(respuesta){

					self.cargando = false;
					self.totalpaginas = respuesta.totalpaginas;
					self.totalregistros = respuesta.totalregistros;
					self.data = respuesta.data;


					console.log(respuesta);

				})

				.error(function(respuesta){

					console.error(respuesta);

				});

			}

		}

		var defecto ={
			pagina:1
		};

		self.cargarData(defecto);

		return self;

}])