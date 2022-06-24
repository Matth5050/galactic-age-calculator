import Calculator from '../src/js/calculator';

describe('Calculator', () => {
  
  let reusablePerson;

  beforeEach(() => {
    reusablePerson = new Calculator(26);
  });

  test('should return the users age in Mercury years (input / .24)', () => {
    reusablePerson.mercCalc();
    expect(reusablePerson.mercuryAge).toBeCloseTo(108.33);
  });

  test('should return the users age in Venus years (input / .62)', () => {
    reusablePerson.venusCalc();
    expect(reusablePerson.venusAge).toBeCloseTo(41.93,1);
  });

  test('should return the users age in Mars years (input / 1.88)', () => {
    reusablePerson.marsCalc();
    expect(reusablePerson.marsAge).toBeCloseTo(13.8, 1);
  });


});
