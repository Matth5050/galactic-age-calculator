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
    const personMale = new Calculator(26, 'male');
    personMale.mercCalc();
    personMale.venusCalc();
    personMale.marsCalc();
    personMale.jupCalc();
    personMale.yearsLeft();
    expect(personMale.mercuryYearsLeft).toBeCloseTo(70.8 - personMale.mercuryAge, 1);
    expect(personMale.venusYearsLeft).toBeCloseTo(70.8 - personMale.venusAge, 1);
    expect(personMale.marsYearsLeft).toBeCloseTo(70.8 - personMale.marsAge, 1);
    expect(personMale.jupYearsLeft).toBeCloseTo(70.8 - personMale.jupAge, 1);
  });

  test('should return the amount of time left to live on each planet based on female gender (75.6yrs)', () => {
    const personFemale = new Calculator(26, 'female');
    personFemale.mercCalc();
    personFemale.venusCalc();
    personFemale.marsCalc();
    personFemale.jupCalc();
    personFemale.yearsLeft();
    expect(personFemale.mercuryYearsLeft).toBeCloseTo(75.6 - personFemale.mercuryAge, 1);
    expect(personFemale.venusYearsLeft).toBeCloseTo(75.6 - personFemale.venusAge, 1);
    expect(personFemale.marsYearsLeft).toBeCloseTo(75.6 - personFemale.marsAge, 1);
    expect(personFemale.jupYearsLeft).toBeCloseTo(75.6 - personFemale.jupAge, 1);
  });

  test('should determine if user has surpassed the the avg life expectancy and retrun appropriate response', () => {
    const personMale = new Calculator(26, 'male');
    personMale.mercCalc();
    personMale.yearsLeft()
    expect(personMale.determineAgeSpan(-5,'negitive','')).toEqual('negitive');
  });

  test('should determine if user has NOT surpassed the the avg life expectancy and retrun appropriate response', () => {
    const personMale = new Calculator(6, 'male');
    personMale.mercCalc();
    personMale.yearsLeft()
    expect(personMale.determineAgeSpan(6,'','positive')).toEqual('positive');
  });
});
