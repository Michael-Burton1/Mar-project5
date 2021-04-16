export default class Person {

  constructor (earthAge, outputAge) {
    this.earthAge = earthAge;
    this.outputAge = outputAge;
    this.lifeExpect = 80;
  }
  
  planetCalc(planetMultiplier) { 
    this.outputAge = parseInt(this.earthAge / planetMultiplier);
    return this.outputAge;
  }
  lifeLeft(planetMultiplier) {

  }
}