(function () {
  'use strict';

  angular.module('myApp.book', ['ngRoute']).
  controller('BookCtrl', ['$routeParams', 'BookService', '$scope', function($routeParams, BookService, $scope) {
    $scope.book = BookService.getBook($routeParams.id);
  }]);  
})();