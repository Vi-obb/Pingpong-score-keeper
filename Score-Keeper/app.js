const p1 = {
    score : 0,
    button : document.querySelector('#p1button'),
    display : document.querySelector('#score1'),
}

const p2 = {
    score : 0,
    button : document.querySelector('#p2button'),
    display : document.querySelector('#score2'),
}


const resetButton = document.querySelector('#reset');
const wSelect = document.querySelector('#playto');
let winningScore = 3;
let gameOver = false;

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
});



wSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    gameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}