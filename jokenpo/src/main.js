module.exports= {

  calcula: function(Jogador1,Jogador2){
    return this.calculaEPedra(Jogador1,Jogador2);
    if(Jogador1==='Papel' && Jogador2==='Pedra'){
      return 'Jogador 1 ganhou';
    }else{
      return 'Jogador 2 ganhou';
    }
  },

  calculaPedra: function(Jogador1,Jogador2){

    if(Jogador1 === 'Pedra' && Jogador2 === 'Tesoura' ){
      return 'Jogador 1 ganhou';
    }else{
      return 'Jogador 2 ganhou';
    }
  },
  

  calculaTesoura: function(Jogador1,Jogador2){

    if(Jogador1 === 'Tesoura' && Jogador2 === 'Papel' ){
      return 'Jogador 1 ganhou';
    }else{
      return 'Jogador 2 ganhou';
    }
  },

  calculaEPedra: function(Jogador1,Jogador2){

    if(Jogador1 === 'Pedra' && Jogador2 === 'Pedra' ){
      return 'Empate';
    }
  }


}


  
