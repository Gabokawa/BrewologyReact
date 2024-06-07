// essential imports
import React from "react";
import { Link } from "react-router-dom";

// page styling
import '../assets/css/recipepagestyling.css';

//components
import Header from '../components/header';


class aboutus extends React.Component{
    render() {
        return(
            <div>
                <Header />
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