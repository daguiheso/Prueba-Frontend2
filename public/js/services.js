'use strict';

/* Services */


(function(){
	angular.module('prueba.services',[])
		.factory('pruebaService', ['$http', '$q', '$filter', function($http, $q, $filter){

			function all(){
				var deferred = $q.defer(); 
				$http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=78b5913e02ae88a4d6ecdc0339543e16&format=json') //esto me devuelve los datos en una promesa, la promesa recibe una function que se llama callback
					.success(function(data){ 
						deferred.resolve(data)
					});

				return deferred.promise;
			}

			function allInfo(){
				var deferred = $q.defer(); 
				$http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=78b5913e02ae88a4d6ecdc0339543e16&format=json') //esto me devuelve los datos en una promesa, la promesa recibe una function que se llama callback
					.success(function(data){ 
						deferred.resolve(data.artist)
					});

				return deferred.promise;
			}

			return {
				all : all,
				allInfo : allInfo
			}
		}]);
})();
