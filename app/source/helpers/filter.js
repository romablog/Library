function Filter() {
    this.search = '';
    this.availableOnly = false;
    this.level = {
        beginner: true,
        normal: true,
        advanced: true
    };
    this.tags = [];
    console.log("new filter");
}