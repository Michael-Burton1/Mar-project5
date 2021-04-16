export default class Person {

  constructor (earthAge, outputAge) {
    this.earthAge = earthAge;
    this.outputAge = outputAge;
    this.lifeExpect = 200;
  }
  
  planetCalc(planetMultiplier) { 
    this.outputAge = parseInt(this.earthAge / planetMultiplier);
    return this.outputAge;
  }
  lifeLeft(this.outputAge, planetMultiplier) {
    let planetExpect = parseInt(this.lifeExpect / planetMultiplier);
    let yearsLeft = planetExpect - this.outputAge;
    return yearsLeft;
  }
}