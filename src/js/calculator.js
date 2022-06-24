export default class Calculator {
    constructor(input) {
      this.usersAge = input;
      this.mercuryAge = 0;
      this.venusAge = 0;
    }

    mercCalc() {
      this.mercuryAge = this.usersAge/(.24);
    }

    venusCalc() {
      this.venusAge = this.usersAge/(.62);
    }

  }


 