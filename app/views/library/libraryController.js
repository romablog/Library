(function () {
  'use strict';

  angular.module('myApp.library', ['ngRoute']).
  controller('LibraryCtrl', ['$routeParams', '$scope', '$location', 'bookFactory',function($routeParams, $scope, $location, bookFactory) {

    $scope.filter = new Filter();

    if ($routeParams.tag){
      $scope.filter.tags.push($routeParams.tag);
    }

    $scope.exception = false;

    $scope.redirectToPathOfBook = function (id) {
      $location.path('/book/'+id);
    };

    $scope.getBooksWithFilter = function (){
      $scope.books = $scope.allBooks.filter($scope.filter.check, $scope.filter);
      $scope.allBooks.forEach(function (book) {
        book.hidden = !~$scope.books.indexOf(book);
      });
    };
    
    bookFactory.getAllBooks().then(function (data) {
      $scope.allBooks = data;
      $scope.getBooksWithFilter();
    }).catch(function () {
      $scope.exception = true;
    });

    var destroyTagsChanged = $scope.$on('tags.changed', $scope.getBooksWithFilter);

    $scope.$on('$destroy', function () {
      destroyTagsChanged();
    });
    var elems = document.getElementsByClassName("book");
    elems.forEach.addEventListener("transitionend", function (event) {
      
    })
  }]);
})();