export default class Person {

  constructor (earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  mercuryCalc() {
    this.mercuryAge = parseInt(this.earthAge /.24);
    return this.mercuryAge;
  }

  venusCalc() {
    this.venusAge = parseInt(this.earthAge / .62);
    return this.venusAge;
  }

  marsCalc() {
    this.marsAge = parseInt(this.earthAge / 1.88);
    return this.marsAge;
  }
  JupiterCalc() {
    
  }
}