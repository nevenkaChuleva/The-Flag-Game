// Getting the buttons and assigning a colour to them
let redButton = document.getElementById("red").onclick = function() {userPicksColour(redColour)};
let greenButton = document.getElementById("green").onclick = function() {userPicksColour(greenColour)};
let blueButton = document.getElementById("blue").onclick = function() {userPicksColour(blueColour)};
let yellowButton = document.getElementById("yellow").onclick = function() {userPicksColour(yellowColour)};
let blackButton = document.getElementById("black").onclick = function() {userPicksColour(blackColour)};
let whiteButton = document.getElementById("white").onclick = function() {userPicksColour(whiteColour)};
let orangeButton = document.getElementById("orange").onclick = function() {userPicksColour(orangeColour)};

// Views 
let startOfGame = document.getElementById("start-of-game");
let midOfGame = document.getElementById("middle-of-game");
let endOfGame = document.getElementById("end");

// Buttons 
let startButton = document.getElementById("start");
let nextButton = document.getElementById("next");
let checkButton = document.getElementById("check");

// Everything else
let countryName = document.getElementById("countryName");
let scoreText = document.getElementById("score");
let scoreCounter = 0;
let rightAnswer = document.getElementById("rightAnswer");
let flagContainer = document.getElementById("flagContainer");
let coloursContainer = document.getElementById("coloursContainer");
let colourPicker = "";
let roundCounter = 0;

let partOne = document.getElementById("partOne");
let partTwo = document.getElementById("partTwo");
let partThree = document.getElementById("partThree");
let partOneColour = "";
let partTwoColour = "";
let partThreeColour = "";

// List of Colours
let redColour = "#FF1919";
let greenColour = "#008000";
let blueColour = "#3B3BFF";
let yellowColour = "#F5F517";
let blackColour = "#000000";
let whiteColour = "#FFFFFF";
let orangeColour = "#FF7B00";
let ogColour = "#333333";



partOne.onclick = function() {colourPart(partOne, partOneColour = colourPicker)}
partTwo.onclick = function() {colourPart(partTwo, partTwoColour = colourPicker)}
partThree.onclick = function() {colourPart(partThree, partThreeColour = colourPicker)}


// Helpful Functions
function userPicksColour(colour){
    colourPicker = `${colour}`;
}

function colourPart(part){
    part.style.backgroundColor = colourPicker;
}
function resetValues(){
    partOne.style.backgroundColor = ogColour;
    partTwo.style.backgroundColor = ogColour;
    partThree.style.backgroundColor = ogColour;
    partOneColour = "";
    partTwoColour = "";
    partThreeColour = "";
}



// Creating the Flag Object and Setting the rounds
class Country{
    constructor(name, firstColour, secondColour, thirdColour, guessed){
        this.name = name;
        this.firstColour = firstColour;
        this.secondColour = secondColour;
        this.thirdColour = thirdColour;
        this.guessed = guessed;
    }
}

let Belgium = new Country("Belgium", blackColour, yellowColour, redColour, false);
let Ireland = new Country("Ireland", greenColour, whiteColour, orangeColour, false);
let France = new Country("France", blueColour, whiteColour, redColour, false);
let Nigeria = new Country("Nigeria", greenColour, whiteColour, greenColour, false);
let Romania = new Country("Romania", blueColour, yellowColour, redColour, false);
let Italy = new Country("Italy", greenColour, whiteColour, redColour, false);

let endRounds;

let newRounds = [Belgium, Ireland, France, Nigeria, Romania, Italy, endRounds];


// Main Logic
function startGame(){
    startOfGame.style.display = "none";
    midOfGame.style.display = "block";
    nextRound();
}

function nextRound() {
    resetValues()
    countryName.style.backgroundColor = "";
    showButton();
    currentCountry = newRounds[roundCounter]
    console.log(currentCountry.name)
    countryName.innerHTML = `Guess the flag of: ${currentCountry.name}`;

    roundCounter++


    console.log(roundCounter);

    function checkIfCorrect(){
        if (partOneColour == "" || partTwoColour == "" || partThreeColour == ""){
            alert("Colour in all the parts!");
        }  else if(partOneColour == currentCountry.firstColour && 
            partTwoColour == currentCountry.secondColour && 
            partThreeColour == currentCountry.thirdColour){
            resetValues();
            colourPicker = "";
            currentCountry.guessed = true;
            countryName.innerHTML = `Correct!`;
            countryName.style.backgroundColor = "#00FF00";
            scoreCounter++
            hideButton();

        } else if (partOneColour !== currentCountry.firstColour || 
            partTwoColour !== currentCountry.secondColour || 
            partThreeColour !== currentCountry.thirdColour){
            console.log("Wrong.");
            resetValues();
            colourPicker = 0;
            currentCountry.guessed = false;
            countryName.innerHTML = `Wrong.`;
            countryName.style.backgroundColor = "#FF0000";
            check.style.display = "none";
            rightAnswer.style.display = "unset";
            rightAnswer.innerHTML = `The correct flag of ${currentCountry.name}:`;
            hideButton();
        } else {
        console.log("Problem");
        }
    
        if(roundCounter == 6){
            nextButton.innerHTML = "Finish";
        }

        if(next.innerHTML == "Finish"){
            nextButton.onclick = function(){end()};
        }
    }

    function hideButton(){
        check.style.display = "none";
        coloursContainer.style.display = "none";
        nextButton.style.display = "unset";
        if(currentCountry.guessed == false){
            showRightFlag();
        } else {
            flagContainer.style.display = "none";
        }
    }


    function showButton(){
        rightAnswer.style.display = "none";
        check.style.display = "unset";
        nextButton.style.display = "none";
        coloursContainer.style.display = null;
        flagContainer.style.display = null;
    }
    checkButton.onclick = function(){checkIfCorrect()}

    function showRightFlag(){
        partOne.style.backgroundColor = currentCountry.firstColour;
        partTwo.style.backgroundColor = currentCountry.secondColour;
        partThree.style.backgroundColor = currentCountry.thirdColour;
    }

    nextButton.onclick = function (){nextRound()};


   function end(){
    midOfGame.style.display = "none";
    endOfGame.style.display = "block";
    scoreText.innerHTML = ` Your score: ${scoreCounter}/6`
    }
}


startButton.onclick = function(){startGame()};

