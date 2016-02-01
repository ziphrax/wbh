var wbhClient = angular.module('wbhClient',[]);

wbhClient.controller('PlanetListCtrl',function($scope){
  $scope.planets = [
    {
      "name" : "Planet A",
      "snippet" : "Planet A is a planet!"
    },
    {
      "name" : "Planet B",
      "snippet" : "Planet B is a planet!"
    },
    {
      "name" : "Planet C",
      "snippet" : "Planet C is a planet!"
    }
  ];
});
