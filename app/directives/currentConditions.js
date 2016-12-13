angular.module('WeatherApp').directive('currentConditions', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'app/directives/currentConditions.html'
    }
});