import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './components/home/home.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';

import "./style/style.css"

function App() {
		return (
			<Router>
			<div className="App">
				    <Switch>
						<Route exact path="/">
							<Redirect to="/en_US" />
					  	</Route>
					  	<Route exact path="/en_US">
					  		<Navbar lang={'EN'}/>
					    	<Home lang={'EN'}/>
					    	<Contact lang={'EN'}/>
					  	</Route>
						<Route path="/es_AR">
							<Navbar lang={'ES'}/>
						    <Home lang={'ES'}/>
						    <Contact lang={'ES'}/>
					  	</Route>
				  	</Switch>
				  	<Footer />
			</div>
			</Router>
		)
}

export default App;
