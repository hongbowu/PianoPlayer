// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay (event) {
  event.target.style.backgroundColor = 'red';
}
function keyReturn (event) {
  event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties
function eventListenerHandler(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}

// Write a loop that runs the array elements through the function
notes.forEach(eventListenerHandler);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');
let wordOne = document.getElementById('word-one');
let wordTwo = document.getElementById('word-two');
let wordThree = document.getElementById('word-three');
let wordFour = document.getElementById('word-four');
let wordFive = document.getElementById('word-five');
let wordSix = document.getElementById('word-six');
let letterOne = document.getElementById('letter-note-one');
let letterTwo = document.getElementById('letter-note-two');
let letterThree = document.getElementById('letter-note-three');
let letterFour = document.getElementById('letter-note-four');
let letterFive = document.getElementById('letter-note-five');
let letterSix = document.getElementById('letter-note-six');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.addEventListener('click', function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;
  letterFive.innerHTML = 'D';
  letterSix.innerHTML = 'C';
})
// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click', function(){
  nextThree.hidden = false;
  nextTwo.hidden = true;
  wordFive.innerHTML = 'DEAR';
  wordSix.innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  letterThree.innerHTML = 'G';
  letterFour.innerHTML = 'E';
  letterFive.innerHTML = 'C';
  letterSix.innerHTML = 'B';
})
// Write anonymous event handler property and function for the third progress button
nextThree.addEventListener('click', function(){
  startOver.hidden = false;
  nextThree.hidden = true;
  wordOne.innerHTML = 'HAP-';
  wordTwo.innerHTML = 'PY';
  wordThree.innerHTML = 'BIRTH';
  wordFour.innerHTML = 'DAY';
  wordFive.innerHTML = 'TO';
  wordSix.innerHTML = 'YOU!';
  letterOne.innerHTML = 'F';
  letterTwo.innerHTML = 'F';
  letterThree.innerHTML = 'E';
  letterFour.innerHTML = 'C';
  letterFive.innerHTML = 'D';
  letterSix.innerHTML = 'C';
  lastLyric.style.display = 'none';
})

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  wordOne.innerHTML = 'HAP-';
  letterOne.innerHTML = 'G';
  wordTwo.innerHTML = 'PY';
  letterTwo.innerHTML = 'G';
  wordThree.innerHTML = 'BIRTH-';
  letterThree.innerHTML = 'A';
  wordFour.innerHTML = 'DAY';
  letterFour.innerHTML = 'G';
  wordFive.innerHTML = 'TO';
  letterFive.innerHTML = 'C';
  wordSix.innerHTML = 'YOU!';
  letterSix.innerHTML = 'B';
}