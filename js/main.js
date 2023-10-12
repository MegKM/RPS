/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
const RPS_LOOKUP = {
    r: 'imgs/rock.png',
    p: 'imgs/paper.png',
    s: 'imgs/scissors.png'
};

/*----- app's state (variables) -----*/
let scores;
let results;
let winner;

/*----- cached element references -----*/
const pResultsElement = document.getElementById('p-result');
const cResultsElement = document.getElementById('c-result');

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleChoice);

/*----- functions -----*/
init();

function init(){
    scores = {
        p: 0,
        t: 0,
        c: 0
    };

    results = {
        p: 'r',
        c: 'r'
    };

    winner = 'tie';

    render();
}

function handleChoice(event) {
    //Guard
    if (event.target.tagName !== 'BUTTON') return;
    //player's choice
    results.p = event.target.innerText.toLowerCase();
    //computer's choice
    results.c = getRandomRPS();
    winner = getWinner();
    render();
}

function getWinner(){
    
}

function getRandomRPS(){
    const rps = Object.keys(RPS_LOOKUP);
    const randomIndex = Math.floor(Math.random() * rps.length);
    return rps[randomIndex];
}

// Transfers data to the DOM.
function render(){
    renderScores()
    renderResults()
}

function renderScores(){
    for(let key in scores){
        const scoreElement = document.getElementById(`${key}-score`);
        scoreElement.innerText = scores[key];
    }
}

function renderResults(){
    pResultsElement.src = RPS_LOOKUP[results.p];
    cResultsElement.src = RPS_LOOKUP[results.c];
}

