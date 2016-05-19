(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'myApp.library',
    'myApp.book',
    'myApp.home',
    'myApp.version'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/library'});
    $routeProvider.when('/library', {
      templateUrl: 'views/library/library.html'
    });
    $routeProvider.when('/library/:tag', {
      templateUrl: 'views/library/library.html'
    });
    $routeProvider.when('/book/:id', {
      templateUrl: 'views/book/book.html'
    });
    $routeProvider.when('/home', {
      templateUrl: 'views/home/home.html'
    });
  }]);
})();