// Have a button that listens for a click that starts the game
$('#startButton').on('click',function(){
  $('#startButton').remove();
  gameStart.displayQuestion();
});

// see if the answer is correct
$(document).on('click','.answer-button', function(event){
  gameStart.clicked(event);
})

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
  questionSelected: 0,
  timeLeft: 30,
  correctAnswer: 0,
  wrongAnswer: 0,

  // WHEN GAME STARTS:
  // Display 1 question from array of questions
  displayQuestion: function(){
    time = setInterval(gameStart.timer,1000);
    $("#display").html('<h2>'+questionsArray[gameStart.questionSelected].question+'</h2>');

    // Display Answer options (specific to the selected question) from array
    for (var i = 0; i < questionsArray[gameStart.questionSelected].options.length;i++){
      $('#display').append('<button class="answer-button" id="button- '
      +i+ '" data-name= "'+questionsArray
      [gameStart.questionSelected].options[i]+'">'+questionsArray
      [gameStart.questionSelected].options[i]+'</button>');
    }

  },
  // Begin count down using timer
  timer: function(){
    gameStart.timer--;
    $("#timer").html(gameStart.timer);
    if(gameStart.timer<0){
      console.log("TIME UP");
      gameStart.timeOut();
    }
  },
  nextQuestion: function() {
    gameStart.timeLeft = 30,
    $('#timer').html(gameStart.timer);
    gameStart.questionSelected++;
    gameStart.displayQuestion();
  },
  timeOut: function(){

  },
  results: function(){

  },
  clicked: function(event){
    clearInterval(time);
    if($(event.target).data("name")==questionsArray[gameStart.questionSelected].
      answer){
        gameStart.correctGuess();
    } else {
      gameStart.incorrectGuess();
    }

  },
  correctGuess: function(){
    console.log("User guessed right");
    clearInterval(time);
    gameStart.correctAnswer++;
    $('#display').html('<h2>You got it, dude!</h2>');
    if(gameStart.questionSelected==questionsArray.length-1){
      setTimeout(gameStart.results,3+1000);
    } else {
      setTimeout(gameStart.nextQuestion,3+1000);
    }
  },
  incorrectGuess: function(){
    console.log("User Guessed Wrong");
    clearInterval(time);
    gameStart.wrongAnswer++;
    $('#display').html('<h2>Wrong! Booooooo!</h2>');
    if(gameStart.questionSelected==questionsArray.length-1){
      setTimeout(gameStart.results,3+1000);
    } else {
      setTimeout(gameStart.nextQuestion,3+1000);
    }
  },
  reset: function(){

  },


}
// when count down reaches 0 the user looses
