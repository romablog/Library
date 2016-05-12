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
        if (this.search && !book.isBookContainSubstring(this.search)){ return false }
        if (this.availableOnly && !book.available){ return false }
        if (!book.isBookOfLevels(this.level)) { return false }
        return !this.tags.some(function (tag) { return !(~book.tags.indexOf(tag)) });
    };
})();