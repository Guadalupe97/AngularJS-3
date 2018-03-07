(function(){

	var app = angular.module('App3', []);

	app.controller('listadoCtrl2', ['$scope', function ($scope) {
	
	$scope.personas = [

	{
		"id": 0,
		"sexo": "Mujer",
		"nombre": "Moon Byul",
		"avatar": "tameka.jpg",
		"telefono": "(826) 453-3497",
		"celular": "(801) 9175-8136"	
	},
	{
		"id": 1,
		"sexo": "Hombre",
		"nombre": "Kari Carr",
		"avatar": "kari.jpg",
		"telefono": "(824) 438-2499",
		"celular": "(801) 8595-8337"	

	},
	{
		"id": 2,
		"sexo": "Mujer",
		"nombre": "Charity Austin",
		"avatar": "charity.jpg",
		"telefono": "(817) 512-2258",
		"celular": "(801) 9375-3830"	
	},
	{
		"id": 3,
		"sexo": "Mujer",
		"nombre": "Slater Hunt",
		"avatar": "slater.jpg",
		"telefono": "(842) 413-3023",
		"celular": "(801) 9555-1729"	
	},
	{
		"id": 4,
		"sexo": "Mujer",
		"nombre": "Chen Hanson",
		"avatar": "chen.jpg",
		"telefono": "(966) 520-2696",
		"celular": "(801) 9324-4423"	
	},
	{
		"id": 5,
		"sexo": "Hombre",
		"nombre": "Obrien Davis",
		"avatar": "obrien.jpg",
		"telefono": "(996) 595-3896",
		"celular": "(801) 8195-2732"	
	},
	{
		"id": 6,
		"sexo": "Hombre",
		"nombre": "Le Haley",
		"avatar": "le.jpeg",
		"telefono": "(967) 527-3286",
		"celular": "(801) 8074-5225"	
	},
	{
		"id": 7,
		"sexo": "Hombre",
		"nombre": "Lester Carey",
		"avatar": "lester.jpg",
		"telefono": "(994) 465-3542",
		"celular": "(801) 9044-7522"
	},
	{
		"id": 8,
		"sexo": "Mujer",
		"nombre": "Rosario Perry",
		"avatar": "rosario.jpg",
		"telefono": "(848) 499-2977",
		"celular": "(801) 8495-0625"
	},
	{
		"id": 9,
		"sexo": "Mujer",
		"nombre": "Marilyn Huber",
		"avatar": "marilyn.jpg",
		"telefono": "(982) 580-3235",
		"celular": "(801) 8184-2624"
	}
];
	}]);
})();