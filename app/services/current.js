angular.module('WeatherApp').factory('current',['$http', function($http) {
    return 	$http.get('http://api.wunderground.com/api/592c686b6e4c4486/conditions/q/CO/Denver.json')

  .success(function(data) {
    return data;
  })
  
  .error(function(err) {
    return err;
  });

}]);    