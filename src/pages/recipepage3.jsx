// essential imports
import React from "react";
import { Link } from "react-router-dom";

// page styling
import '../assets/css/recipepagestyling.css';

//components
import Header from '../components/header';

class recipepage3 extends React.Component{
    render() {
        return(
            <div>
                <Header />
                <main>
                    <div className="rows row1" id="rp3">
                    <div className="overlay" />
                    <div className="content"><center><h1>MATCHA FRAPPE</h1></center></div>
                    <div className="cards" id="card1">
                        <h1>Ingredients</h1>    
                    </div>
                    <div className="cards" id="card2">
                        <h1>Steps</h1>
                        <ol>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        </ol>
                    </div>
                    <div className="cards" id="card3">
                        <h1>Gallery</h1>
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

export default recipepage3;