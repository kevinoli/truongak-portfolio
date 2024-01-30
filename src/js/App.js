import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';  
import Header from './Header';
import Home from './Home';
import About from './About';
import Resume from './Resume';
// import Projects from './Projects';
// import Contact from './Contact';
import '../css/App.css';

function App() {

	return (
		<Router>
			<div className="">
			<Header />
			<Routes>  
				<Route exact path='/' element={<Home />}></Route>  
				<Route exact path='/about' element={<About />}></Route>
				<Route exact path='/resume' element={<Resume />}></Route>
			</Routes>  
			</div>
		</Router>
	);
}

export default App;
