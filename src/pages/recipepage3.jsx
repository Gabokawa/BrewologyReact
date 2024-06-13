// essential imports
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// page styling
import "../assets/css/recipepagestyling.css";

//components
import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";

class recipepage3 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Matcha Frappe - Brewology Coffee</title>
        </Helmet>
        <Header />
        <main>
          <div className="rows row1" id="rp3">
            <div className="overlay" />
            <div className="content">
              <center>
                <h1>MATCHA FRAPPE</h1>
              </center>
            </div>

            <Cards header="Ingredients" id="card1" />
            <Cards
              header="Steps"
              content="<ol>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quod id voluptate! Unde reprehenderit, perferendis illum expedita sunt odit repellat ducimus cupiditate nihil aperiam explicabo exercitationem maiores velit iure quam?</li>
                        </ol>"
              id="card2"
            />
            <Cards header="Gallery" id="card3" />
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default recipepage3;
