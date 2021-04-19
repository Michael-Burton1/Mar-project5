import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Person from './person.js';

$(document).ready(function() {
  let person1 = new Person();
  let planetMultiplier = 1;
  $("#ageForm").submit(function(event){
    event.preventDefault();
    let input = parseInt($(".form-control").val());
    person1.earthAge = input;
    $("#ageForm").hide();
    $(".life").show();
    $(".death").show();
  });

  $("#mercuryLife").click(function(){
    planetMultiplier= .24;
    person1.planetCalc(planetMultiplier);
    $("#yearsOld").text(person1.planetCalc(planetMultiplier));
    console.log(person1);
    
    
  });

  $("#venusLife").click(function(){
    planetMultiplier= .62;
    person1.planetCalc(planetMultiplier);
    $("#yearsOld").text(person1.planetCalc(planetMultiplier));
  });
  $("#marsLife").click(function(){
    let planetMultiplier= 1.88;
    person1.planetCalc(planetMultiplier);
    $("#yearsOld").text(person1.planetCalc(planetMultiplier));
  });
  $("#jupiterLife").click(function(){
    let planetMultiplier= 11.86;
    person1.planetCalc(planetMultiplier);
    $("#yearsOld").text(person1.planetCalc(planetMultiplier));
  });
  $("#mercuryDeath").click(function(){
    planetMultiplier= .24;
    person1.planetCalc(planetMultiplier);
    let personOutputAge = person1.outputAge
    console.log("personage: ", personOutputAge);
    let lifeLeftResult = person1.lifeLeft(personOutputAge,planetMultiplier);
    if (lifeLeftResult < 0) {
      $("#deadSoon").text("Congdatulations, You have lived " + Math.abs(lifeLeftResult) + " years over the age Expectancy for this planet! You'll probably outlive us all!");
    } else {
      $("#deadSoon").text("According to the facts you a due to die in " +lifeLeftResult + " years.");
      console.log(person1);
    } 
  });

});
