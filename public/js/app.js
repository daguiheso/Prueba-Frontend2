'use strict';

/* App Module */

(function () {

  var app = angular.module('prueba', [
  	'ngRoute', 
    'prueba.services',
    'prueba.controllers',
    'prueba.filters'
  ]);

  //el modulo routeProvider esta siendo injectado a la funcion routeProvider
  app.config(['$routeProvider', function($routeProvider){
  	$routeProvider   //lamado de metodos encadenados
  		.when('/artists',{  //el  /  => ruta principal
  			templateUrl: 'views/artists.html',
        	controller: 'ArtistsController'
  		})
  		.when('/artists/:name', {  
  			templateUrl: 'views/artist.html', 
  			controller: 'ArtistController', 
  		})
  		.otherwise({
  			redirectTo: '/artists'
  		});
  }]);

})();