'use strict';

var app = angular.module("SimpleApp", ["ngRoute"]);

// Route angular
app.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
    // Index
        .when('/', {
            templateUrl: '/templates/book.html'
        })
        .when('/publisher', {
            templateUrl: '/templates/publisher.html'
        })
        // removed other routes ... *snip
        .otherwise({
            redirectTo: '/'
        });
}]);