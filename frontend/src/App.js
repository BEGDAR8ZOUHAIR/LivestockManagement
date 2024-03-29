import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/screens/home";
import Services from "./components/screens/Services";
function App()
{
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/services' component={Services} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
