// var app = angular.module("myApp");

myApp.controller('navController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function(destination){
        // console.log("NAVCONT");
        return destination === $location.path();
    }
}]);