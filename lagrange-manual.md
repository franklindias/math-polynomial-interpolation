## Calculo de lagrange manual, com 4 pontos

```javascript

		var l0 = 	(($scope.xInt - $scope.x[1]) * ($scope.xInt - $scope.x[2])* ($scope.xInt - $scope.x[3])) / 
					(($scope.x[0] - $scope.x[1]) * ($scope.x[0] - $scope.x[2])* ($scope.x[0] - $scope.x[3]));
		console.log(l0)
		var l1 = 	(($scope.xInt - $scope.x[0]) * ($scope.xInt - $scope.x[2])* ($scope.xInt - $scope.x[3])) / 
					(($scope.x[1] - $scope.x[0]) * ($scope.x[1] - $scope.x[2])* ($scope.x[1] - $scope.x[3]));
		console.log(l1)
		var l2 = 	(($scope.xInt - $scope.x[0]) * ($scope.xInt - $scope.x[1])* ($scope.xInt - $scope.x[3])) / 
					(($scope.x[2] - $scope.x[0]) * ($scope.x[2] - $scope.x[1])* ($scope.x[2] - $scope.x[3]));
		console.log(l2)
		var l3 = 	(($scope.xInt - $scope.x[0]) * ($scope.xInt - $scope.x[1])* ($scope.xInt - $scope.x[2])) / 
					(($scope.x[3] - $scope.x[0]) * ($scope.x[3] - $scope.x[1])* ($scope.x[3] - $scope.x[2]));
		console.log(l3)

		var resultado = ($scope.fx[0] * l0) + 
						($scope.fx[1] * l1) + 
						($scope.fx[2] * l2) + 
						($scope.fx[3] * l3);

		console.log(resultado)
		
```