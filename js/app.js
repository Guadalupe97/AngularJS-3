//Directivas o modulo general 
//[] librerias o dependencias
var app = angular.module('universidadApp', []);

//controladores, se recomienda encapsular perfectamente las funciones de cada controlador.

app.controller('profesorCtrl', function () {

	//Propiedad que tendra los valores del objeto
	this.profesor = profesorData;
	
});

//Objetos

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}