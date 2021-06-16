import React, { useEffect, useState } from 'react';
import AboutUs from './pages/AboutUs';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './actions/users';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import Login from './components/authentification/Login';
import ServiceList from './components/Services/ServiceList';
import Update from './components/Profile/Update';
import RequestForm from './components/Request/Forms/RequestForm';
import ServiceRequestForm from './components/Request/Forms/ServiceRequestForm';

import { getServices } from './actions/services';
import AddServiceForm from './components/Services/Forms/AddServiceForm';
import UpdateServiceForm from './components/Services/Forms/UpdateServiceForm';
import ScrollToTop from './_utils/ScrollToTop';
import { getRqData } from './actions/requestsData';
import ServiceInfo from './components/Services/ServiceInfo';
import ContactForm from './components/Main/ContactForm';
import { getRequests } from './actions/requests';
import { getCategories } from './actions/categories';
import TermsofService from './pages/TermsofService';
import FrequentlyAskedQuestion from './pages/FrequentlyAskedQuestion';
import OurAdvices from './pages/OurAdvices';
import Category from './components/category/Category';
import ForgotPassword from './components/authentification/ForgotPassword';
import ResetPassword from './components/authentification/ResetPassword';
import MessagesMenu from './components/Messages/MessagesMenu';

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	const user = JSON.parse(localStorage.getItem('profile'));

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getServices());
		dispatch(getCategories());
		dispatch(getRqData());
		dispatch(getRequests());
	}, [dispatch]);

	return (
		<Router>
			<Navbar />
			<ScrollToTop />
			<Switch>
				<Route path='/' exact component={Main} />
				<Route path='/Aboutus' exact component={AboutUs} />
				<Route path='/contact' exact component={ContactForm} />
				<Route path='/TermsofService' exact component={TermsofService} />
				<Route
					path='/FrequentlyAskedQuestion'
					exact
					component={FrequentlyAskedQuestion}
				/>
				<Route path='/OurAdvices' exact component={OurAdvices} />
				<Route path='/profile' exact component={Profile} />
				<Route path='/ServiceList' exact component={ServiceList} />
				<Route path='/Update' exact component={Update} />
				<Route path='/addService' exact component={AddServiceForm} />
				<Route path='/updateService/:id' exact component={UpdateServiceForm} />
				<Route path='/service/RequestForm/:id' exact component={RequestForm} />
				<Route path='/service/Form/:id' exact component={ServiceRequestForm} />
				<Route path='/service/Info/:id' exact component={ServiceInfo} />
				<Route path='/login' exact component={Login} />
				<Route path='/Categories' exact component={Category} />
				<Route path='/forgotPassword' exact component={ForgotPassword} />
				<Route path='/resetPassword/:token' exact component={ResetPassword} />
				<Route path='/messages' exact component={MessagesMenu} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
