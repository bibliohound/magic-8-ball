$(document).ready(function(){
var ball = {};
ball.listOfAnswers = ["Yes", "No", "Maybe", "Outlook good", "Reply hazy, try again", "I don't think so", "Absolutely"];
  $("#answer").hide(); //hides answer when page loads

ball.askQuestion = function(question) { //the method that gets an answer from list

  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"); //the image for the ask question method

  $("#answer").fadeIn(4000); //fade in the answer
  var randomNumber = Math.random();
  var randomNumberArray = randomNumber * this.listOfAnswers.length;
  var randomIndex = Math.floor(randomNumberArray);
  var randomAnswer = this.listOfAnswers[randomIndex];

  $("#answer").text(randomAnswer);

  console.log(question);
  console.log(randomAnswer);

}; //askQuestion function closing brackets

  var onClick = function(){
    $("#answer").hide(); //hides the answer
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png"); //change the image
  //set timeout goes here??
    setTimeout(
      function(){
    var question = prompt("ASK A YES/NO QUESTION"); //the question the prompt needs to delay
    $("#8ball").effect("shake"); //shake the ball
    ball.askQuestion(question); //call the askQuestion function
  }, 500);
  };

  $("#questionButton").click(onClick); //calls the onClick function


}); //jquery wrapper
