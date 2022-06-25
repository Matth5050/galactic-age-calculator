export default class Calculator {
    constructor(age,gender) {
      this.usersAge = age;
      this.gender = gender
      this.mercuryAge = 0;
      this.venusAge = 0;
      this.marsAge = 0;
      this.jupAge = 0;
      this.mercuryYearsLeft = 0;
      this.venusYearsLeft = 0;
      this.marsYearsLeft = 0;
      this.jupYearsLeft = 0;
    }

    mercCalc() {
      this.mercuryAge = this.usersAge/(.24);
    }

    venusCalc() {
      this.venusAge = this.usersAge/(.62);
    }

    marsCalc() {
      this.marsAge = this.usersAge/(1.88);
    }

    jupCalc() {
      this.jupAge = this.usersAge/(11.86);
    }

    yearsLeft() {
      if (this.gender === 'male') {
      this.mercuryYearsLeft = (70.8 - this.mercuryAge);
      this.venusYearsLeft = (70.8 - this.venusAge);
      this.marsYearsLeft = (70.8 - this.marsAge);
      this.jupYearsLeft = (70.8 - this.jupAge);
      } else {
      this.mercuryYearsLeft = (75.6 - this.mercuryAge);
      this.venusYearsLeft = (75.6 - this.venusAge);
      this.marsYearsLeft = (75.6 - this.marsAge);
      this.jupYearsLeft = (75.6 - this.jupAge);
      console.log('test');
    }
  }

  determineAgeSpan(objectInput,negitiveOut,posOut) {
    if (Math.sign(objectInput) === -1) {
      return negitiveOut;
    } else {
      return posOut;
    }
  }
  
}

 