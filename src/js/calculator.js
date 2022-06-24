export default class Calculator {
    constructor(input) {
      this.usersAge = input;
      this.mercuryAge = 0;
      this.venusAge = 0;
      this.marsAge = 0;
      this.jupAge = 0;
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

  }


 