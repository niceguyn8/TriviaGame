// Have a button that listens for a click that starts the game
$('#startButton').on('click',function(){
  $('#startButton').remove();
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
// Begin count down using timer
// when count down reaches 0 the user looses
