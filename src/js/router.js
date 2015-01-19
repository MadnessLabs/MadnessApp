app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/home', {
        templateUrl: 'html/home.html',
        controller: 'homeCtrl'
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);