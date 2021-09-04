// You do not have to alter any of the code in this section for this challenge.

const ruinColor = () => {
	/* gather data from DOM interface */
	const collection = document.getElementById('colors');
	const nodes = collection.children;
	const valuesWhole = collection.value;
	const resourceHrefs = document
		.getElementById('resource-list')
		.querySelectorAll('a[href]');

	/* can create a 'real' array of the nodes in the HTMLCollection (I ended up not using this, but it seems useful - hard to use without index of HTMLCollection, though... DOM interface is gawd awful...) */
	const nodesArray = Array.from(nodes);

	/* split the long string of values retrieved from option value> into new Array() */
	const valuesArray = valuesWhole.split(',');

	/* check out the variables deconstructed from your selection option's value: */
	// console.log(value1, value2, ...rest);

	/* use first color in array for bg  */
	document.body.style.backgroundColor = valuesArray[0];

	/* use second color in array for text  */
	document.body.style.color = valuesArray[1];

	/* 3rd color in array is a bootstrap color className mfor links (which we will also make look like buttons, because, why not ...)  */
	for (href of resourceHrefs) {
		href.className = `mb-1 btn btn-sm btn-${valuesArray[2]}`;
	}

	/* if yas need to figger out wtf is going on */
	console.log(
		collection,
		nodes,
		// nodes[3].innerText,
		nodesArray,
		nodesArray.indexOf(),
		valuesWhole,
		// valuesArray,
		// resourceHrefs
	);
};
