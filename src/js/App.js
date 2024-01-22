import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';  
import Header from './Header';
import Home from './Home';
import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
import '../css/App.css';

function App() {

	return (
		<Router>
			<div className="text-center">
			<Header />
			<Routes>  
				<Route exact path='/' element={<Home />}></Route>  
				<Route exact path='/about' element={<About />}></Route>
			</Routes>  
			</div>
		</Router>
	);
}

export default App;
