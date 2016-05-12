(function () {
    'use strict';
    var app = angular.module('myApp');
    app.factory('tagFactory', ['$http', 'bookFactory' ,function ($http, bookFactory) {
        function getAllTags() {
            var resultTags = [];
            bookFactory.getAllBooks().forEach(function (book) {
                book.tags.map(function (tag) {
                    if (!~resultTags.indexOf(tag)){
                        resultTags.push(tag)
                    }
                })
            });
            return resultTags
        }
        return {
            getAllTags: function () {
                return getAllTags();
            }
        }
    }]);
})();