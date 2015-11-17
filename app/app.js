app = angular.module('mathApp', ['chart.js']);

app.controller('LineCtrl', function ($scope) {

    $scope.qntPontos = 2;
    
    //arrays para salvar valores dos pontos inseridos
    $scope.x = [];
    $scope.fx = [];

    $scope.labels = $scope.x;
    $scope.series = ['Função F(X)'];
    $scope.data = [$scope.fx];

    //funcao para realizar a interpolacao, chamara outra funcao de acordo 
    //com a quantidade de pontos
    $scope.calcular = function(){
	 $scope.gerarGrafico();
    }
    
    //funcao para atualizar os dados do gráfico
    $scope.gerarGrafico = function(){
            console.log('funcao gerarGrafico()');
            console.log('---------------------');
            console.log();
            console.log($scope.x);
            console.log($scope.fx);
            console.log('---------------------');
	  	$scope.labels = $scope.x;
        $scope.data = [$scope.fx];
    }
    
    //funcao para limpar array de qntade de pontos ao mudar a quantidade
    $scope.mudarQuantPontos = function(){
            console.log('funcao mudarQuantPontos()');
            console.log('---------------------');
            console.log($scope.qntPontos);
            console.log('---------------------');
       
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

