// essential imports
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// page styling
import "../assets/css/recipepagestyling.css";
import "../assets/css/style.css";

//components
import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";

//assets
import aboutushero from "../assets/images/aboutusintro.webp";
import aboutusdevs from "../assets/images/aboutusdevs.webp";

class aboutus extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About Us - Brewology Coffee</title>
        </Helmet>
        <Header />

        <main>
          <div className="overlay" />
          <div className="rows" id="row1">
            <img id="aboutusimg1" src={aboutushero} />
          </div>
          <div className="rows" id="row2">
            <img id="aboutusimg2" src={aboutusdevs} />
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default aboutus;
