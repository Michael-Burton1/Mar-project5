import Person from '../src/js/person';

describe('Person', () => {
  let person1;

  beforeEach(() =>{
    person1 = new Person(100);
  });
  
  test ('it should take be able to assign key values for the person constructor', () =>{
    expect(person1.earthAge).toEqual(100);
  });
  test ('it should take the users inputted earth age and calculate their mercury age' , () => {
      expect(person1.mercuryCalc()).toEqual(416);
  });
  test ('it should take the users inputted earth age and calculate their venus age' , () => {
    expect(person1.venusCalc()).toEqual(161);
  
  });

  test ('it should take the users inputted earth age and calculate their mars age' , () => {
    expect(person1.marsCalc()).toEqual(53);
  });
  test ('it should take the users inputted earth age and calculate their jupiter age' , () => {
    expect(person1.jupiterCalc()).toEqual(8);
  });

  // test ('it should return the life expectance in number of years on a planet', () => {
  //   let planetMultiplier = .24
  //   expect(person1.lifeLeft(planetMultiplier)).toEqual(833);
  // });
  // test ('it should take in the number of the user age on the planet calculated by planetCalc() and subtract it from the life expectancy of that planet' , () =>{
  //   let planetMultiplier = .24;
  //   let outputAge = 416;
  //   expect(person1.lifeLeft(outputAge,planetMultiplier)).toEqual(417);
  // });
});