import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Person from './person.js';

$(document).ready(function() {
  let person1 = new Person(0, 0, 200);
  $("#ageForm").submit(function(event){
    event.preventDefault();
    let input = parseInt($(".form-control").val());
    console.log(input);
    person1.earthAge = input;
    $("#ageForm").hide();
    $(".life").show();
    $(".death").show();
  });
  $("#mercuryLife").click(function(){
    let planetMultiplier= .24;
    console.log(person1);
    person1.planetCalc(planetMultiplier);
    $("#yearsOld").text("If you lived here, this is how many years old you would be:  " + person1.planetCalc(planetMultiplier));
  });
  $("#venusLife").click(function(){
    let planetMultiplier= .62
    person1.planetCalc(planetMultiplier);
    $("#yearsOld").text("If you lived here, this is how many years old you would be:  " + person1.planetCalc(planetMultiplier));
  });
  $("#marsLife").click(function(){
    let planetMultiplier= 1.88
    person1.planetCalc(planetMultiplier);
    $("#yearsOld").text("If you lived here, this is how many years old you would be:  " + person1.planetCalc(planetMultiplier));
  });
  $("#jupiterLife").click(function(){
    let planetMultiplier= 11.86
    person1.planetCalc(planetMultiplier);
    $("#yearsOld").text("If you lived here, this is how many years old you would be:  " + person1.planetCalc(planetMultiplier));
  });

});
