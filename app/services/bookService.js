(function () {
    'use strict';
    var app = angular.module('myApp');

    app.service('BookService', ['$http',function ($http) {
        this.books = [{
            id: 0,
            titleRussian: "Совершенный код",
            titleEnglish: "Code Complete",
            author: "Steve McConnell",
            releaseDate: "2004-07-06T21:00:00.000Z",
            publishingHouse: "Microsoft Press",
            description: '',
            tags: ['JS', 'HTML', 'C', 'CSS'],
            path: "source/images/perfect_code.jpg",
            edition: 2,
            language: "ru-RU",
            available: true,
            returnDate: '',
            levelOfTraining: 2
        },{
            id: 1,
            titleRussian: "Программист-прагматик: от подмастерья к мастеру",
            titleEnglish: "The Pragmatic Programmer: From Journeyman to Master",
            author: "Andrew Hunt, David Thomas",
            releaseDate: "1999-10-29T21:00:00.000Z",
            publishingHouse: "Addison-Wesley Professional",
            description: '',
            tags: ['C', 'CSS'],
            path: "source/images/pragmatic_programmer.jpg",
            edition: 2,
            language: "ru-RU",
            available: true,
            returnDate: '',
            levelOfTraining: 1
        },{
            id: 2,
            titleRussian: "Структура и интерпретация компьютерных программ",
            titleEnglish: "Structure and Interpretation of Computer Programs",
            author: "Harold Abelson, Gerald J Sussman, Julie Sussman",
            releaseDate: "1996-07-31T21:00:00.000Z",
            publishingHouse: "McGraw-Hill Science/Engineering/Math",
            description: '',
            tags: ['HTML', 'C'],
            path: "source/images/structure_of_program.jpg",
            edition: 2,
            language: "ru-RU",
            available: false,
            returnDate: '2016-06-12T21:00:00.000Z',
            levelOfTraining: 1
        },{
            id: 3,
            titleRussian: "Язык программирования Си",
            titleEnglish: "The C Programming Language",
            author: "Brian W Kernighan и Dennis M Ritchie",
            releaseDate: "1988-03-31T21:00:00.000Z",
            publishingHouse: "Prentice Hall",
            description: '',
            tags: ['C'],
            path: "source/images/CProgramming.jpg",
            edition: 2,
            language: "ru-RU",
            available: true,
            returnDate: '',
            levelOfTraining: 0
        },{
            id: 4,
            titleRussian: "Введение в алгоритмы",
            titleEnglish: "Introduction to Algorithms",
            author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest и Clifford Stein",
            releaseDate: "2009-07-30T21:00:00.000Z",
            publishingHouse: "MIT Press",
            description: '',
            tags: ['JS', 'C'],
            path: "source/images/Introduction.jpg",
            edition: 1,
            language: "en-GB",
            available: false,
            returnDate: '2016-07-01T21:00:00.000Z',
            levelOfTraining: 1
        },{
            id: 5,
            titleRussian: "Рефакторинг: улучшение существующего кода",
            titleEnglish: "Refactoring: Improving the Design of Existing Code",
            author: "Martin Fowler, Kent Beck, John Brant и William Opdyke",
            releaseDate: "1999-07-07T21:00:00.000Z",
            publishingHouse: "Addison-Wesley Professional",
            description: '',
            tags: ['JS', 'HTML', 'C', 'CSS'],
            path: "source/images/Refactoring.jpg",
            edition: 1,
            language: "en-GB",
            available: false,
            returnDate: '2016-06-01T21:00:00.000Z',
            levelOfTraining: 2
        }];

        this.getBook = function (id) {
            var resultBook = null;
            this.books.forEach(function (book) {
                if (book.id == id)
                    resultBook = book
            });
            return resultBook;
        };

        this.getBooksWithFilter = function (filter){
            return this.books.filter(filter.check, filter)
        };

        this.getAllTags = function () {
            var resultTags = [];
            this.books.forEach(function (book) {
                book.tags.forEach(function (tag) {
                    if (!~resultTags.indexOf(tag)){
                        resultTags.push(tag)
                    }
                })
            });
            return resultTags
        };
    }]);
})();