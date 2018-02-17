//word bank
var villains = ["maleficent", "ursula", "scar", "jafar", "stepmother", "clayton", "hook", "cruella", "iago", "hades", "lucifer", "chernabog", "facilier", "hans", "stromboli", "monstro"];

//array of image sources
var noose = ["assets/images/noose1.png", "assets/images/noose2.png", "assets/images/noose3.png", "assets/images/noose4.png", "assets/images/noose5.png", "assets/images/noose6.png", "assets/images/noose7.png", ];

//this is where the wrong guesses will go
var wrong = [];

//number of wrong guesses left
var guesses = 7;

//pick a random word from the word bank
var computerChoice = villains[Math.floor(Math.random() * villains.length)];

//this is cheating
console.log (computerChoice);

//split the word into an array of characters
var res = computerChoice.split ("");

//blank array
var progress = [];

//loop that will fill blank array with dashes
for (var j = 0; j < res.length; j++){
    progress [j] = "_ ";
}

//join progress array into one string
var word = progress.join('');

//display string in the word-blanks div
document.getElementById("word-blanks").innerHTML = word;

//this is what happens when the user wins
function win() {
    var playAgain = confirm ("Rats... you won... Wanna play again?");
    if (playAgain) {
        location.reload();
    }
    else {
        document.write ("ok bye");
    }
}

//this is what happens when the user loses
function lose() {
    var playAgain = confirm ("Good Noose tonigt! You died! Wanna try again?");
    if (playAgain) {
        location.reload();
    }
    else {
        document.write ("ok bye");
    }
}

//onkeyup event for when user types a letter guess
document.onkeyup = function (event) {
    
    //creates a variable with the letter that the user guessed
    var userGuess = event.key;
    
    //this will be used to see if a guess was correct
    var correct = false;

    //loop to check if user guess is in the word and to replace dash with letter
    for (var i = 0; i < res.length; i++) {
        if (userGuess === res[i]){
            if (progress [i] === "_ "){
                progress [i] = userGuess;
                correct = true;
            }
        }
    }
 
    //join progress array into one string
    var word = progress.join('');

    //display string in the word-blanks div
    document.getElementById("word-blanks").innerHTML = word

    //if user guess was wrong, that letter will be added to the wrong guess array and be displayed on screen
    if (!correct) {
        wrong.push (userGuess);
        document.getElementById("wrong-guesses").innerHTML = wrong;
        //the number of guesses left will decrease by 1
        guesses --;
        document.getElementById("guesses-left").innerHTML = guesses;
        //change noose image
        document.getElementById("noose").src = noose [6-guesses];
        
    }

    //if winning condition is met winning function is executed
    if (word.indexOf ("_ ") === -1) {
        setTimeout(win, 200);      
    }
    
    //if losing condition is met losing function is executed
    if (guesses < 1) {
        setTimeout(lose, 200);
    }

    
}

//change image source with array


