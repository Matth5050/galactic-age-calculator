import Calculator from '../src/js/calculator';

describe('Calculator', () => {

  // beforeEach(() => {
  //   rectangle = new Rectangle(3,5);
  // });

  test('should return the users age in Mercury years (input/.24)', () => {
    let testPerson = new Calculator(26)
    expect(testPerson.mercuryAge).toBeCloseTo(108.33);
  });

});
