function checkAnswer() {
    const answer = document.getElementById('answer1').value;
    const result = document.getElementById('result');

    if (answer.toLowerCase() === 'berlin') {
        result.innerHTML = '<p>Richtig! Du hast das erste Rätsel gelöst!</p>';
    } else {
        result.innerHTML = '<p>Falsch. Versuche es noch einmal!</p>';
    }
}
