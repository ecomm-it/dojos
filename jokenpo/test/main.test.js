var  jp = require('../src/main');

test ('Verificando Papel ganha de Pedra', () => {
  expect(jp.calcula('Papel','Pedra')).toBe('Jogador 1 ganhou');
});

test ('Verificando Pedra ganha de Tesoura', () => {
  expect(jp.calculaPedra('Pedra','Tesoura')).toBe('Jogador 1 ganhou');
});


test ('Verificando Tesoura ganha de Papel', () => {
  expect(jp.calculaTesoura('Tesoura','Papel')).toBe('Jogador 1 ganhou');
});

test ('Verificando empate Pedra Pedra', () => {
  expect(jp.calculaEPedra('Pedra','Pedra')).toBe('Empate');
});






