import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Person from './person.js';

$(document).ready(function() {
  let person1 =new Person(100);
  console.log(person1);

  person1.mercuryCalc();
  person1.venusCalc();
  person1.marsCalc();
  person1.jupiterCalc();
  console.log(person1);
  
});