(function () {
    'use strict';
    var app = angular.module('myApp');

    app.service('BookService', ['bookFactory', function (bookFactory) {

        function getBooksFromFactory(){
            return bookFactory.getAllBooks().map(function (answer) {
                return new Book(answer);
            });
        }

        this.books = getBooksFromFactory();
        
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
    }]);
})();