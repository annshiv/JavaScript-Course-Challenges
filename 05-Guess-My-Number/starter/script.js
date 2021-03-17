'use strict';

let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    const mynum = Number(document.querySelector('.guess').value);

    if (!mynum) {
        document.querySelector('.message').textContent = '⛔️ No number';
    }
    else if (mynum === number) {
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    } else if (mynum < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉  Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

    } else if (mynum > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
})

// bonus challenge

document.querySelector('.again').addEventListener('click',function() {
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.message').textContent = 'Guess the number. . .';
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})