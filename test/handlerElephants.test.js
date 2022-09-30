const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se retorna undefined', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });
  it('Verifica se retorna "Parâmetro inválido, é necessário uma string" caso receba algo diferente de string', () => {
    expect(handlerElephants(8)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(true)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se retorna localização, população e disponibilidade dos elefantes', () => {
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verifica se retorna um array com os nomes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Verifica se retorna nulo com uma string fora da lista de argumentos', () => {
    expect(handlerElephants('average')).toBeNull();
  });
});
