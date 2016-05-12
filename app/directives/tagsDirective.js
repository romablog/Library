(function () {
    'use strict';
    var app = angular.module('myApp');
    app.directive('tagsDirective', ['tagFactory', function (tagFactory) {
        return {
            scope: {
                tags:'='
            },
            restrict: 'E',
            templateUrl:'directives/tags-directive.html',
            link: function (scope, element, attrs) {
                scope.allAvailableBookTags = tagFactory.getAllTags();
                scope.searchText = '';
                scope.newSearch = function () {
                    if (!~scope.tags.indexOf(scope.searchText)){
                        console.log("search", scope.searchText);
                        var indexInAvailable = scope.allAvailableBookTags.indexOf(scope.searchText);
                        if (~indexInAvailable){
                            scope.tags.push(scope.searchText);
                            scope.allAvailableBookTags.splice(indexInAvailable, 1);
                            scope.$emit('tags.changed');
                            scope.searchText = '';
                        }
                    }
                };
                scope.removeTag = function (tag){
                    scope.tags.splice(scope.tags.indexOf(tag), 1);
                    scope.allAvailableBookTags.push(tag);
                    scope.$emit('tags.changed');
                };
            }
        };
    }]);

})();