(function () {
    'use strict';
    var app = angular.module('myApp');
    app.factory('bookFactory', [
        '$http' ,
        function ($http) {
            return {
                getAllBooks: function () {
                    return $http.post('http://localhost:3000/', {"method": "getBooks"})
                        .then(function (data) {
                            return data.data.map(function (book) {
                                return new Book(book);
                            })
                        })
                },
                getBook: function (id) {
                    return $http.post('http://localhost:3000/', {"method": "getBook", "params":id})
                        .then(function (data) {
                            return new Book(data.data);
                        });
                },
                insertBook: function (book) {
                    return $http.post('http://localhost:3000/', {"method":"insertBook", "params":book});
                },
                addReader: function (book, reader, date) {
                    return $http.post('http://localhost:3000/', {"method":"addReader", "params":{"id": book.id, "reader": reader, "date": date}});
                }
            }
        }
    ]);
})();