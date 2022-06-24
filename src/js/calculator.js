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
      this.mercuryYearsLeft = Math.abs(70.8 - this.mercuryAge);
      this.venusYearsLeft = Math.abs(70.8 - this.venusAge);
      this.marsYearsLeft = Math.abs(70.8 - this.marsAge);
      this.jupYearsLeft = Math.abs(70.8 - this.jupAge);
      } else {
      this.mercuryYearsLeft = Math.abs(75.6 - this.mercuryAge);
      this.venusYearsLeft = Math.abs(75.6 - this.venusAge);
      this.marsYearsLeft = Math.abs(75.6 - this.marsAge);
      this.jupYearsLeft = Math.abs(75.6 - this.jupAge);
    }
  }
  
}

 