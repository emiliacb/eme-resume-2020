import React from 'react';
import Home from './components/home/home.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Contact from './components/contact/contact.jsx';

function App() {
		return (
			<div className="App">
				<Navbar />
				<Home />
				<Contact />
			</div>
		)
}

export default App;
