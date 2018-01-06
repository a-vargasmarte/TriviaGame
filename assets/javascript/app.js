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