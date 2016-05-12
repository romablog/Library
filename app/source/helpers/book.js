(function () {
    window.Book = function Book(jsonOrObj){
        var res = jsonOrObj;
        if (typeof jsonOrObj == 'string'){
            res = JSON.parse(jsonOrObj)
        }
        this.id = res.id  || 0;
        this.titleRussian = res.titleRussian || '';
        this.titleEnglish = res.titleEnglish || '';
        this.author = res.author || '';
        this.publishingHouse = res.publishingHouse || '';
        this.description = res.description || '';
        this.tags = res.tags || [];
        this.path = res.path || '';
        this.edition = res.edition || 0;
        this.language = res.language || '';
        this.available = res.available || false;
        this.levelOfTraining = res.levelOfTraining || 0;
        this.returnDate = res.returnDate || '';
        this.releaseDate = res.releaseDate || '1971-01-01T00:00:00.000Z';
        this.addedDate = res.addedDate || '2000-01-02T00:00:00.000Z';
        this.arrayForSearch = [this.titleRussian, this.titleEnglish, this.author,
            this.releaseDate, this.path, this.description];
    };

    Book.prototype.isBookContainSubstring = function (string) {
        string = string.toLowerCase();
        return this.arrayForSearch.some(function (value) {
            return (~value.toLowerCase().indexOf(string));
        })
    };
    
    Book.prototype.isBookOfLevels = function (levels) {
        var values = Object.keys(levels);
        return levels[values[this.levelOfTraining]]
    };
    
    Book.prototype.getEdition = function () {
        var result = '';
        if (this.edition === 1) {
            result += 'Первое';
        }
        if (this.edition === 2) {
            result += 'Второе';
        }
        if (this.edition === 3) {
            result += 'Третье';
        }
        return result + ' издание'
    };

    Book.prototype.isNew = function () {
        var addedDate = new Date(this.addedDate);
        addedDate.setDate(addedDate.getDate() + 14);
        return addedDate > new Date();
    };
    
    Book.prototype.localeDate = function (date) {
        return new Date(date).toLocaleDateString()
    };
    
    Book.prototype.getLanguageIcon = function () {
        if (this.language === 'en-GB')
            return 'source/images/united_kingdom_640.png';
        else if (this.language === 'ru-RU')
            return 'source/images/russia_640.png';
    };
    
    Book.prototype.getStringOfLevel = function () {
        var level = [ 'Beginner', 'Normal', 'Advanced'];
        return level[this.levelOfTraining];
    };
})();
// id, titleRussian, titleEnglish, author, releaseDate,
// publishingHouse, description, tags, path, edition,
// language, available, returnDate, levelOfTraining