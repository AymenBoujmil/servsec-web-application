import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (
            <div>
  <header className="main_menu home_menu">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-light">
        {/*<a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo" /> </a>  */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="menu_icon"><i className="fas fa-bars" /></span>
            </button>
            <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/AboutUs">about</Link>
                  {/*<a className="nav-link" href="about.html">about</a>*/}
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                    <a className="dropdown-item" href="product_list.html"> Services list</a>
                    <a className="dropdown-item" href="single-product.html">Services details</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    pages
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                    <Link className="dropdown-item" to="/UserForm" >login</Link>
                    <Link className="dropdown-item" to="/Users2">Users</Link>
                    {/*<a className="dropdown-item" href="login.html"> login </a> */}
                    <a className="dropdown-item" href="checkout.html">Categories</a>
                    <a className="dropdown-item" href="cart.html">Services</a>
                    {/*<a className="dropdown-item" href="confirmation.html">confirmation</a>
                       <a className="dropdown-item" href="elements.html">elements</a>*/} 
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    blog
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                    <a className="dropdown-item" href="blog.html"> blog</a>
                    <a className="dropdown-item" href="single-blog.html">Single blog</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="hearer_icon d-flex align-items-center">
              <a id="search_1" href="javascript:void(0)"><i className="ti-search" /></a>
              <a href="cart.html">
                      {/* <i className="flaticon-shopping-cart-black-shape" />*/}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
   {/* <div className="search_input" id="search_input_box">
      <div className="container ">
        <form className="d-flex justify-content-between search-inner">
          <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
          <button type="submit" className="btn" />
          <span className="ti-close" id="close_search" title="Close Search" />
        </form>
      </div>
                      </div>*/}
  </header>
</div>

        )
    }
}
