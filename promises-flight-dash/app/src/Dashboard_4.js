
// 3-call sequence:getFlightDetails() -> (getPlaneDetails() + getForecast())

var FlightDashboard = function( $scope, user, travelService, weatherService, $q ) {
  "use strict";

  var loadFlight = function( user ) {
    return travelService.getDeparture( user.email ); // Request #1
  },
  loadFlightWeather = function ( departure ) {
  // Execute #2 & #3 in parallel...
  return $q.all([
    travelService.getFlight( departure.flightID ), // Request #2
    weatherService.getForecast( departure.date)// Reqeust #3
    ])
  //$q.all() returns an array of results. $q.spread converts them to function args
  .then($q.spread(function( flight, weather ){
    // update the $scope all together for perf improvements
    $scope.departure = departure;// Response Handler #1
    $scope.flight= flight; // Response Handler #2
    $scope.weather = weather;// Response Handler #3
  }));
};


  // Wow! So much simpler...
  loadFlight( user ).then( loadFlightWeather );

};
