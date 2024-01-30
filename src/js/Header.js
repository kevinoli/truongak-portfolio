import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const randomizeCapitalizationAndFont = (text) =>
  text.split('').map((letter, index) => {
    const shouldCapitalize = Math.random() < 0.5;
    const fontFamily = [
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
    ][Math.floor(Math.random() * 22)];

    return (
      <span
        key={index}
        style={{
          fontFamily,
          textTransform: shouldCapitalize ? 'uppercase' : 'lowercase',
        }}
      >
        {letter}
      </span>
    );
  });


  const Header = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [isMenuOpen, setMenuOpen] = useState(false);
  
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
  
	const toggleMenu = () => {
		if(isMobile){
			setMenuOpen(!isMenuOpen);
		}
	};
  
	return (
	  <div className="header">
		<nav>
		  <span className="brand"><img src="icon_white.png" alt="icon" width="50"/></span>
  
		  <div className="menu-btn" onClick={toggleMenu}>{isMenuOpen ? '' : randomizeCapitalizationAndFont('menu')}</div>
  
		  <ul className={`${isMenuOpen ? 'mobile-menu' : 'menu'}`}>
			<li onClick={toggleMenu}><Link to="/">{randomizeCapitalizationAndFont('home')}</Link></li>
			<li onClick={toggleMenu}><Link to="/about">{randomizeCapitalizationAndFont('about')}</Link></li>
			<li onClick={toggleMenu}><Link to="/contact">{randomizeCapitalizationAndFont('contact')}</Link></li>
			<li onClick={toggleMenu}><Link to="/resume">{randomizeCapitalizationAndFont('resume')}</Link></li>
			{ isMenuOpen && <li onClick={toggleMenu}>{randomizeCapitalizationAndFont('x')}</li>}
		  </ul>
		</nav>
	  </div>
	);
  };
export default Header;