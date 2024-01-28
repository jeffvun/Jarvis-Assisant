const startButton = document.getElementById('start-voice-input');
const stopButton = document.getElementById('stop-voice-input');
const sendButton = document.getElementById('button-addon2');
const answerElement = document.querySelector('.card-text');

sendButton.addEventListener('click', () => {
    const question = document.querySelector('input[type="text"]').value;

    // Send the question to the AI assistant and get the answer
    // Display the answer in the answerElement element
});

// Initialize the speech recognition engine
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

// Initialize the speech synthesis engine
const SpeechSynthesis = window.SpeechSynthesis || window.webkitSpeechSynthesis;
const synth = window.speechSynthesis;

// Add event listeners for the start and stop voice input buttons
startButton.addEventListener('click', () => {
    recognition.start();
    startButton.classList.add('d-none');
    stopButton.classList.remove('d-none');
});

stopButton.addEventListener('click', () => {
    recognition.stop();
    startButton.classList.remove('d-none');
    stopButton.classList.add('d-none');
});

// Add event listeners for the speech recognition events
recognition.addEventListener('result', (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    if (transcript.toLowerCase() === 'stop') {
        recognition.stop();
        startButton.classList.remove('d-none');
        stopButton.classList.add('d-none');
    } else {
        // Send the transcript to the AI assistant and get the answer
        // Display the answer in the answerElement element
        const answer = getAnswer(transcript);
        answerElement.textContent = answer;
        speak(answer);
    }
});

recognition.addEventListener('end', () => {
    startButton.classList.remove('d-none');
    stopButton.classList.add('d-none');
});

// Add a function to get the answer from the AI assistant
function getAnswer(question) {
    // Call the AI assistant API with the question and get the answer
    // Return the answer
}

// Add a function to speak the answer using the speech synthesis engine
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}