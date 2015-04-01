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
  	$routeProvider  
  		.when('/',{  
  			templateUrl: 'views/artists.html',
        	controller: 'ArtistsController'
  		})
  		.when('/artist/:name', {  
  			templateUrl: 'views/artist.html', 
  			controller: 'ArtistController', 
  		})
  		.otherwise({
  			redirectTo: '/'
  		});
  }]);

})();