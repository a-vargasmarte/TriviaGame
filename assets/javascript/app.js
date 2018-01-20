//Basic Trivia Quiz (Timed Form) Pseudocode

/*The following describes my approach to code the 
basic trivia quiz based on the hw instructions:

* You'll create a trivia form with multiple choice or true/false options (your choice).

I have a few ideas for trivia themes:
    - Nutrition myths
    - Dominican history
    - Geography
    - Nerdy, sciency topics (maybe with a focus on public health)
    - Languages

These questions will be a combination of T/F and MC

In the form, I will use radio button input types to make sure that the
player can only choose one of the answer options

* The player will have a limited amount of time to finish the quiz. 

  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

Depending on the length/theme of the game I will set a timer with 
a range of 30-120 seconds. I will use the setTimeout() method to
execute a function after the time elapses. This function will 
trigger a 'game over' screen that will display the number of 
correct/incorrect answers. The actual number will increment based
on whether conditions (aka the player choosing the right 
button/answer) are met for each answer. I will try and incorporate
a 'retry' button to load the game again 


* Don't let the player pick more than one answer per question.

I will ensure this with radio button inputs

* Don't forget to include a countdown timer.

I will use the setInterval method which will hold a function that
will repeat itself every second. This function will basically
decrease the value of a variable holding the initial timer amount
(30-120) by one. Then, the new value of this placeholder will be 
attached to an html element (holding the value of seconds) using 
jQuery. This will run every 30-120 *1000 milliseconds. Inside this
function, there will also be an if statement where if the timer
reaches 0, the clearInterval method will be executed. 

*/

$(document).ready(function() {

    // create an array of questions
    
    let triviaObjects = [{
        question: "What is my name?",
        answerChoices: ["Alberto", "Roberto", "Alejandro", "Alfonso"],
        rightChoice: "Alberto"}, {
        question: "Where do I come from?",
        answerChoices: ["New York City, NY", "Santo Domingo, DR", "Amsterdam, NL", "Montpellier, FR", "Camaguey, Cuba"],
        rightChoice: "Santo Domingo, DR"}, {
        question: "How old am I?",
        answerChoices: ["10-15","25-30", "40-50", "60-80"],
        rightChoice: "25-30"}, {
        question: "What is my favorite color?",
        answerChoices: ["Red", "Blue", "Fuschia", "Magenta"]}];
        
        // for(let i = 0; i < triviaObjects.length; i++) {
        //     console.log(triviaObjects[i].question);
        // }

    // use jQuery to dynamically create fixed html content to show our user.
    
    let questionDiv = $("#questionDiv");

    // add the first question to #questionDiv
    questionDiv.html("<h3>" + triviaObjects[0].question + "</h3>");

    

    

    let firstQuestion = triviaObjects[0];
    // for each answer of our question...
    for (let i = 0; i < firstQuestion.answerChoices.length; i++) {
        console.log(firstQuestion.answerChoices[i]);

        // we create a new div where we will store our answers
        let answerDiv = $("<div>");

        answerDiv.attr("class", "container");

        // we create a form element which will hold our labels with answers
        let gameForm = $("<form>");

        // create an input of type "radio" and set attributes
        let answerLabel = $("<label>");

        answerLabel.attr("class", "radio-inline");

        let answerInput = $("<input>");

        answerInput.attr({
            type: "radio",
            name: "optradio",
            value: firstQuestion.answerChoices[i]
        });

        // set text
        answerInput.text(firstQuestion.answerChoices[i]);

        // append each input to their label 
        answerLabel.append(answerInput);
        
        // append the label on our gameForm

        gameForm.append(answerLabel);

        // append the form on the answerDiv
        answerDiv.append(gameForm);

        // append answerDiv on #questionDiv
        $("#questionDiv").append(answerDiv);
    }

    
    
    

        
    
    // set our number counter to 30
    let timeLeft = 5;

    // declare intervalId to hold our interval ID when we execute a function that runs the countdown
    let intervalId;

    // declare variables for wins and losses
    let wins = 0;
    let losses = 0;
    // the run function sets an interval that runs a function that decrements timeLeft once a second
    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    // we declare decrement function
    function decrement() {
        
        // decrease timeLeft by one
        timeLeft--;
        
        // we show the number in the #timerDiv element
        $("#timerDiv").html("<h2>" + timeLeft + "</h2>");

        // when the time is over...
        if (timeLeft === 0) {
            // run the stop function
            stop();
            // run the timesUp function
            timesUp();
        }
    }

    // the stop function
    function stop() {
        // when this runs, the function clears our intervalId
        clearInterval(intervalId);
    }

    // the timesUp function
    function timesUp() {
        
        // when the time is up
        // we select timerDiv and empty its contents
        $("#timerDiv").empty();
        // Then we create an html element dynamically
        let gameOverDiv = $("<div>");
        // then we add text content to this div
        gameOverDiv.html("<h2> Game Over!</h2>");
        
        // and we append this gameOverDiv to #timerDiv
        $("#timerDiv").append(gameOverDiv);

        // we select our gameScore div and add content to it
        let scoreDiv = $("#gameScore");
        scoreDiv.html("<h2> Wins: " + wins + " Losses: " + losses + "</h2>");
                
        // $("#gameScore").append(scoreDiv);
    }

    // we invoke the run function

    run();


    


});