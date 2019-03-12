
import React from 'react';
import logo from '../images/logo.png'

const Header = (props) => (
    <div>
        <div className="navbar-fixed">
            <nav className="blue">
                <div className="container" style={{height:100 +'%'}}>
                    <div className="nav-wrapper" style={{height:100 +'%'}}>
                        <a href="#" className="brand-logo" style={{height:100 +'%'}}>
                            <img src={logo} Height="100%" Width="100px" />
                        </a>
                        <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#print">Print Ticket</a>
                            </li>
                            <li>
                                <a href="#cancel">Cancel Ticket</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <a href="#terms">Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <ul className="sidenav" id="mobile-nav">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#print">Print Ticket</a>
            </li>
            <li>
                <a href="#cancel">Cancel Ticket</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <a href="#terms">Terms</a>
            </li>
        </ul>
    </div>
)

export default Header;