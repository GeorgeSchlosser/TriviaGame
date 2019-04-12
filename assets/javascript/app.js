/*PSUEDOCODE:
when start button pressed > change DOM to display questions & answers and start timer;
user selects answers
quiz ends when user presses submit || timer === 0;
when game ends > compare user answer w/ correct answer, change DOM
    if answer === correct answer > correct++
    else incorrect++
    if question not answered > unanswered++
*/

// VARIABLES
// ===================================
var gameStart = false;
var gameEnd = false;
var timer = 30;
var questions = [];
var correct = 0;
var incorrect = 0;
var unanswered = 0;




// FUNCTIONS
// ===================================
// function startGame(){
//     $("#game").removeClass("hidden");
//     $("#pre").addClass("hidden");
// };
$("#start-btn").on("click", function(){
    $("#game").removeClass("hidden");
    $("#pre").addClass("hidden");
});

$("#submit-btn").on("click", function(){
    $("#game").addClass("hidden");
    $("#post").removeClass("hidden");
    // score calculation

});


// MAIN FUNCTIONS
// ===================================
// when start is pressed gameStart = true;
    // if gameStart = true display timer and questions
// $(document).ready(pregame ());
// $("#start-btn").on("click", startGame());



 

