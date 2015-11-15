app = angular.module('mathApp', ['chart.js']);

app.controller('LineCtrl', function ($scope) {
	$scope.values = ["Dois Pontos (2)","Três Pontos (3)","Quatro Pontos (4)"];
    $scope.selectedItem = 0;

	$scope.quantPontos = '2';
	$scope.x1 = 0;
	$scope.x2 = 0;
	$scope.y1 = 0;
	$scope.y2 = 0;
	$scope.x3 = 0;
	$scope.y3 = 0;
	$scope.x4 = 0;
	$scope.y4 = 0;

  $scope.labels = [$scope.x1, $scope.x2, $scope.x3, $scope.x4];
  $scope.series = ['Função F(X)'];
  $scope.data = [
	    [$scope.y1, $scope.y2, $scope.y3, $scope.y4]
	  ];

	  $scope.calcular = function(){
	  	console.log($scope.labels);
	  	 $scope.labels = [$scope.x1, $scope.x2, $scope.x3, $scope.x4];
		  $scope.data = [
			    [$scope.y1, $scope.y2, $scope.y3, $scope.y4]
			  ];
	  }
});
       