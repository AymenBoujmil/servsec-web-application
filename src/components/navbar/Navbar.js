import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaRegNewspaper } from 'react-icons/fa';
import {
	HiOutlineHome,
	HiOutlineNewspaper,
	HiOutlineSpeakerphone,
	HiOutlinePhone,
} from 'react-icons/hi';
import { IoMegaphoneOutline } from 'react-icons/io5';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from 'react-router-dom';
import { ImProfile } from 'react-icons/im';
import { FaHome } from 'react-icons/fa';
import { IoNewspaperSharp } from 'react-icons/io5';

export default function Navbar() {
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
										<img src='img/logo.png' alt='logo' />{' '}
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
													to='/about'
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
													to='/Services'
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
														to='/Services/Listes'
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
										<a href='cart.html'>
											<i className='flaticon-shopping-cart-black-shape' />
										</a>
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
