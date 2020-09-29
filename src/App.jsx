import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/home.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Contact from './components/contact/contact.jsx';

function App() {
		return (
			<Router>
			<div className="App">
				<Navbar path="/"/>
				    <Switch>
						<Route path="/en_US">
					    	<Home lang={'EN'}/>
					    	<Contact lang={'EN'}/>
					  	</Route>
						<Route path="/es_AR">
						    <Home lang={'ES'} />
						    <Contact lang={'ES'} />
					  	</Route>
				  	</Switch>
			</div>
			</Router>
		)
}

export default App;
