import React, { Component } from 'react';
import  Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';



export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<Main/>
				<Footer/>
			</div>
		)
	}
}

