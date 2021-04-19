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
  lifeLeft(outputAge, planetMultiplier) {
    console.log("lifeEXPECT:", this.lifeExpect);
    let planetExpect = parseInt(this.lifeExpect / planetMultiplier);
    console.log("planetex" , planetExpect);
    let yearsLeft = (planetExpect - outputAge);
    return yearsLeft;
  }
}