(function () {
    'use strict';
    var app = angular.module('myApp');
    app.factory('tagFactory', [
        '$http',
        function ($http) {
            return {
                getCurrentUser: function () {
                    return $http.post('http://localhost:3000/', {"method": "getCurrentUser"})
                        .then(function (user) {
                            return new User(user);
                        });
                }
            }
        }
    ]);
})();