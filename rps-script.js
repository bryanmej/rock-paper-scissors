let uscore = 0;
let cscore = 0;
const usescore = document.getElementById("user-score");
const compscore = document.getElementById("comp-score");
const res = document.querySelector(".result");
const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("scissors");

function compchoice() {
	const choices = ['r', 'p', 's'];
	const randomnum = Math.floor(Math.random() * 3);
	return choices[randomnum];
}

function win() {
	uscore++;
	usescore.innerHTML = uscore;
	res.innerHTML = "You win!"
}

function lose() {
	cscore++,
	compscore.innerHTML = cscore;
	res.innerHTML = "Better luck next time"
}

function draw() {
	res.innerHTML = "It is a Draw!";
}

function game(userChoice) {
	const cochoice = compchoice();

	switch(cochoice) {
		case "r":
		r.style.backgroundColor = "#FF1900";
		break;

		case "p":
		p.style.backgroundColor = "#FF1900";
		break;

		case "s":
		s.style.backgroundColor = "#FF1900";
		break;
	}

	switch(userChoice + cochoice) {
		case "rs":
		case "pr":
		case "sp":
		win();
		break;

		case "rp":
		case "ps":
		case "sr":
		lose();
		break;

		case "rr":
		case "pp":
		case "ss":
		draw();
		break; 
	}
}

r.addEventListener('click', function (){
	game("r");
})

p.addEventListener('click', function (){
	game("p");
})

s.addEventListener('click', function (){
	game("s");
})

function gbc() {
	p.style.backgroundColor = "lightgrey";
	s.style.backgroundColor = "lightgrey";
	r.style.backgroundColor = "lightgrey";
}

setInterval(gbc, 3000);