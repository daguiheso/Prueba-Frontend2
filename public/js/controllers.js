'use strict';

/* Controllers */


(function() {
	angular.module('prueba.controllers', []) 

		.controller('ArtistsController', ['$scope', 'pruebaService', function ($scope, pruebaService){
			pruebaService.all().then(function (data){
				$scope.fjson = data;
			});

		}])
		
		.controller('ArtistController', ['$scope', '$routeParams', 'pruebaService', function ($scope, $routeParams, pruebaService) {
			var name = $routeParams.name;

			pruebaService.allInfo(name).then(function (data){
					console.log(data);
					$scope.artist = data;
				})
		}])
})();