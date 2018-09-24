// declare variables needed
var wins = 0;
var losses = 0;
var button1 = "";
var button2 = "";
var button3 = "";
var button4 = "";
var totalScore = 0;

// computer generates a random number and places in randomNumber div
$(document).ready(function() {
var random = Math.floor(Math.random() * 101) + 19;
$("#randomNumber").append(random);
console.log(random);

// Add random values to all 4 buttons
button1 = Math.floor(Math.random() * 12) + 1;
// $("#btn1").val(button1);
button2 = Math.floor(Math.random() * 12) + 1;
// $("#btn2").val(button1);
button3 = Math.floor(Math.random() * 12) + 1;
//$("#btn3").val(button1);
button4 = Math.floor(Math.random() * 12) + 1;
//$("#btn4").val(button1);
console.log(button1, button2, button3, button4);

 // reset game function 
    let reset = function() {
    random = Math.floor(Math.random()*101) +19;
    $('#randomNumber').text(random);
    button1 = Math.floor(Math.random() *12) +1;
    button2 = Math.floor(Math.random() *12) +1;
    button3 = Math.floor(Math.random() *12) +1;
    button4 = Math.floor(Math.random() *12) +1;
    totalScore= 0;
    $("#totalScore").text(totalScore);
    };
 

// create a function to add the button values into var totalScore ??
$("#btn1").on("click", function () {
totalScore = button1 + totalScore;
console.log("total score= " + totalScore);
if (totalScore === random){
    // wins++;
    $("#wins").text(++wins);
    reset();
} else if (totalScore > random) {
    // losses++;
    $("#losses").text(++losses );
    reset();
}

});

$("#btn2").on("click", function () {
    totalScore = button2 + totalScore;
    console.log("total score= " + totalScore);
    if (totalScore === random){
        // wins++;
        $("#wins").text(++wins);
        reset();
    }  else if (totalScore > random) {
        // losses++;
        $("#losses").text(++losses);
        reset();
    }
    });

$("#btn3").on("click", function () {
     totalScore =  button3 + totalScore;
     console.log("total score= " + totalScore);
     if (totalScore === random){
        // wins++;
        $("#wins").text(++wins);
        reset();
    }  else if (totalScore > random) {
        // losses++;
        $("#losses").text(++losses);
        reset();
    }
     });

$("#btn4").on("click", function () {
     totalScore =  button4 + totalScore;
     console.log("total score= " + totalScore);
     if (totalScore === random){
        // wins++;
        $("#wins").text(++wins);        
        reset();
    }  else if (totalScore > random) {
        // losses++;
        console.log("you lose");
        console.log("losses");
        $("#losses").text(++losses);        
        reset();
    }
    });

// add function to add button values to totalScore div when clicked

$(".btn").on("click", function () {    
   $("#totalScore").text(totalScore);
});



$("#accordionExample").on("click", function() {
    console.log("click");
    this.style.width = "100%";       
})



});
