app = angular.module('mathApp', ['chart.js']);

app.controller('LineCtrl', function ($scope) {

	$scope.x1 = 0;
	$scope.x2 = 0;
	$scope.y1 = 0;
	$scope.y2 = 0;
	$scope.x3 = 0;
	$scope.y3 = 0;


  $scope.labels = [$scope.x1, $scope.x2, $scope.x3];
  $scope.series = ['Função F(X)'];
  $scope.data = [
	    [$scope.y1, $scope.y2, $scope.y3]
	  ];

	  $scope.calcular = function(){
	  	console.log($scope.labels);
	  	  $scope.labels = [$scope.x1, $scope.x2, $scope.x3];
		  $scope.data = [
			    [$scope.y1, $scope.y2, $scope.y3]
			  ];
	  }
});
       