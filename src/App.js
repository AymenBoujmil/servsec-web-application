import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';


import Footer from './components/Footer';
import Main from './components/Main';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';

export default function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Main} />
					<Route path='/profile' exact component={Profile} />
					<Route path='/login' exact component={LoginForm} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
