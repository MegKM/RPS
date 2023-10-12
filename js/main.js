/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
const RPS_LOOKUP = {
    p: {img: 'imgs/paper.png', beats: 'r'},
    s: {img: 'imgs/scissors.png', beats: 'p'},
    r: {img: 'imgs/rock.png', beats: 's'},
};

/*----- app's state (variables) -----*/
let scores;
let results;
let winner;

/*----- cached element references -----*/
const pResultsElement = document.getElementById('p-result');
const cResultsElement = document.getElementById('c-result');
const countdownElement = document.getElementById('countdown');

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
    scores[winner]++;
    render();
}

function getWinner(){
    if (results.p === results.c) return 't';
    return RPS_LOOKUP[results.p].beats === results.c ? 'p' : 'c';

}

function getRandomRPS(){
    const rps = Object.keys(RPS_LOOKUP);
    const randomIndex = Math.floor(Math.random() * rps.length);
    return rps[randomIndex];
}

// Transfers data to the DOM.
function render(){
    renderCountdown(function(){
        renderScores()
        renderResults()
    })
}

function renderCountdown(callback){
    let count = 3;
    AUDIO.currentTime = 0;
    AUDIO.play();
    countdownElement.style.visibility = 'visible';
    countdownElement.innerText = count;
    const timerId = setInterval(function(){
        count--;
        if (count){
            countdownElement.innerText = count;
        } else {
            clearInterval(timerId);
            countdownElement.style.visibility = 'hidden';
            callback();
        }
    }, 1000);
}

function renderScores(){
    for(let key in scores){
        const scoreElement = document.getElementById(`${key}-score`);
        scoreElement.innerText = scores[key];
    }
}

function renderResults(){
    pResultsElement.src = RPS_LOOKUP[results.p].img;
    cResultsElement.src = RPS_LOOKUP[results.c].img;
    pResultsElement.style.borderColor = winner === 'p' ? 'grey' : 'white';
    cResultsElement.style.borderColor = winner === 'c' ? 'grey' : 'white';
}

