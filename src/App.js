import React, { useEffect,useState } from 'react';
import  Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Login from './components/Forms/Login';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/users';
import Users from './components/Users/Users';
import Users2 from './components/Users/Users2';
import UserForm from './components/Forms/UserForm';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers()); 
	}, [dispatch])
	
		return (
			<Router>
				<Navbar/>
				<Switch>																									
					<Route path="/Aboutus">
						<AboutUs/>
					</Route>
					<Route path="/Users2">
						<Users2 setCurrentId={setCurrentId}/>
						<UserForm currentId={currentId} setCurrentId={setCurrentId}/>
					</Route>
					<Route path="/UserForm">
						<UserForm currentId={currentId} setCurrentId={setCurrentId} />
					</Route>
					<Route path="/LoginForm">
					<Login/>
						</Route>
				</Switch>
				<Footer/>
			</Router>
		)
}

export default App;