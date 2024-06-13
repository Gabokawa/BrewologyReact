// essential imports
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// page styling
import '../assets/css/mainstyle.css';
import '../assets/css/style.css';

//components
import Header from '../components/header';
import Footer from '../components/footer';

//assets
import coffeevid from '../assets/images/landingbgvid.mp4';
import brewologylogo from '../assets/images/herologo.png';
import nextpic from '../assets/images/next.png';

class Home extends React.Component{
    render() {
        return(
            <div>
                <Helmet>
                    <title>Homepage - Brewology Coffee</title>
                </Helmet>
                <Header />
                <main>
                    <div className="rows scrollsnapclass" id="row1">
                    <video autoPlay muted loop>
                        <source src={coffeevid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <img id="herologo" src={brewologylogo} />
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
                        <img className="nextpic" src={nextpic} />
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
                        <img className="nextpic" src={nextpic} />
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
                        <img className="nextpic" src={nextpic} />
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
                        <p id="emailstring">Default sting</p>
                        <p id="pwordstring">Default string</p>
                        <p>has been added to our database</p>
                        </div>
                    </div>
                    </div>
                    <Footer />
                </main>
            </div>
        );
    }
}

export default Home;