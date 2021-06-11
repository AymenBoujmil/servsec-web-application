import React, { useEffect, useState } from 'react';
import AboutUs from './pages/AboutUs';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/users';
import Users2 from './components/Users/Users2';
import UserForm from './components/Forms/UserForm';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import Main from './components/Main';
import Profile from './components/Profile/Profile';
import Login from './components/authentification/Login';
import ServiceList from './components/Services/ServiceList';
import Update from './components/Profile/Update';
import RequestForm from './components/RequestForm';
import ServiceRequestForm from './components/ServiceRequestForm';

import { getServices } from './actions/services';
import AddServiceForm from './components/Services/Forms/AddServiceForm';
import UpdateServiceForm from './components/Services/Forms/UpdateServiceForm';
import ScrollToTop from './_utils/ScrollToTop';
import { getRqData } from './actions/requestsData';
import { getCategories} from './actions/categories';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    const user=JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getServices());
        dispatch(getCategories());
        dispatch(getRqData());
    }, [dispatch]);


    return (
        <Router>
            <Navbar />
            <ScrollToTop />
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
                <Route path='/ServiceList'  exact component={ServiceList} />
                <Route path='/Update'  exact component={Update} />
                <Route path='/addService'  exact component={AddServiceForm} />
                <Route path='/updateService/:id'  exact component={UpdateServiceForm} />
                <Route path='/service/RequestForm/:id' exact component={RequestForm} />
                <Route path='/service/Form/:id' exact component={ServiceRequestForm} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;