var app = angular.module('myApp', ['ngRoute']);
var prevcount=0;
app.run(function($rootScope) {
    $rootScope.Contactlist=[];
});

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl : 'index.html',
    controller  : 'HomeController'
  }).when('/contact',{
   templateUrl : 'contact.html',
    controller  : 'ContactController'

  })
});

app.controller('HomeController',function($scope){
$scope.message="hello demo application";
});

