export default class Person {

  constructor (earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  mercuryCalc() {
    this.mercuryAge = this.earthAge *.24;
    return this.mercuryAge;
  }

  venusCalc() {

  }

  marsCalc() {

  }
  JupiterCalc() {
    
  }
}