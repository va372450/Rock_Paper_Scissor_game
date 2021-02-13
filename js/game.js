var choise = ["paper", "rock", "scissor"];
var i = Math.floor(Math.random() * 3);
var computerchoise = choise[i];
var userpoints = 0;
var computerpoints = 0;
function score() {
	var score_div = document.getElementById("score").innerHTML = userpoints + " &nbsp;-&nbsp; " + computerpoints;
}
setInterval(score, 700);
function convert(word) {
	if (word === "paper") return '<i class="fa fa-hand-paper-o"></i>';
	if (word === "rock") return '<i class="fa fa-hand-rock-o"></i>';
	return '<i class="fa fa-hand-scissors-o"></i>';
}

function game(userchoise) {
	var box = document.getElementById("challenge");
	// box.style.display='inline-flex';
	var userDiv = document.getElementById("youroption");
	userDiv.innerHTML = convert(userchoise);
	
	var comDiv = document.getElementById("comoption");
	comDiv.innerHTML = convert(computerchoise);
	if (userpoints < 5 && computerpoints < 5) {
	if (userchoise === "paper" && computerchoise === "rock" || userchoise === "rock" && computerchoise === "scissor" || userchoise === "scissor" && computerchoise === "paper") {
			win(userchoise);
		}

		else if (userchoise === computerchoise) {
			draw(userchoise);
		}
		else {
			lose(userchoise);
		}
			
	} 

	else if(userpoints == 5) {
		alert("You Won The Game 😄");
		window.location.reload(true);
	} else{
		alert("You Lose The Game 😢");
		window.location.reload(true);
	}
	function continuGame() {
		i = Math.floor(Math.random() * 3);
		computerchoise = choise[i];
		// box.style.display = "inline-flex";
	}
	setTimeout(continuGame, 1200);
}



function win(bn) {
	userpoints++;
	document.getElementById("who").innerHTML = "You win!";
	var bn = document.getElementById(bn);
	bn.classList.remove("bn");
	bn.classList.add("green");
	setTimeout(() => {
		bn.classList.add("bn");
		bn.classList.remove("green");
	}, 800);
}
function draw(bn) {
	document.getElementById("who").innerHTML = "It's a Draw.";
	var bn = document.getElementById(bn);
	bn.classList.remove("bn");
	bn.classList.add("gray");
	setTimeout(() => {
		bn.classList.add("bn");
		bn.classList.remove("gray");
	}, 800);
}
function lose(bn) {
	computerpoints++;
	document.getElementById("who").innerHTML = "You lose...";
	var bn = document.getElementById(bn);
	bn.classList.remove("bn");
	bn.classList.add("red");
	setTimeout(() => {
		bn.classList.add("bn");
		bn.classList.remove("red");
	}, 800);
}

function gameover(userpoints, computerpoints) {
	alert(userpoints, computerpoints);
}