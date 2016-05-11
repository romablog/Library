'use strict';

angular.module('myApp.library', ['ngRoute']).
controller('LibraryCtrl', ['$scope', '$location', 'BookService',function($scope, $location, BookService) {
  
  $scope.filter = new Filter();
  $scope.bookLevels = [0, 1, 2];
  $scope.books = BookService.getBooksForLevels($scope.bookLevels);

  $scope.getBooks = function () {
    $scope.books = BookService.getBooksWithFilter($scope.filter)
  };
  var levelOfBook = {
    0: 'beginner',
    1: 'normal',
    2: 'advanced'
  };
  
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
  
  //archive
  $scope.filterLevelOfBooks = function (level, value) {
    var index = $scope.bookLevels.indexOf(level);
    if (value && index === -1) {
      $scope.bookLevels.push(level)
    }
    if (!value && index > -1) {
      $scope.bookLevels.splice(index, 1);
    }
    $scope.books = BookService.getBooksForLevels($scope.bookLevels);
    if ($scope.filter.availableOnly){
      $scope.books = BookService.getValidBooks($scope.books);
    }
  };
  $scope.changeOnlyValid = function () {
    console.log("changeOnlyValid" + $scope.filter.availableOnly);
    if ($scope.filter.availableOnly){
      $scope.books = BookService.getValidBooks($scope.books);
    } else {
      $scope.books = BookService.getBooksForLevels($scope.bookLevels);
    }
  };
}]);