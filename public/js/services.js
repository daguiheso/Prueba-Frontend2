'use strict';

/* Services */


(function(){
	angular.module('prueba.services',[])
		.factory('pruebaService', ['$http', '$q', '$filter', function($http, $q, $filter){

			var normalize = $filter('normalize');

			function all(){
				var deferred = $q.defer(); 
				$http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=78b5913e02ae88a4d6ecdc0339543e16&format=json') //esto me devuelve los datos en una promesa, la promesa recibe una function que se llama callback
					.success(function(data){ 
						deferred.resolve(data)
					});

				return deferred.promise;
			}

			function byName(name) {
				name = normalize(name);
				var deferred = $q.defer();
				
				all().then(function (data){
					var results = data.results.artistmatches.artist.filter(function (artist){ 
						return normalize(artist.name) === name;
					});

					if (results.length > 0) {
						deferred.resolve(results[0]);
					}else{
						deferred.reject();
					}
				});
				return deferred.promise;
			}

			return {
				all : all,
				byName : byName
			}
		}]);
})();
