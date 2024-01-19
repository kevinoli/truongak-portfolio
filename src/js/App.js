import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [selectedTab, setSelectedTab] = useState('home');
  
	const handleTabChange = (Tab) => {
	  setSelectedTab(Tab);
	};
  
	const content =
	  selectedTab === 'home' ? <Home /> : 'about me' ? <About /> : null;
	  // Add other Tabs as needed
  
	return (
	  <div>
		<Header onSelectTab={handleTabChange} />
		{content}
	  </div>
	);
  }

export default App;

