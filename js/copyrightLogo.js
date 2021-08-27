// 'use strict';
/* copyright logo in footer with dynamically updated year */
/* Highly declarative pattern: */
// const sillyFakeOrgName = 'epileptic jellyfish';
// const alwaysCurrentYear = new Date().getFullYear();
// const renderTarget =
// 	document.getElementById(
// 		'this-year',
// 	);
// renderTarget.append(
// 	`${alwaysCurrentYear} ${sillyFakeOrgName}`,
// );
/* Or, one-liner: */
document
	.getElementById('this-year')
	.append(new Date().getFullYear() + ' epileptic jellyfish');

/* alert user they are alreadqy on the page they are trying to access 😂*/
let hashTags = document.querySelectorAll("a[href='#']");
for (tag of hashTags) {
	tag.addEventListener('click', () => alert(`You're already on that page!`));
}
