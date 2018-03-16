// Have a button that listens for a click that starts the game
$('#startButton').on('click',function(){
  $('#startButton').remove();
  gameStart.displayQuestion();
});

// WHEN GAME STARTS:
// Display 1 question from array of questions
// Display Answer options (specific to that selected question) from array

var questionsArray = [{
  question: "Who is the best at karate chops and kicks to the face?",
  options: ["Arnold", "Sly", "Bruce Lee", "Bruce Willi"],
  answer: "Bruce Lee",
  // add fun gif later on
}, {
  question: "Who's butt-kicking skills are only matched by their teaching skills?",
  options: ["Kurt Russell", "Arnold", "Jean Claude Van Damme", "Bruce Willi"],
  answer: "Arnold",
  // add fun gif later on
}, {
  question: "Who's pities the fool and/or fools?",
  options: ["Sly", "Mr. T", "Robocop", "Kurt Russell"],
  answer: "Mr. T",
  // add fun gif later on
}];

// WHEN GAME STARTS:
var gameStart = {
  // questionsArray: questionsArray,
  questionSelected: 0,
  timeLeft: 30,
  correctAnswer: 0,
  WrongAnswer: 0,

  // WHEN GAME STARTS:
  // Display 1 question from array of questions
  displayQuestion: function(){
    time = setInterval(gameStart.countdown,1000);
    $("#questionDisplay").text(questionsArray[gameStart.questionSelected].question);

    // Display Answer options (specific to the selected question) from array
    for (var i = 0; i < questionsArray[gameStart.questionSelected].options.length;i++){
      $('#answersDisplay').append('<button class="answer-button" id="button- '
      +i+ '" data-name= "'+questionsArray
      [gameStart.questionSelected].options[i]+'">'+questionsArray
      [gameStart.questionSelected].options[i]+'</button>');
    }

  },
  // Begin count down using timer
  timer: function(){
    gameStart.timer--;
    $("#timer").text(gameStart.timer);
    if(gameStart.timer<0){
      console.log("TIME UP");
      gameStart.timeOut();
    }
  },
  nextQuestion: function() {

  },
  timeOut: function(){

  },
  results: function(){

  },
  clicked: function(){

  },
  correctGuess: function(){

  },
  incorrectGuess: function(){

  },
  reset: function(){

  },


}
// when count down reaches 0 the user looses
