angular.module("WeatherApp")
       .config(Router);

Router.$inject = ["$routeProvider"];

function Router($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./index.html"
        });
}