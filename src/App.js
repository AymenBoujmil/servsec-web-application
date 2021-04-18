import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import AboutUs from './pages/AboutUs';
import Login from './components/Forms/Login';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/users';
import Users from './components/Users/Users';
import Users2 from './components/Users/Users2';
import UserForm from './components/Forms/UserForm';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';

import { Footer } from './components/footer/Footer';
import Main from './components/Main';

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Main} />
				<Route path='/Aboutus'>
					<AboutUs />
				</Route>
				<Route path='/Users2'>
					<Users2 setCurrentId={setCurrentId} />
					<UserForm currentId={currentId} setCurrentId={setCurrentId} />
				</Route>
				<Route path='/UserForm'>
					<UserForm currentId={currentId} setCurrentId={setCurrentId} />
				</Route>
				<Route path='/LoginForm'>
					<Login />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
