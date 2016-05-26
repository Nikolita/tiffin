var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
$http.get('/about_content').success(function(response){
	console.log("I got data");
	$scope.description= response;
})

$http.get('/pricing').success(function(response){
	console.log("I got data");
	$scope.pricing= response;
})





}]);
