import React from 'react';
import Header from './Header';
import Projects from './Projects';
// import About from './About';
// import Contact from './Contact';
import '../css/Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Homepage() {
	return (
		<div className="Homepage">
			<Header />
			<Projects />
			{/* <About /> */}
			{/* <Contact /> */}
		</div>
	);
}

export default Homepage;
