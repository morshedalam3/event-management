import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Logo from '../../image/neerlogo.png';
const Header = () => {

    return (
        <nav className="navbar navbar-expand navbar-light bg-dark py-2 fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="Hot Onion Logo"/>
                </Link>
               
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                             <Link to="/admin" className="nav-link">DashBoard</Link> 
                    </li>
                    <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                <button className="btn btn-danger btn-rounded">Sign Up</button>
                            </Link>
        
                       
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;