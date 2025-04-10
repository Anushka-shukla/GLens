// src/utility/useWebVoiceRecognition.js

export const useWebVoiceRecognition = () => {
  const startListening = (onResult, onStart, onEnd) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => onStart?.();
    recognition.onresult = (event) => onResult(event.results[0][0].transcript);
    recognition.onerror = (event) => console.error('Speech recognition error:', event.error);
    recognition.onend = () => onEnd?.();

    recognition.start();
  };

  return { startListening };
};
