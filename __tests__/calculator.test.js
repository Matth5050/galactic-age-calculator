import Calculator from '../src/js/calculator';

describe('Calculator', () => {

  let reusablePerson;

  beforeEach(() => {
    reusablePerson = new Calculator(26, 'male');
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
    expect(reusablePerson.marsAge).toBeCloseTo(13.82, 1);
  });

  test('should return the users age in Jupiter years (input / 11.86)', () => {
    reusablePerson.jupCalc();
    expect(reusablePerson.jupAge).toBeCloseTo(2.19, 1);
  });

  test('should return the amount of time left to live on each planet based on male gender (70.8yrs)', () => {
    reusablePerson.mercCalc();
    reusablePerson.venusCalc();
    reusablePerson.marsCalc();
    reusablePerson.jupCalc();
    reusablePerson.yearsLeftMale();
    expect(reusablePerson.mercuryYearsLeft).toBeCloseTo(70.8 - reusablePerson.mercuryAge, 1);
    expect(reusablePerson.venusYearsLeft).toBeCloseTo(70.8 - reusablePerson.venusAge, 1);
    expect(reusablePerson.marsYearsLeft).toBeCloseTo(70.8 - reusablePerson.marsAge, 1);
    expect(reusablePerson.jupYearsLeft).toBeCloseTo(70.8 - reusablePerson.jupAge, 1);
  });

  test('should return the amount of time left to live on each planet based on female gender (75.6yrs)', () => {
    reusablePerson.mercCalc();
    reusablePerson.venusCalc();
    reusablePerson.marsCalc();
    reusablePerson.jupCalc();
    reusablePerson.yearsLeftFemale();
    expect(reusablePerson.mercuryYearsLeft).toBeCloseTo(75.6 - reusablePerson.mercuryAge, 1);
    expect(reusablePerson.venusYearsLeft).toBeCloseTo(75.6 - reusablePerson.venusAge, 1);
    expect(reusablePerson.marsYearsLeft).toBeCloseTo(75.6 - reusablePerson.marsAge, 1);
    expect(reusablePerson.jupYearsLeft).toBeCloseTo(75.6 - reusablePerson.jupAge, 1);
  });

});
