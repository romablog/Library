function User(jsonOrObj) {
    var obj = jsonOrObj;
    if (typeof jsonOrObj == 'string'){
        obj = JSON.parse(jsonOrObj)
    }
    this.id = obj.id || 1;
    this.firstName = obj.firstName || '';
}