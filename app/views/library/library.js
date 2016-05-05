'use strict';

angular.module('myApp.library', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/library', {
    templateUrl: 'views/library/library.html',
    controller: 'LibraryCtrl'
  });
}])

.controller('LibraryCtrl',['$scope', '$location', 'BookService',function($scope, $location, BookService) {
  $scope.books = BookService.getAllBooks();

  $scope.redirectToNewPath = function (id) {
    $location.path('/book/'+id);
  };
  
  $scope.sortBooks = function () {
    console.log("sortBooks");
  };

  $scope.pictureOfLanguage = function (lang) {
    if (lang == 'english')
        return 'source/united_kingdom_640.png';
    else return 'source/russia_640.png'
  }
}]);