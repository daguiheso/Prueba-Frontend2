'use strict';

/* Directives */

(function(){
	angular.module('prueba.directives', [])

		.directive('artistImage', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/artist-image.html'
		  }
		})
		.directive('artistInformation', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/artist-information.html'
		  }
		})
		.directive('artistBiografy', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/artist-biografy.html'
		  }
		})
		.directive('artistSimilar', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/artist-similar.html'
		  }
		})
})();