app = angular.module('myApp');
app.directive('tagsDirective', ['BookService', function (BookService) {
    return {
        scope: {
            tags:'=tags',
            changed:'=change'
        },
        restrict: 'E',
        templateUrl:'services/tags-directive.html',
        link: function (scope, element, attrs) {
            scope.allAvailableBookTags = BookService.getAllTags(); //['JS', 'HTML','CSS','Swift'];
            scope.searchText = '';
            scope.newSearch = function () {
                if (!~scope.tags.indexOf(scope.searchText)){
                    console.log("search", scope.searchText);
                    var indexInAvailable = scope.allAvailableBookTags.indexOf(scope.searchText);
                    if (~indexInAvailable){
                        scope.tags.push(scope.searchText);
                        scope.allAvailableBookTags.splice(indexInAvailable, 1);
                        scope.changed();
                    }
                }
            };
            scope.removeTag = function (tag){
                scope.tags.splice(scope.tags.indexOf(tag), 1);
                scope.changed();
                scope.allAvailableBookTags.push(tag)
            };
        }
    };
}]);