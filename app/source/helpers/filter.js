function Filter() {
    this.search = '';
    this.availableOnly = false;
    this.level = {
        beginner: true,
        normal: true,
        advanced: true
    };
    this.tags = [];
}

Filter.prototype.check = function (book) {
    if (this.search && !bookContainsSubstring(book, this.search.toLowerCase())){ return false }
    if (this.availableOnly && !book.available){ return false }
    if (!isBookOfLevels(book, this.level)) { return false }
    return this.tags.every(function (tag) { return ~book.tags.indexOf(tag) });
};

function bookContainsSubstring(book, search) {
    console.log(search);
    if (~book.titleRussian.toLowerCase().indexOf(search)){ return true }
    if (~book.titleEnglish.toLowerCase().indexOf(search)){ return true }
    if (~book.author.toLowerCase().indexOf(search)){ return true }
    if (~book.releaseDate.toLowerCase().indexOf(search)){ return true }
    if (~book.publishingHouse.toLowerCase().indexOf(search)){ return true }
    return (~book.description.toLowerCase().indexOf(search))
}

function isBookOfLevels(book, level) {
    if (book.levelOfTraining === 0 && level.beginner){ return true }
    if (book.levelOfTraining === 1 && level.normal){ return true }
    return (book.levelOfTraining === 2 && level.advanced)
}