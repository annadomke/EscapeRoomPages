// Fragen und Antworten
const questions = [
    {
        question: "Du bist in einem Käfig eingesperrt. Um den Ausgang zu öffnen, musst du den geheimen Code herausfinden. Auf dem Käfig sind Zahlen eingraviert. Doch der Code ist nicht einfach. Der Code hat 4 Ziffern. Die Ziffern im Code sind die aufeinanderfolgenden Zahlen der Fibonacci-Reihe. Der Code beginnt mit der Zahl, die der 4. Zahl in der Reihe entspricht. Was ist der Code?",
        correctAnswer: "2 3 5 8"
    },
    {
        question: "Was ist das Gegenteil von 'Ja', aber kein 'Nein'?",
        correctAnswer: "Vielleicht"
    },
    {
        question: "Die Summe der Zahlen von 1 bis x ergibt 55. Welche Zahl ist x?",
        correctAnswer: "10"
    },
    {
        question: "Ich habe einen Bruder, der immer lügt. Ich sage dir immer die Wahrheit. Was bin ich?",
        correctAnswer: "1"
    },
    {
        question: "Ich bin unsichtbar, aber du siehst mich jeden Tag. Was bin ich?",
        correctAnswer: "Zukunft"
    },
    {
        question: "Ich fließe, aber nie ohne Unterbrechung. Ich bin immer in Bewegung, aber komme nie an. Was bin ich?",
        correctAnswer: "Zeit"
    },
    {
        question: "Welches Wort ist im Wörterbuch immer ein Fehler?",
        correctAnswer: "Rechtschreibfehler"
    },
    {
        question: "Ich kann in vielen Zahlen erscheinen, aber ich bin keine Zahl selbst. Was bin ich?",
        correctAnswer: "Komma"
    },
    {
        question: "Welche Zahlt fehlt in der Reihe _, 3, 5, 7, 11, 13, 17, 19, 23 ?",
        correctAnswer: "2"
    },
];

let currentQuestionIndex = 0;

// Funktion zum Laden der aktuellen Frage
function loadQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
    document.getElementById('answer').value = ''; // Antwortfeld leeren
    document.getElementById('result').textContent = ''; // Ergebnis zurücksetzen
}

// Funktion zum Überprüfen der Antwort
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].correctAnswer.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Richtig! Weiter zur nächsten Frage.';
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(loadQuestion, 1000); // Nächste Frage nach einer kurzen Verzögerung laden
        } else {
            document.getElementById('result').textContent = 'Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet.';
        }
    } else {
        document.getElementById('result').textContent = 'Falsch! Versuche es noch einmal.';
    }
}

// Initiale Frage laden
loadQuestion();
