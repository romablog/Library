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

    $scope.getLanguageIcon = function (lang) {
      if (lang === 'en-GB')
        return 'source/images/united_kingdom_640.png';
      else if (lang === 'ru-RU')
        return 'source/images/russia_640.png'
    };

    $scope.getEdition = function (edition) {
      var result = '';
      if (edition === 1) {
        result += 'первое';
      }
      if (edition === 2) {
        result += 'второе';
      }
      if (edition === 3) {
        result += 'третье';
      }
      return result + ' издание'
    };

    $scope.getDate = function (date) {
      return new Date(date).toLocaleDateString()
    };

    $scope.$on('tags.changed', $scope.getBooks);
  }]);
})();