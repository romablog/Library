(function () {
    window.Book = function Book(jsonOrObj){
        var res = jsonOrObj;
        if (typeof jsonOrObj == 'string'){
            res = JSON.parse(jsonOrObj)
        }
        this.id = res.id  || -1;
        this.titleRussian = res.titleRussian || '';
        this.titleEnglish = res.titleEnglish || '';
        this.author = res.author || '';
        this.releaseDate = res.releaseDate || '1971-01-01T00:00:00.000Z';
        this.publishingHouse = res.publishingHouse || '';
        this.description = res.description || '';
        this.tags = res.tags || [];
        this.path = res.path || '';
        this.edition = res.edition || -1;
        this.language = res.language || '';
        this.available = res.available || false;
        this.returnDate = res.returnDate || '';
        this.levelOfTraining = res.levelOfTraining || -1;
        this.addedDate = res.addedDate || '2000-01-02T00:00:00.000Z';
        this.arrayForSearch = [this.titleRussian, this.titleEnglish, this.author,
            this.releaseDate, this.path, this.description];
    };

    Book.prototype.isBookContainSubstring = function (string) {
        return this.arrayForSearch.some(function (value) {
            return (~value.toLowerCase().indexOf(string));
        })
    };
    
    Book.prototype.isBookOfLevels = function (levels) {
        var values = Object.keys(levels);
        return levels[values[book.levelOfTraining]]
    };
})();
// id, titleRussian, titleEnglish, author, releaseDate,
// publishingHouse, description, tags, path, edition,
// language, available, returnDate, levelOfTraining