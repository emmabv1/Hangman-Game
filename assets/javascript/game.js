var villains = ["Maleficent", "Ursula", "Scar", "Jafar", "Stepmother", "Clayton", "Captain Hook", "Queen of Hearts", "Cruella de Vil", "Siamese Cats", "Shere Khan", "Iago", "Hades", "Shan Yu", "Lucifer", "Madame Mim"]

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wrong = []

var guesses = 7

var wins = 0

var losses = 0

var computerChoice = villains[Math.floor(Math.random() * villains.length)];

document.onkeyup = function (event) {

    var userGuess = event.key;

    for (var i = 0; i < computerChoice.length; i++) {
        if (computerChoice.charAt(i) == userGuess) {
            console.log (computerChoice.charAt(i));
        }
    }
    
}

