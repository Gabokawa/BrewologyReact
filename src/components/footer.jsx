// essential imports
import React from "react";
import { Link } from "react-router-dom";

// page styling
import '../assets/css/mainstyle.css';
import '../assets/css/style.css';

class footer extends React.Component{
    render() {
        return (
            <div>
                <footer>
                    <h4>Nacaytuna, Soriano Inc. All rights reserved</h4>
                    <ul>
                        <li><a href="#">Privacy Policy |</a></li>
                        <li><a href="#">Accessibility |</a></li>
                        <li><a href="#">Legal Notices</a></li>
                    </ul>
                    </footer>
            </div>
        )
    }
}

export default footer;