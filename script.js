const resultElement = document.getElementById("result")
let recognition;

function startConverting() {
    if ("webkitSpeechRecognition" in window) {
        recognition = new webkitSpeechRecognition();
        setupRecognition(recognition);
        recognition.start();
    }
}

function setupRecognition(recognition){
    recognition.continous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.onresult = function(event) {
        processResult(event.results)
    }
}

function processResult(results) {

}

function stopConverting() {
    
}