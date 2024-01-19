import React, { useState } from 'react';
import '../css/Header.css';

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
		const shouldCapitalize = Math.random() < 0.5;
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
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<div className="">
			<nav>
				<span className="brand"><img src="icon_white.png" alt="icon" width="50"/></span>
				<div className="menu-btn" onClick={toggleMenu}>{isMenuOpen ? '' : 'menu'}</div>

				<ul className={`${isMenuOpen ? 'mobile-menu' : 'menu'}`}>
				{/* <ul className='mobile-menu'> */}
					<li><a href="/">{randomizeCapitalization('home')}</a></li>
					<li><a href="/">{randomizeCapitalization('about me')}</a></li>
					<li><a href="/">{randomizeCapitalization('contact')}</a></li>
					{isMenuOpen && <li onClick={toggleMenu}>{randomizeCapitalization('x')}</li>}
				</ul>
			</nav>
		</div>
	);
};

export default Header;