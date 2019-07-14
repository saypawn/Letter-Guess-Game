let letters = ["a", "b", "c"]

let guessedLetters =[];

let letterToGuess = null;

let guessLeft = 9;

let wins = 0;

let losses = 0;

const updateGuessesLeft = () => {
    document.querySelector("#guessesLeft").innerHTML = guessLeft;

}

const updateLetterToGuess = () => {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}

const updateGuessesSoFar = () => {
    document.querySelector("#guessesSoFar").innerHTML = guessedLetters

}


const updateGuesesSoFar = () => {
    document.querySelector("guessesSoFar").innerHTML = guessedLetters.join( ","); 
}

const reset = () => {
    guessLeft = 9;
    guessLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = (event) => {
    console.log('test');
    guessLeft--;
    
    let letter = event.key.toLowerCase();
    guessedLetters.push(letter);

    updateGuessesLeft();
    updateGuessesSoFar();

    if(letter === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }
    
    if(guessLeft === 0){
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }

    }