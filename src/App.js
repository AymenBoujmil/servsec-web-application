import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';


import Footer from './components/Footer';
import Main from './components/Main';

export default function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Main} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
