(function () {
    'use strict';
    var app = angular.module('myApp');
    app.directive('tagsDirective', [
        'tagFactory', 
        function (tagFactory) {
            return {
                scope: {
                    tags:'='
                },
                restrict: 'E',
                templateUrl:'directives/tags-directive.html',
                link: function (scope, element, attrs) {
                    tagFactory.getAllTags().then(function (answer) {
                        scope.allAvailableBookTags = answer.data;
                        if (scope.tags.length > 0){
                            scope.allAvailableBookTags.splice(scope.allAvailableBookTags.indexOf(scope.tags[0]), 1);
                        }
                    });
                    scope.searchText = '';
                    scope.newSearch = function () {
                        if (!~scope.tags.indexOf(scope.searchText)){
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
        }
    ]);
})();