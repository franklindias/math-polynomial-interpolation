#### Função de Lagrange Genérica

 ```javascript
 $scope.lagrange = function(){
    var numerador = 1;
    var denominador = 1;
    var result = 0;
		$scope.steps = []
		
    for (var i = 0; i < $scope.x.length; i++){
    		for (var j = 0; j < $scope.x.length; j++){
    			if (j != i){
	    			numerador = (numerador * ($scope.xInt - $scope.x[j]));
	    			denominador = (denominador * ($scope.x[i] - $scope.x[j]));
        	}	
        }

    		$scope.lg[i] = numerador/denominador;
    		
			//reiniciando numerador e denominador para o proximo L(n)
    		numerador = 1;
	    	denominador = 1;
    }

    	for (var i = 0; i < $scope.lg.length; i++){
    		result = (result + ($scope.fx[i] * $scope.lg[i]));
    	}
    	return result;
}
