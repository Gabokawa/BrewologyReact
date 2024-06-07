// essential imports
import React from "react";
import { Link } from "react-router-dom";

//assets
import headerlogo from '../assets/images/headerlogo.png';

class Header extends React.Component{
    render() {
        return(
            <div>
                <header className="baskervillefont">
                    <a href="#row1"><div id="logo"><img src={headerlogo} /></div></a>
                    <nav>
                    <label htmlFor="hamburger-menu" className="menu-icon"><i className="fas fa-bars" /></label>
                    <input type="checkbox" id="hamburger-menu" className="mobile mobile-menu" />
                    <ul id="navmenu">
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <a href="#" className="recipebutton">Recipes</a>
                        <div className="recipesubmenu">
                            <ul className="recipesubmenulist">
                            <li>
                                <Link to="/recipepage1">Cappuccino</Link>
                            </li>
                            <li>
                                <Link to="/recipepage2">Iced Mocha</Link>
                            </li>
                            <li>
                                <Link to="/recipepage3">Matcha Frappe</Link>
                            </li>
                            </ul>
                        </div>
                        </li>
                        <li>
                        <Link to="/aboutus">About Us</Link>
                        </li>
                    </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;