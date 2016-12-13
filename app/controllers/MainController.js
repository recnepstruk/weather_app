angular.module('WeatherApp').controller('MainController', ['$scope', 'current', function($scope, current) {
    $scope.greeting = 'Hello from weather app!';

    current.success(function(data) {
        $scope.curr_cond = data;
    });
}]);