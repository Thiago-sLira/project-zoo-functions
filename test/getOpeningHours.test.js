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
  it('Verifica se retorna um erro se passado horário errado', () => {
    expect(() => getOpeningHours('monday', '11:00-MA')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
});
