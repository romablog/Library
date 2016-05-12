(function () {
  'use strict';

  angular.module('myApp.library', ['ngRoute']).
  controller('LibraryCtrl', ['$rootScope','$scope', '$location', 'BookService',function($rootScope,$scope, $location, BookService) {

    $scope.filter = new Filter();

    $scope.getBooks = function () {
      $scope.books = BookService.getBooksWithFilter($scope.filter)
    };
    $scope.getBooks();

    $scope.redirectToPathOfBook = function (id) {
      $location.path('/book/'+id);
    };

    $scope.$on('tags.changed', $scope.getBooks);
  }]);
})();