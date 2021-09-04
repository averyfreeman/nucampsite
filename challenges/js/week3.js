// You do not have to alter any of the code in this section for this challenge.

const defColors = [
	'primary',
	'secondary',
	'success',
	'warning',
	'danger',
	'info',
	'light',
	'dark',
];

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const randString = (length, chars) => {
	let uuid = '';
	for (let i = 0; i < length; i++) {
		uuid += chars.charAt(Math.floor(Math.random() * chars.length));
		console.log(uuid);
	}
	return uuid;
};

const randDefColor = (defColors) => {
	let i = Math.floor(Math.random() * defColors.length + 1);
	return defColors[i];
};

const randColorString = (randDefColor, defColors) => {
	let color1 =
		'#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
	let color2 =
		'#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
	let color3 = randDefColor(defColors);
	const colorString = (color1 + ', ' + color2 + ', ' + color3).toString();
	return colorString;
};

// the ran gen button's element
const optGenButton = document.getElementById('rand-opt-gen');
// the select element
const selectBox = document.getElementById('colors');

// this will make 5 random options:
const genFiveRandOptions = (selectBox) => {
	let newOptionElement = [];
	for (let i = 0; i < 5; i++) {
		newOptionElement[i] = new Option(
			'Seriously, no effing idea #' + i,
			randColorString(randDefColor, defColors),
		);
		console.log(newOptionElement[i]);
		selectBox.add(newOptionElement[i], undefined);
	}
};

// clicking the button!
optGenButton.addEventListener('click', () => genFiveRandOptions(selectBox));

const mangleColor = () => {
	const colorString = document.getElementById('colors').value;
	const colorArray = colorString.split(',', 3);
	const anchors = document.getElementsByTagName('A');
	for (i = 0; i < anchors.length; i++) {
		// anchors[i].classList.add(`bg-${defColors[i]}`);
		anchors[i].classList.add(`bg-${defColors[i]}`);
		anchors[i].classList.add(`btn`);
		anchors[i].classList.add(`btn-${defColors[i]}`);
		anchors[i].classList.add(`rounded`);
		anchors[i].classList.add(`m-1`);
		anchors[i].classList.add(`text-reset`);
		anchors[i].classList.add(`text-decoration-none`);
		// anchors[i].classList.add(`${colorArray[2]}`);
		// anchors[i].classList.add(`${colorArray[2]} btn btn-${defColors[i]} btn-lg`);
	}

	console.log(colorString, colorArray, anchors);

	colorArray.map((color, i) => console.log(color, i));
	// colorArray.map((color, i) => {
	// color
	// });
	document.body.style.backgroundColor = colorArray[0];
	document.body.style.color = colorArray[1];
};
