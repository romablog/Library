'use strict';

angular.module('myApp.book', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/book/:id', {
    templateUrl: 'views/book/book.html',
    controller: 'BookCtrl'
  });
}])

.controller('BookCtrl', ['$routeParams', 'BookService', '$scope',function($routeParams, BookService, $scope) {
  $scope.book = BookService.getBook($routeParams.id);
}]);