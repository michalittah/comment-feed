angular.module('commentService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Comments', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/comments');
			},
			create : function(commentData) {
				return $http.post('/api/comments', commentData);
			},
			delete : function(id) {
				return $http.delete('/api/comments/' + id);
			}
		}
	}]);