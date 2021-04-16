import Person from '../src/js/person';

describe('Person', () => {
  let person1;

  beforeEach(() =>{
    person1 = new Person(100);
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

});