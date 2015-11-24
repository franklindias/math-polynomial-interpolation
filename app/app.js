app = angular.module('mathApp', ['chart.js']);

app.controller('LineCtrl', function ($scope) {
	//define a quantidade de pontos que o usuário já possui
    $scope.qntPontos = 2;
	
	//ponto X o qual o usuário deseja obter resultado
    $scope.xInt = 0;
	
	//armazena o valor final do resultado baseado no algoritmo de lagrange
    $scope.resultado = 0;
	
	//define a situção atual, se está calculando ou aguardando pontos
    $scope.status = false;
    
    //arrays para salvar valores dos pontos inseridos
    $scope.x = [];
    $scope.fx = [];

	//array para guardar os calculos de lagrange por cada ponto
    $scope.lg = [];
	
	//array para armazenar o passo a passo do calculo de lagrange
    $scope.steps = [];
	
	//variavel de controle de erros
	$scope.erro = null
    
	//configuraçoes adicionais do gráfico
    $scope.chartOpts = {
        scaleFontSize: 12,
        tooltipTemplate: "<%if (label){%>(<%=label%>,<%}%><%= value%>)",
    }

    $scope.chartLabels = $scope.x;
    $scope.chartSeries = ['Função F(X)'];
    $scope.chartData = [$scope.fx];

    //funcao para realizar o calculo de interpolacao, 
	//e outros detalhes referentes ao calculo
    $scope.calcular = function(){
		var verifica = $scope.verificaPontos();
		if (!verifica){
			$scope.steps = []
			$scope.status = true;
			$scope.resultado = $scope.lagrange();
			$scope.gerarGrafico();
			$scope.status = false;
		}else{
			
		}
    }
	
	//funcao para marcar nos inputs caso ele esteja repetido
	$scope.pontosRepetidos = function(){
		
	}
    
    //funcao para atualizar os dados do gráfico
    $scope.gerarGrafico = function(){
	  	$scope.chartLabels = $scope.x;
        $scope.chartData = [$scope.fx];
    }
    
    //funcao para limpar array de ponts ao mudar a quantidade 
	//de pontos 
    $scope.mudarQuantPontos = function(){
       
		$scope.steps = [];
		$scope.resultado = 0;
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

	//algoritmo de lagrange
    $scope.lagrange = function(){
    	var numerador = 1;
    	var denominador = 1;
    	var result = 0;
		$scope.steps = []
		
    	for (var i = 0; i < $scope.x.length; i++){
    		console.log("------------------INICIO FOR 1(UM)----------------");
    		for (var j = 0; j < $scope.x.length; j++){
    			if (j != i){
    				console.log("------------------INICIO FOR 2(DOIS)----------------");
    				numerador = (numerador * ($scope.xInt - $scope.x[j]));
    				denominador = (denominador * ($scope.x[i] - $scope.x[j]));
    				
    				console.log("i --> "+i);
    				console.log("j --> "+j);
    				console.log("Xi("+i+") --> "+$scope.x[i]);
    				console.log("Xj("+j+") --> "+$scope.x[j]);
    				console.log("numerador --> "+numerador);
    				console.log("denominador --> "+denominador);
    				
    				console.log("----------------FIM FOR 2(DOIS)------------------");
    			}
    		}
    		
    		$scope.lg[i] = numerador/denominador;
    		console.log("----------------FIM FOR 1(UM)------------------");
    		console.log("lg("+i+")  -> "+$scope.lg[i]);

    		$scope.steps.push(
    			{	name: 'Calculando L'+i+'(X):', 
    				step: numerador+'/'+denominador+' = '+$scope.lg[i]})
    		
			//reiniciando numerador e denominador para o proximo L(n)
    		numerador = 1;
	    	denominador = 1;
    	}

    	for (var i = 0; i < $scope.lg.length; i++){
			
			$scope.steps.push(
    			{	name: 'Multiplicando L'+i+'(X) com FX('+i+'):', 
    				step: $scope.lg[i]+'*'+$scope.fx[i]+' = '+$scope.fx[i] * $scope.lg[i]})
				result = (result + ($scope.fx[i] * $scope.lg[i]));
    	}
		
		var somas = '';
		
		for (var i = 0; i < $scope.lg.length; i++){
			if (i == $scope.lg.length-1)
				somas = ($scope.lg[i]*$scope.fx[i])+'+'+somas;
			else
				somas = ($scope.lg[i]*$scope.fx[i])+''+somas;
    	}
			$scope.steps.push(
    			{	name: 'Somando todos os Ln(X):', 
    				step: somas+'='+result})
    					
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
	
	//funcao para verificar se existem pontos repetidos na lista de pontos inseridos
	$scope.verificaPontos = function(){
		for (var i = 0; i < $scope.x.length; i++){
    		for (var j = 0; j < $scope.x.length; j++){
				if (($scope.x[i] == $scope.x[j]) && (i!=j)){
					$scope.erro = 'Os pontos X('+i+') e X('+j+') estão se repetindo!';
					$scope.steps = []
					return [i,j];
				}
    		}	
    	}
		$scope.erro = null;
		return null;
    }

});

