'use strict';

/* Filters */


(function(){
	angular.module('prueba.filters', [])
		.filter('normalize', function () {
		    return function (input) {
		    	if (!input) return "";
		    	input = input
		    	.replace('extralarge', '');
		        return input.toLowerCase();
		    };
  		})
})();