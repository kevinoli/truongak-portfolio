import React from 'react';

const fonts = [
	'Comic Sans MS, sans-serif',
	'Comic Sans MS, sans-serif',
	'Courier New, monospace',
	'Impact, sans-serif',
	'Chalkduster, fantasy',
	'Georgia, serif',
	'Lucida Console, monospace',
	'Papyrus, fantasy',
	'Times New Roman, serif',
	'Rockwell, serif',
	'Monaco, monospace',
	'Copperplate, fantasy',
	'Futura, sans-serif',
	'Baskerville, serif',
	'Century Gothic, sans-serif',
	'Jokerman, fantasy',
	'Curlz MT, cursive',
	'Snap ITC, fantasy',
	'Palatino Linotype, serif',
	'Courier, monospace',
	'Gill Sans, sans-serif',
	'Segoe UI, sans-serif',
];

const getRandomFont = () => {
	return fonts[Math.floor(Math.random() * fonts.length)];
};

const randomizeCapitalization = (text) => {
	return text.split('').map((letter, index) => {
		// Randomly decide whether to capitalize the letter
		const shouldCapitalize = Math.random() < 0.5; // Adjust the threshold as needed
		return (
			<span
				key={index}
				style={{
					fontFamily: getRandomFont(),
					textTransform: shouldCapitalize ? 'uppercase' : 'lowercase',
				}}
			>
				{letter}
			</span>
		);
	});
};

const Header = () => {
	return (
		<div className="display-1 text-center pt-5 fw-bold">
			<div className="mobile display-1">
				{randomizeCapitalization("kevin's")}
				<br></br>
				{randomizeCapitalization("awesome")}
				<br></br>
				{randomizeCapitalization("funzone")}
			</div>
			<div className="desktop">
				{randomizeCapitalization("kevin's awesome funzone")}
			</div>
		</div>
	);
};

export default Header;
