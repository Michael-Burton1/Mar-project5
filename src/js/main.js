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
    $("#yearsOld").text(person1.planetCalc(planetMultiplier));
  });
  $("#venusLife").click(function(){
    let planetMultiplier= .62
    this.person.planetCalc(planetMultiplier);
  });
  $("#marsLife").click(function(){
    let planetMultiplier= 1.88
    this.person.planetCalc(planetMultiplier);
  });
  $("#jupiterLife").click(function(){
    let planetMultiplier= 11.86
    this.person.planetCalc(planetMultiplier);
  });

});
