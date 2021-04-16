export default class Person {

  constructor (earthAge, outputAge, mercuryAge, venusAge, marsAge, jupiterAge, lifeExpect) {
    this.earthAge = earthAge;
    this.outputAge = outputAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.lifeExpect = 80;
  }
  
  planetCalc(planetMultiplier) { 
    this.outputAge = parseInt(this.earthAge / planetMultiplier);
    return this.outputAge;
  }
}