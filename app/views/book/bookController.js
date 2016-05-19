(function () {
  'use strict';

  angular.module('myApp.book', ['ngRoute']).
  controller('BookCtrl', [
      '$routeParams', 
      'bookFactory', 
      '$scope', 
      '$location',
      '$http',
      function($routeParams, bookFactory, $scope, $location, $http) {
          $scope.exception = false;
          
          $scope.user = {
              firstName: 'Ann'
          };
          
          $scope.searchByTag = function(tag){
              $location.path('/library/'+tag);
          };
          
          $scope.reserveBook = function (reader) {
              var date = new Date().setMonth($scope.book.returnDate.getMonth() + 2);
              $scope.addReader(reader, date);
          };
          
          $scope.getBookButton = function (reader) {
              var date = new Date().setMonth(new Date().getMonth() + 2);
              $scope.addReader(reader, date);
          };
          
          $scope.addReader = function (reader, date) {
              bookFactory.addReader($scope.book, reader, date)
                  .then(function (data) {
                      $scope.book = new Book(data.data);
                  })
                  .catch(function (data) {
                      console.log(data)
                  });
          };

          $scope.getCountOfPeople = function () {
              if ($scope.book && !$scope.book.available){
                  if ($scope.book.peopleInQueue.length == 1){
                      return 'читает один человек'
                  }
                  if ($scope.book.peopleInQueue.length < 5){
                      return 'читают '+ $scope.book.peopleInQueue.length +' человека'
                  }
                  return 'читает ' + $scope.book.peopleInQueue.length + ' человек'
              }
          };

          bookFactory.getBook($routeParams.id)
              .then(function (data) {
                  $scope.book = data;
              })
              .catch(function () {
                  $scope.exception = true;
              });
  }]);  
})();