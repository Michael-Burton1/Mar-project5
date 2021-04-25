
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
  mercuryLifeLeft(mercuryAge) {
    let mercuryOutput= 333 - mercuryAge; 
    if (mercuryOutput < 0) {
      let mercuryResult = "You have lived " + Math.abs(mercuryOutput) + " years longer than you should have." ;
      return mercuryResult;
    } else{
      let mercuryResult = "You WILL die in " + mercuryOutput + " years." ;
      return mercuryResult;
    }
  }
  venusLifeLeft(venusAge) {
    let venusOutput= 129 - venusAge; 
    if (venusOutput < 0) {
      let venusResult = "You have lived " + Math.abs(venusOutput) + " years longer than you should have." ;
      return venusResult;
    } else{
      let venusResult = "You WILL die in " + venusOutput + " years." ;
      return venusResult;
    }
  }
  marsLifeLeft(marsAge) {
    let marsOutput= 42 - marsAge; 
    if (marsOutput < 0) {
      let marsResult = "You have lived " + Math.abs(marsOutput) + " years longer than you should have." ;
      return marsResult;
    } else{
      let marsResult = "You WILL die in " + marsOutput + " years." ;
      return marsResult;
    }
  }  
  jupiterLifeLeft(jupiterAge) {
    
  }
}