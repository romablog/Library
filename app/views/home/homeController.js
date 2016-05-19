(function () {
    'use strict';

    angular.module('myApp.home', ['ngRoute']).
    controller('HomeCtrl', [
        '$routeParams',
        '$scope',
        function($routeParams, $scope) {
            $scope.user = {
                id: 1,
                firstName: 'Ad'
            };
        }]);
})();