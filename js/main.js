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

function render(){
    renderScores()
    renderResults()
}

