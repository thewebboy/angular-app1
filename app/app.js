var application = angular.module('myApp', ['ngRoute']);

application.config(['$routeProvider', function($routeProvider){

   $routeProvider
     .when('/home', {
       templateUrl: 'views/home.html',
       controller: 'mainController'
     })
     .when('/carList', {
       templateUrl: 'views/carList.html',
       controller: 'mainController'
     }).otherwise({
       redirectTo: '/home'
     });

}]);

// application.directive('randomCar', [function(){
//
//   return {
//     restrict: 'E',
//     scope: {
//        cars: '=',
//        title: '='
//      },
//
//      template: "{{car[0].name}}",
//      controller.function($scope){
//         $scope.random =
//      }
//   };
//
// }]);

application.controller('mainController', ['$scope', '$http', function($scope, $http){


$scope.removeCar = function(car){
   var removedCar = $scope.cars.indexOf(car);
   $scope.cars.splice(removedCar, 1);

};

$scope.addNewCar = function(){

  $scope.cars.push({
    name: $scope.newcar.name,
    model: $scope.newcar.model,
    color: $scope.newcar.color,
    available: true
  });

  $scope.newcar.name = "";
  $scope.newcar.model = "";
  $scope.newcar.color = "";
};

$http.get('external/cars.json').success(function(data){

   $scope.cars = data;
});



}]);
