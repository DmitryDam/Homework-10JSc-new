
const string = "qwerty";
const charsArr = string.split("").reverse();
console.log(charsArr);
const time = document.querySelector(".timer");
const exercise = document.querySelector(".exercise");
exercise.innerHTML = string;

let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let mlSec = document.querySelector(".mlSec");

let count = document.querySelector(".count");
let storageCount = document.querySelector(".storageCount");
let out = document.querySelector(".out");
let start = document.querySelector("button");

let newString = [];
let z = charsArr.length-1; 
// перебор символов с конца массива
let callback = (event) => {

	if (event.key == charsArr[z]) {

		out.innerHTML += charsArr[z];
		newString[z] = charsArr[z];

		if (newString[0] == charsArr[0]) {
			stopTimer();
		}

		z=z-1;
	}
}

window.addEventListener("keydown", callback);

let timer;

const startTimer = () => {
	let mSeconds = 0;
	let seconds = 0;
	let minutes = 0;
	timer = setInterval(() => {
		mlSec.innerHTML = mSeconds;
		sec.innerHTML = seconds;
		min.innerHTML = minutes;
		mSeconds++;
		if (seconds<10) {
			sec.innerHTML = '0' + seconds;
		}
		if (minutes<10) {
			min.innerHTML = '0' + minutes;
		}
		if (mSeconds==10) {
			seconds++;
			mSeconds=0;
			if (seconds==60) {
				minutes++;
				seconds=0;
			}
		}
	}, 100);
	window.removeEventListener("keydown", startTimer);
};
const stopTimer = () => {
	clearInterval(timer);
	let countKPS = data => data/(min.innerHTML + sec.innerHTML + mlSec.innerHTML);
	let newCountKPS = countKPS(charsArr.length);
	count.innerHTML = `Количесвтво верных клавиш в секунду - ${newCountKPS.toFixed(2)}`;

	if (newCountKPS > localStorage.getItem('record')) {
		localStorage.setItem('record', newCountKPS.toFixed(2));
	}
	
};

start.addEventListener("click", startTimer);

storageCount.innerHTML = `Лучший результат - ${localStorage.getItem('record')}`;

