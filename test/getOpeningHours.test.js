const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verifica se retorna todos os horários caso não receba um dia e horário válido', () => {
    expect(getOpeningHours(false)).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se retorna um erro se passado tipo de horário errado', () => {
    expect(() => getOpeningHours('monday', '11:00-MA')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Verifica se retorna um erro se passado a hora fora do esperado', () => {
    expect(() => getOpeningHours('monday', '13:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('Verifica se retorna um erro se passado minutos fora do esperado', () => {
    expect(() => getOpeningHours('monday', '10:60-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('Verifica se retorna um erro se passado um dia fora do esperado', () => {
    expect(() => getOpeningHours('monda', '10:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Verifica se retorna um erro se passado !number nos minutos', () => {
    expect(() => getOpeningHours('monday', '10:aa-AM')).toThrow(new Error('The minutes should represent a number'));
  });
  it('Verifica se passado um horário certo o zoo está aberto', () => {
    expect(getOpeningHours('tuesday', '10:00-AM')).toEqual('The zoo is open');
  });
  it('Verifica se passado um horário certo o zoo está fechado', () => {
    expect(getOpeningHours('monday', '10:00-AM')).toEqual('The zoo is closed');
  });
});
