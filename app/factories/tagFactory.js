(function () {
    'use strict';
    var app = angular.module('myApp');
    app.factory('tagFactory', [
        '$http', 
        function ($http) {
            return {
                getAllTags: function () {
                    return $http.post('http://localhost:3000/', {"method": "getAllTags"});
                }
            }
        }
    ]);
})();