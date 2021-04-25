
export default class Person {

  constructor (earthAge, outputAge, lifeExpect, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.outputAge = outputAge;
    this.lifeExpect = 200;
    this.mercuryAge =mercuryAge;
    this.venusAge= venusAge;
    this.marsAge= marsAge;
    this.jupiterAge= jupiterAge; 
  }

  mercuryCalc() {
    this.mercuryAge = parseInt(this.earthAge / .24);
    return this.mercuryAge;
  }
  venusCalc() {
    this.venusAge =parseInt(this.earthAge / .62);
    return this.venusAge;
  }
  marsCalc() {
    this.marsAge =parseInt(this.earthAge / 1.88);
    return this.marsAge;
  }
  jupiterCalc() {
    this.jupiterAge =parseInt(this.earthAge / 11.86);
    return this.jupiterAge;
  }

  planetCalc(planetMultiplier) { 
    this.outputAge = parseInt(this.earthAge / planetMultiplier);
    return this.outputAge;
  }
  lifeLeft(outputAge, planetMultiplier) {
    let planetExpect = parseInt(this.lifeExpect / planetMultiplier);
    let yearsLeft = (planetExpect - outputAge);
    return yearsLeft;
  }
}