'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',['$scope', '$location', 'BookService',function($scope, $location, BookService) {
  $scope.books = BookService.getAllBooks();

  $scope.redirectToNewPath = function (id) {
    $location.path('/book/'+id);
  };
  
  $scope.sortBooks = function () {
    console.log("sortBooks");
  };
}]);