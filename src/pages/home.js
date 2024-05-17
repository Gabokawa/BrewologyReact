// essential imports
import React from "react";
import { Link } from "react-router-dom";

// page styling
import '../assets/css/mainstyle.css';

// java
// import '../assets/js/signupfunction.js';

class Home extends React.Component{
    render() {
        return(
            <div>
                <header className="baskervillefont">
                    <a href="#row1"><div id="logo"><img src="/assets/images/headerlogo.png" /></div></a>
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
                    <div className="rows scrollsnapclass" id="row1">
                    <video autoPlay muted loop>
                        <source src="/assets/images/landingbgvid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <img id="herologo" src="/assets/images/herologo.png" />
                    <a id="brewbutton" href="#row2"><div id="brewbuttoncontainer">
                        <h3 className="playfairdisplayfont" id="brewtext">Start Brewing</h3>
                        </div></a>
                    </div> 
                    <div className="rows scrollsnapclass" id="row2">
                    <div className="previewtext">
                        <a href="recipepage1.html" className="nostylelinks"><h1>COFFEE RECIPE 1</h1></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <a href="#row3">
                        <div className="gonextbutton">
                        <img className="nextpic" src="/assets/images/next.png" />
                        </div>
                    </a>
                    </div>
                    <div className="rows scrollsnapclass" id="row3">
                    <div className="previewtext2">
                        <a href="recipepage2.html" className="nostylelinks"><h1>COFFEE RECIPE 2</h1></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <a href="#row4">
                        <div className="gonextbutton">
                        <img className="nextpic" src="/assets/images/next.png" />
                        </div>
                    </a>
                    </div>
                    <div className="rows scrollsnapclass" id="row4">
                    <div className="previewtext">
                        <a href="recipepage3.html" className="nostylelinks"><h1>COFFEE RECIPE 3</h1></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <a href="#row5">
                        <div className="gonextbutton">
                        <img className="nextpic" src="/assets/images/next.png" />
                        </div>
                    </a>
                    </div>
                    <div className="rows scrollsnapclass" id="row5">
                    <div id="signup">
                        <center><h1 className="playfairdisplayfont">Join our Newsletter!</h1></center>
                        <input id="emailfield" type="textfield" placeholder="Email" />
                        <input id="pwordfield" type="password" placeholder="Password" />
                        <a id="signupbutton" href="#"><div>
                            <h3 className="playfairdisplayfont" id="brewtext">Sign Up</h3>
                        </div></a>
                        <div className="overlay" />
                        <div id="signupmodal">
                        <center><h2>SIGN UP SUCCESS</h2></center>
                        <p>Your account with credentials: </p>
                        <p id="emailstring">Default string</p>
                        <p id="pwordstring">Default string</p>
                        <p>has been added to our database</p>
                        </div>
                    </div>
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

export default Home;