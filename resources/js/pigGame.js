var 
scores, 
roundScore, 
activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function btn() {
    // Random Number
    var dice = Math.floor(Math.random() * 6 ) + 1;

    // Display the results
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'resources/images/dice-' + dice + '.png';

    // Update the round score IF the rolled number was not a one
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        /*  document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active'); */

        document.querySelector('.dice').style.display = 'none';

    }
});



