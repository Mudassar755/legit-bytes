import { Link } from 'gatsby'
import React from 'react'
import logo from '../assets/images/logo/logo-dark.png'

const Navbar = () => {
    return (
        <header class="header_area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="logo">
                        <Link to="/">
                            <div className="logo-icon">
                            <img src={logo} />
                            </div>
                            </Link>
                        <a class="nav-bars" href="#"><i class="fas fa-bars"></i></a>
                    </div>
                </div>
                <div class="col-lg-9">
                    {/* -- Main Menu -- */}
                    <div class="menu_area">
                        <ul>
                            {/* <li><Link to="/">Home</Link></li> */}
                            <li><Link to="/about-us">SERVICES</Link></li>
                            <li><Link to="/product-services">CASE STUDIES</Link></li>
                            <li><Link to="/contact-us">CAREERS</Link></li>
                            <li><Link to="/login">BLOG</Link></li> 
                            <li><Link to="/login">LET’S TALK</Link></li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Navbar
