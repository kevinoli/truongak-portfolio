import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
// import Projects from './Projects';
// import About from './About';
// import Contact from './Contact';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [selectedTab, setSelectedTab] = useState('home');
  
	const handleTabChange = (Tab) => {
	  setSelectedTab(Tab);
	};
  
	const content =
	  selectedTab === 'home' ? <Home /> : null;
	  // Add other Tabs as needed
  
	return (
	  <div>
		<Header onSelectTab={handleTabChange} />
		{/* Navigation component here, pass onSelectTab to handle Tab changes */}
		{content}
	  </div>
	);
  }

export default App;

