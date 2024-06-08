// essential imports
import React from "react";
import { Link } from "react-router-dom";

// page styling
import '../assets/css/recipepagestyling.css';

//components
import Header from '../components/header';
import Footer from '../components/footer';
import Cards from '../components/cards';


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
                    <Footer />
                </main>
            </div>

        );
    }
}

export default aboutus;