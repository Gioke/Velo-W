import React from 'react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-scroll';
import Logo from '../images/Logo2.jpg';
import NavbarLogo from '../images/navbarLogo.jpg';
import '../styles/header.css';

export const NavBar = () => {
    return (
        <nav className="nav-container">
           <div className="logo">
               <img src={ Logo } alt="logo"/>
           </div>
            <div className="text-logo">
                <img src={NavbarLogo} alt="logo2"/>
            </div>
            <ul className="nav-list">
                <li className="header-li"><Link to="/" >Home</Link></li>
                <li className="header-li"><Link to="/Info" >Info</Link></li>
                <li className="header-li"><Link to="/About">About</Link></li>
                <li className="header-li"><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}