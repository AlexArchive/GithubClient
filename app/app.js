var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    
    $routeProvider.when('/home', {
        controller: 'searchController',
        templateUrl: 'app/views/search.htm'
    });
    
    $routeProvider.when('/user/:username', {
        templateUrl: 'app/views/user.htm',
        controller: 'userController'
    })
    
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    
});