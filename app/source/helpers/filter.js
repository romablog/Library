(function () {
    'use strict';
    window.Filter = function Filter() {
        this.search = '';
        this.availableOnly = false;
        this.level = {
            beginner: true,
            normal: true,
            advanced: true
        };
        this.tags = [];
    };

    Filter.prototype.check = function (book) {
        if (this.search && !bookContainsSubstring(book, this.search.toLowerCase())){ return false }
        if (this.availableOnly && !book.available){ return false }
        if (!isBookOfLevels(book, this.level)) { return false }
        return !this.tags.some(function (tag) { return !(~book.tags.indexOf(tag)) });
    };

    function bookContainsSubstring(book, search) {
        var searchArr = [book.titleRussian, book.titleEnglish, book.author,
            book.releaseDate, book.publishingHouse, book.description];
        return searchArr.some(function (string) {
            return (~string.toLowerCase().indexOf(search));
        })
    }

    function isBookOfLevels(book, level) {
        var values = Object.keys(level);
        return level[values[book.levelOfTraining]]
    }
})();