/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');

/*----- app's state (variables) -----*/
let scores;
let results;
let winner;

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/

init();

function init(){
    scores = {
        player: 0,
        tie: 0,
        computer: 0
    };

    results = {
        player: 'rock',
        computer: 'rock'
    };

    winner = 'tie';

    render();
}

function render(){
    
}