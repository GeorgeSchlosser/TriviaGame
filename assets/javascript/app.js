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
var timerId;    //holds interval ID when executed
var quiz = [
    {
        question: "What creature's skeleton does C-3PO walk past on Tatoine?",
        choices: ["Wookie", "Sarlacc", "Krayt Dragon", "Bantha"],
        correct: 3
    },

    {
        question: "Few people believed in Star Wars. Which Hollywood director did?",
        choices: ["George Lucas", "Brian De Palma", "Stanley Kubrick", "Steven Spielberg"],
        correct: 4
    },

    {
        question: "In regards to the script, which actor said, 'You can type this shit, but you can't say it.'",
        choices: ["Sir Alec Guinnes", "Peter Cushing", "Carrie Fisher","Harrison Ford"],
        correct: 3
    },

    {
        question: "Which character says, 'May the Force be with you.'",
        choices: ["Han Solo", "Obi-wan Kenobi", "Princess Leia", "Luke Skywalker"],
        correct: 1
    },

    {
        question: "What is the basis of the Jawas' language?",
        choices: ["Spanish", "Zulu", "Portuguese", "Afrikanns"],
        correct: 2
    },

];
var correct = 0;
var incorrect = 0;
var unanswered = 0;




// FUNCTIONS
// ===================================
// function startGame(){
//     $("#game").removeClass("hidden");
//     $("#pre").addClass("hidden");
// };
function run() {
    timerId = setInterval(decrement, 1000);
    $("#timer").html("<h2>" + timer + "</h2>");
    // console.log(timer);
};

function stop() {
    clearInterval(timerId);
};

function decrement() {
    timer--;
    $("#timer").html("<h2>" + timer + "</h2>");
    if (timer < 0) {
        console.log(timer);
        stop();
        $("#game").addClass("hidden");
        $("#post").removeClass("hidden");
    }
};

$("#start-btn").on("click", function(){
    $("#game").removeClass("hidden");
    $("#pre").addClass("hidden");
    run();
});

$("#submit-btn").on("click", function(){
    $("#game").addClass("hidden");
    $("#post").removeClass("hidden");
    stop();
    // score calculation
});





// MAIN FUNCTIONS
// ===================================
// when start is pressed gameStart = true;
    // if gameStart = true display timer and questions
// $(document).ready(pregame ());
// $("#start-btn").on("click", startGame());



 

