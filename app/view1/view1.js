'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',['$scope',function($scope) {
  $scope.books = [{
    titleRussian: "Совершенный код",
    titleEnglish: "Code Complete",
    author: "Steve McConnell",
    releaseDate: "7/07/2004",
    publishingHouse: "Microsoft Press",
    path: "sourse/Совершенный код.jpg"
  },{
    titleRussian: "Программист-прагматик: от подмастерья к мастеру",
    titleEnglish: "The Pragmatic Programmer: From Journeyman to Master",
    author: "Andrew Hunt, David Thomas",
    releaseDate: "30/10/1999",
    publishingHouse: "Addison-Wesley Professional",
    path: "sourse/программист прогматик.jpg"
  },{
    titleRussian: "Структура и интерпретация компьютерных программ",
    titleEnglish: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson, Gerald J Sussman, Julie Sussman",
    releaseDate: "1/08/1996",
    publishingHouse: "McGraw-Hill Science/Engineering/Math",
    path: "sourse/структура программ.jpg"
  },{
    titleRussian: "Язык программирования Си",
    titleEnglish: "The C Programming Language",
    author: "Brian W Kernighan и Dennis M Ritchie",
    releaseDate: "1/04/1988",
    publishingHouse: "Prentice Hall",
    path: "sourse/CProgramming.jpg"
  },{
    titleRussian: "Введение в алгоритмы",
    titleEnglish: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest и Clifford Stein",
    releaseDate: "31/072009",
    publishingHouse: "MIT Press",
    path: "sourse/Introduction.jpg"
  },{
    titleRussian: "Рефакторинг: улучшение существующего кода",
    titleEnglish: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler, Kent Beck, John Brant и William Opdyke",
    releaseDate: "8/07/1999",
    publishingHouse: "Addison-Wesley Professional",
    path: "sourse/Refactoring.jpg"
  }];

  $scope.sortBooks = function () {
    console.log("sortBooks");
  };
}]);