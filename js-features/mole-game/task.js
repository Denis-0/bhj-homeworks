"use strict"

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let hole = document.getElementsByClassName('hole-game');

for (let i = 0; i > hole.length; i++) {
	hole[i].onclick = function () {
		if (hole[i].className.includes('hole hole_has-mole')) {
			dead.textContent++;

			if (dead.textContent == 10) {
				alert('Win');

				dead.textContent = 0;
				lost.textContent = 0;
			}	
		} else {
			lost.textContent++;

			if (lost.textContent == 5) {
				alert('Lose');

				dead.textContent = 0;
				lost.textContent = 0;
			}
		}
	}
}

