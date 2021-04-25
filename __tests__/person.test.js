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

  test ('it should return the life expectance in number of years on mercury', () => {
    expect(person1.mercuryLifeLeft(416)).toEqual("You have lived " + 83 + " years longer than you should have.");
  });
  test ('it should return the life expectance in number of years on mercury', () => {
    expect(person1.mercuryLifeLeft(100)).toEqual("You WILL die in " + 233 + " years.");
  });
  test ('it should return the life expectance in number of years on Venus', () => {
    expect(person1.venusLifeLeft(229)).toEqual("You have lived " + 100 + " years longer than you should have.");
  });
  test ('it should return the life expectance in number of years on mercury', () => {
    expect(person1.venusLifeLeft(100)).toEqual("You WILL die in " + 29 + " years.");
  });
  
});