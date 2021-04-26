import React, { useEffect, useState } from 'react';
import AboutUs from './pages/AboutUs';
import Login from './components/authentification/Login';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/users';
import Users2 from './components/Users/Users2';
import UserForm from './components/Forms/UserForm';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import Main from './components/Main';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	const user=JSON.parse(localStorage.getItem('profile'));
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
				<Route path='/Admin'>
					{user ? (
						<div>
							<Users2 setCurrentId={setCurrentId} />
							<UserForm currentId={currentId} setCurrentId={setCurrentId} />
						</div>
					) : (
						<Login/>
					) }	
					
				</Route>
				<Route path='/profile' exact component={Profile} />
				<Route path='/login' exact component={Login} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
