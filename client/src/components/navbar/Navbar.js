import React, { useState, useEffect} from 'react';
import { IconContext } from 'react-icons';
import './nav.css';
import { FaRegNewspaper } from 'react-icons/fa';
import Badge from '@material-ui/core/Badge';
import decode from 'jwt-decode';
import {
	HiOutlineHome,
	HiOutlineNewspaper,
	HiOutlineSpeakerphone,
	HiOutlinePhone,
	HiOutlineLogin,
} from 'react-icons/hi';
import { IoMegaphoneOutline } from 'react-icons/io5';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
	useHistory,
	useLocation,
} from 'react-router-dom';
import { ImProfile } from 'react-icons/im';
import { FaHome } from 'react-icons/fa';
import { IoNewspaperSharp } from 'react-icons/io5';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { IoPersonCircle, IoMail, IoSettings, IoLogOut , IoLogInOutline } from 'react-icons/io5';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	small: {
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
}));

export default function Navbar() {
	const classes = useStyles();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const [invisible, setInvisible] = React.useState(false);
	const dispatch = useDispatch();
	const history=useHistory();
	const location= useLocation();

	useEffect(()=>
	{
		const token=user?.token;
		if (token)
		{
			const decodedToken = decode(token); 
			if(decodedToken.exp * 1000  < new Date().getTime())
			{
				logout();
			}
		}
		setUser(JSON.parse(localStorage.getItem('profile')));
	},[location]);

	
	const logout=()=>
	{
		dispatch({type:'LOGOUT'});
		history.push("/"); 
		setUser(null);
	};

	return (
		<div>
			<header className='main_menu home_menu'>
				<div className='container'>
					<div className='row align-items-center justify-content-center'>
						<IconContext.Provider
							value={{
								size: '22px',
								style: { padding: '0px 4px 4px 0 ' },
							}}
						>
							<div className='col-lg-12'>
								<nav className='navbar navbar-expand-lg navbar-light'>
									<NavLink className='navbar-brand' to='/' exact>
										{' '}
										{/*<img src='img/logo.png' alt='logo' />{' '}*/}
									</NavLink>
									<button
										className='navbar-toggler'
										type='button'
										data-toggle='collapse'
										data-target='#navbarSupportedContent'
										aria-controls='navbarSupportedContent'
										aria-expanded='false'
										aria-label='Toggle navigation'
									>
										<span className='menu_icon'>
											<i className='fas fa-bars' />
										</span>
									</button>
									<div
										className='collapse navbar-collapse main-menu-item'
										id='navbarSupportedContent'
									>
										<ul className='navbar-nav'>
											<li className='nav-item'>
												<NavLink
													className='nav-link'
													to='/'
													exact
													activeStyle={{
														color: '#795376 ',
														borderBottom: '3px solid #795376',
													}}
												>
													<HiOutlineHome /> Home
												</NavLink>
											</li>
											<li className='nav-item'>
												<NavLink
													className='nav-link'
													to='/AboutUs'
													exact
													activeStyle={{
														color: '#795376 ',
														borderBottom: '3px solid #795376',
													}}
												>
													<FaRegNewspaper />
													about
												</NavLink>
											</li>
											<li className='nav-item dropdown'>
												<NavLink
													className='nav-link dropdown-toggle'
													to={user?'/Services': '/login'}
													id='navbarDropdown_1'
													role='button'
													data-toggle='dropdown'
													aria-haspopup='true'
													aria-expanded='false'
													activeStyle={{
														color: '#795376 ',
														borderBottom: '3px solid #795376',
													}}
												>
													<HiOutlinePhone /> Services
												</NavLink>
												<div
													className='dropdown-menu'
													aria-labelledby='navbarDropdown_1'
												>
													<NavLink
														className='dropdown-item'
														to='/Servicelist'
													>
														{' '}
														Services List
													</NavLink>
													<NavLink
														className='dropdown-item'
														to='/Services/Categories'
													>
														Categories
													</NavLink>
												</div>
											</li>

											<li className='nav-item dropdown'>
												<NavLink
													className='nav-link dropdown-toggle'
													to='/blog'
													id='navbarDropdown_2'
													role='button'
													data-toggle='dropdown'
													aria-haspopup='true'
													aria-expanded='false'
													activeStyle={{
														color: '#795376 ',
														borderBottom: '3px solid #795376',
													}}
												>
													<IoMegaphoneOutline /> blog
												</NavLink>
												<div
													className='dropdown-menu'
													aria-labelledby='navbarDropdown_2'
												>
													<NavLink className='dropdown-item' exact to='/blog'>
														{' '}
														blog
													</NavLink>
													<NavLink className='dropdown-item' to='/blog/Single'>
														Single blog
													</NavLink>
												</div>
											</li>
											<li className='nav-item'>
												<NavLink
													className='nav-link'
													to='/contact'
													activeStyle={{
														color: '#795376 ',
														borderBottom: '3px solid #795376',
													}}
												>
													<ImProfile /> Contact
												</NavLink>
											</li>
										</ul>
									</div>
									<div className='hearer_icon d-flex align-items-center'>
										<a id='search_1' href='javascript:void(0)'>
											<i className='ti-search' />
										</a>
										{user ?(
											<div className='navbar-nav'>
											<div className='nav-item dropdown'>
												<NavLink
													className='nav-link '
													to='/profile'
													id='navbarDropdown_2'
													role='button'
													data-toggle='dropdown'
													aria-haspopup='true'
													aria-expanded='false'
													activeStyle={{
														color: '#795376 ',
														borderBottom: '3px solid #795376',
													}}
												>
													<Badge
														color='secondary'
														variant='dot'
														invisible={invisible}
													>
														<Avatar
															className={(classes.purple, classes.small)}
														></Avatar>
													</Badge>
												</NavLink>
												<div
													className='dropdown-menu'
													aria-labelledby='navbarDropdown_2'
												>
													<NavLink
														className='dropdown-item'
														exact
														to='/profile'
													>
														{' '}
														<IoPersonCircle /> Profile
													</NavLink>
													<Divider />
													<NavLink className='dropdown-item' to='/message'>
														<Badge
															color='secondary'
															anchorOrigin={{
																vertical: 'top',
																horizontal: 'left',
															}}
															badgeContent={7}
															max={99}
														>
															<IoMail />
														</Badge>{' '}
														Messages
													</NavLink>
													<Divider />
													<NavLink className='dropdown-item' to='/settings'>
														<IoSettings /> Settings
													</NavLink>
													<Divider />
													<NavLink className='dropdown-item red' to='/login' onClick={logout}>
														<IoLogOut /> Log Out
													</NavLink>
												</div>
											</div>
										</div>
										) : (
											<NavLink
												className='nav-link'
												to='/login'
												exact
												activeStyle={{
													color: '#795376 ',
													borderBottom: '3px solid #795376',
												}}
												>
												<HiOutlineLogin/> Login
											</NavLink>
										) }
									</div>
								</nav>
							</div>
						</IconContext.Provider>
					</div>
				</div>
				{/* <div className='search_input' id='search_input_box'>
						<div className='container '>
							<form className='d-flex justify-content-between search-inner'>
								<input
									type='text'
									className='form-control'
									id='search_input'
									placeholder='Search Here'
								/>
								<button type='submit' className='btn' />
								<span
									className='ti-close'
									id='close_search'
									title='Close Search'
								/>
							</form>
						</div>
					</div> */}
			</header>
		</div>
	);
}
