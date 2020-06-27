const chronometer = new Chronometer();

if (btnLeft.querySelector('.start')) {
  chronometer.startClick(callback);
} else {
  chronometer.stopClick();
};


// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop';
  } else {
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';
  }
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "RESET") {
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
  } else {
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
  }
});