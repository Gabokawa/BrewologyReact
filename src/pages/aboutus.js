// essential imports
import React from "react";
import { Link } from "react-router-dom";

// page styling
import '../assets/css/recipepagestyling.css';


class aboutus extends React.Component{
    render() {
        return(
            <div>
                <header className="baskervillefont">
                    <a href="#row1"><div id="logo">
                        <img src="images\headerlogo.png" />
                    </div></a>
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
                <main>
                    <div className="rows" id="row1">
                    <div className="overlay" />
                    <div className="content"><center><h1>ABOUT US HERE</h1></center></div>
                    </div>
                    <footer>
                    <h4>Nacaytuna, Soriano Inc. All rights reserved</h4>
                    <ul>
                        <li><a href="#">Privacy Policy |</a></li>
                        <li><a href="#">Accessibility |</a></li>
                        <li><a href="#">Legal Notices</a></li>
                    </ul>
                    </footer>
                </main>
            </div>

        );
    }
}

export default aboutus;