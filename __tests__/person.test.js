import Person from '../src/js/person';

describe('Person', () => {
  let person1;

  beforeEach(() =>{
    person1 = new Person(100, 416);
  });

  test ('it should take the users inputted earth age and calculate their mercury age' , () => {
    let planetMultiplier = .24
    expect(person1.planetCalc(planetMultiplier)).toEqual(416);
  });

  test ('it should take the users inputted earth age and calculate their venus age' , () => {
    let planetMultiplier = .62
    expect(person1.planetCalc(planetMultiplier)).toEqual(161);
  });

  test ('it should take the users inputted earth age and calculate their mars age' , () => {
    let planetMultiplier = 1.88
    expect(person1.planetCalc(planetMultiplier)).toEqual(53);
  });
  test ('it should take the users inputted earth age and calculate their jupiter age' , () => {
    let planetMultiplier = 11.86
    expect(person1.planetCalc(planetMultiplier)).toEqual(8);
  });

  // test ('it should return the life expectance in number of years on a planet', () => {
  //   let planetMultiplier = .24
  //   expect(person1.lifeLeft(planetMultiplier)).toEqual(833);
  // });
  test ('it should take in the number of the user age on the planet calculated by planetCalc() and subtract it from the life expectancy of that planet' , () =>{
    let planetMultiplier = .24;
    let outputAge = 416;
    expect(person1.lifeLeft(outputAge,planetMultiplier)).toEqual(417);
  });
});