const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];

let userChoice;
let computerChoice

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice;
}

const handleClick = (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = 'Your choice: ' + userChoice;
    generateComputerChoice();
    getResult();
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick);
    gameGrid.appendChild(button);
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "you WIN!!!"
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "you LOST! Try Again?"
            break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "DRAW, Nobody wins this round!"
            break;
    }
}
