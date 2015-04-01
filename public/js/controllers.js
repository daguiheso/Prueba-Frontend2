'use strict';

/* Controllers */


(function() {
	// 2 param es el arreglo de las dependencias 
	angular.module('prueba.controllers', []) //sin  ;  al final para tener chainmethods

		.controller('ArtistsController', ['$scope', 'pruebaService', function ($scope, pruebaService){

			pruebaService.all().then(function (data){
				console.log(data);
				$scope.fjson = data;
			});
		}])
		
		.controller('ArtistController', ['$scope', '$routeParams', 'pruebaService', function ($scope, $routeParams, pruebaService) {
			var name = $routeParams.name;

			pruebaService.byName(name)
				.then(function (data){
					$scope.artist = data;
				})
		}])
})();