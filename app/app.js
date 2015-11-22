app = angular.module('mathApp', ['chart.js']);

app.controller('LineCtrl', function ($scope) {

    $scope.qntPontos = 2;

    $scope.resultado = 0;

    $scope.status = false;
    
    //arrays para salvar valores dos pontos inseridos
    $scope.x = [];
    $scope.fx = [];

    $scope.lg = [];
    $scope.steps = [];
    
    $scope.xInt = 0;
    
    $scope.chartOpts = {
        scaleFontSize: 12,
        tooltipTemplate: "<%if (label){%>(<%=label%>,<%}%><%= value%>)",
    }

    $scope.chartLabels = $scope.x;
    $scope.chartSeries = ['Função F(X)'];
    $scope.chartData = [$scope.fx];

    //funcao para realizar a interpolacao, chamara outra funcao de acordo 
    //com a quantidade de pontos
    $scope.calcular = function(){
    	$scope.steps = []
    	$scope.status = true;
		$scope.resultado = $scope.lagrange();
		$scope.gerarGrafico();
		$scope.status = false;
    }
    
    //funcao para atualizar os dados do gráfico
    $scope.gerarGrafico = function(){
	  	$scope.chartLabels = $scope.x;
        $scope.chartData = [$scope.fx];
    }
    
    //funcao para limpar array de qntade de pontos ao mudar a quantidade
    $scope.mudarQuantPontos = function(){
       
        if (!$scope.qntPontos)
             $scope.qntPontos = 2;
        
        //limpar array
        $scope.x = [];
        $scope.fx = [];
        
        for (var i = 0; i < $scope.qntPontos; i++){
            $scope.x.push(0);
            $scope.fx.push(0);
        }
        
        $scope.gerarGrafico();
    }	


    $scope.lagrange = function(){
    	var numerador = 1;
    	var denominador = 1;
    	var result = 0;

    	for (var i = 0; i < $scope.x.length; i++){
    		for (var j = 0; j < $scope.x.length; j++){
    			if (j != i){
    				
    				numerador = (numerador * ($scope.xInt - $scope.x[j]));
    				denominador = (denominador * ($scope.x[i] - $scope.x[j]));
    			}	
    		}


    		$scope.lg[i] = numerador/denominador;

    		$scope.steps.push(
    			{	name: 'Calculando L('+i+'):', 
    				num:numerador, 
    				den:denominador,
    				res:numerador/denominador})
    		
    		numerador = 1;
	    	denominador = 1;
    	}

    	for (var i = 0; i < $scope.lg.length; i++){

    		result = (result + ($scope.fx[i] * $scope.lg[i]));
    	}
    	
    	/*console.log("-------")
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

		console.log('resultado manual')
    	console.log(resultado)*/
    					
    	return result;
    }
    
    //funcao para gerar um array responsavel por criar os inputs de acordo
    //com a quantidade de pontos inseridos
    $scope.range = function(){
        var arratQntPontos = [];
        var qnt = $scope.qntPontos;
        
        for (var i = 0; i < qnt; i++) { 
            arratQntPontos.push(i) 
        } 
        return arratQntPontos;
    }


});

