app = angular.module('mathApp', ['chart.js']);

app.controller('LineCtrl', function ($scope) {

    $scope.qntPontos = 2;

    $scope.x = [];
    $scope.fx = [];

    $scope.labels = $scope.x;
    $scope.series = ['Função F(X)'];
    $scope.data = [
	    $scope.fx
	  ];

    $scope.calcular = function(){
	 $scope.gerarGrafico();

    }
    
    $scope.gerarGrafico = function(){
        console.log('funcao gerarGrafico()');
        console.log('---------------------');
        console.log();
        console.log($scope.x);
        console.log($scope.fx);
	  	$scope.labels = $scope.x;
        $scope.data = [
			    $scope.fx
			  ];
    }
    
    $scope.range = function(){
        var arratQntPontos = [];
        var qnt = $scope.qntPontos;
        
        for (var i = 0; i < qnt; i++) { 
            arratQntPontos.push(i) 
        } 
        return arratQntPontos;
    }

});

