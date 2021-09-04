// 'use strict';
/* copyright logo in footer with dynamically updated year */
/* was hoping to have a clock that incremented at the bottom for my cheesy footer.  This is what Ii came up with on my own (but doesnt stop at 60sec).  I am also pretty bad at "this" keyword - I barely understand it - it's for scoping document vs window, right (?) I never have to use it so I've mostly forgotten it even exists (Not to mention, it's a major pain in the ass).
this.secTarget = document.getElementById('this-second');
// this.tick = 1;
// this.count = 0;
// const secFunc = (count, tick, secTarget) => {
// 	this.incrementer = setInterval(() => {
// 		this.count = parseFloat(this.tick++ / 100)
// 			.toFixed(2)
// 			.slice(2, 4);
// 		this.secTarget.innerText = this.count;
// 		// return count;
// 	}, 100);
// };

/* timer I stole from sitepoint: 
https://www.sitepoint.com/community/t/reset-starting-time/256511 , but it decrements instead of increments, so not what I was looking for - unfortunately too inexperienced to figure out how to reverse it (!)  started at it until I was like damn, I'd better do my other work before I spend any more time on this (was challenging to stop, I was definitely in the zone)...
function startTimer(duration, display) {
	let start = Date.now(),
		diff,
		minutes,
		seconds;
	function timer() {
		// get the number of seconds that have elapsed since
		// startTimer() was called
		diff = duration - (((Date.now() - start) / 1000) | 0);

		// does the same job as parseInt truncates the float
		minutes = (diff / 60) | 0;
		seconds = diff % 60 | 0;

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		display.textContent = minutes + ':' + seconds;

		if (diff <= 0) {
			// add one second so that the count down starts at the full duration
			// example 05:00 not 04:59
			start = Date.now() + 1000;
		}
	}
	// we don't want to wait a full second before the timer starts
	timer();
	setInterval(timer, 1000);
}

this.startTimer(64000, this.secTarget);
*/
// const OrgName = 'epileptic jellyfish'; // super serious
// const protoDate = new Date();
// const currentYear = protoDate.getFullYear();
// const currentDate = protoDate.toLocaleDateString();
// const currentTime = protoDate.toLocaleTimeString();

// const yearTarget = document.getElementById('this-year');
// yearTarget.append(currentDate);
// const secTarget = document.getElementById('this-second');
// secTarget.append(secFunc(tick, count));
/* `${currentDate} ${currentTime} ${this.incrementer} ${OrgName}`, */
/* Or, one-liner: */
document
	.getElementById('this-year')
	.append(new Date().getFullYear() + ' epileptic jellyfish');

/* alert user they are alreadqy on the page they are trying to access 😂*/
let hashTags = document.querySelectorAll("a[href='#']");
for (tag of hashTags) {
	tag.addEventListener('click', () => alert(`You're already on that page!`));
}
