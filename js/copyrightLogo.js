'use strict';
document
	.getElementById('this-year')
	.append(new Date().getFullYear() + ' epileptic jellyfish');

/* alert user they are alreadqy on the page they are trying to access 😂*/
const trickyLinks = document.querySelectorAll("a[href='#']");
var i = 0;
for (i < trickyLinks.length; i++; ) {
	trickyLinks[i].addEventListener('click', function () {
		alert("You're already on that page!");
	});
}
