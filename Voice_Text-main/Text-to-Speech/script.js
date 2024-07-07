let voice = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear previous options

    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });

    if (voices.length > 0) {
        voice.voice = voices[0]; // Set default voice if available
    }
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

voiceSelect.addEventListener("change", () => {
    voice.voice = voices[voiceSelect.value];
});

document.getElementById("listenButton").addEventListener("click", () => {
    voice.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(voice);
});
