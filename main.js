function speak() {
  // Get the text from the input field
  var text = document.getElementById("input").value;

  // Create a new speech synthesis utterance
  var utterance = new SpeechSynthesisUtterance(text);

  // Speak the text
  speechSynthesis.speak(utterance);
}