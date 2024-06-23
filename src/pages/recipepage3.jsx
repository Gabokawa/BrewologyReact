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
                <h1 className="recipeheader" style={{ color: "#7F8F4F" }}>
                  MATCHA FRAPPE
                </h1>
              </center>
            </div>

            <Cards
              header="Ingredients"
              content="<ul>
                        <li>1 teaspoon matcha powder</li>
                        <li>1/4 cup hot water</li>
                        <li>1 cup milk (dairy or non-dairy)</li>
                        <li>1 tablespoon sweetener (sugar, honey, or syrup)</li>
                        <li>Ice cubes</li>
                        <li>1/2 teaspoon vanilla extract (optional)</li>
                        <li>1 tablespoon whipped cream (optional)</li>
                        <li>1 teaspoon matcha syrup (optional)</li>
                        <li>1/4 teaspoon ground cinnamon (optional)</li>
                        <li>1 tablespoon coconut flakes (optional)</li>
                        <li>1 tablespoon chocolate syrup (optional)</li>
                        <li>1 teaspoon chia seeds (optional)</li>
                        <li>1 teaspoon collagen powder (optional)</li>
                        <li>1 glass or tumbler</li>
                        <li>1 blender</li>
                      </ul>"
              id="card1"
            />
            <Cards
              header="Steps"
              content="<ol>
                        <li><strong>Prepare Matcha</strong>: Whisk the matcha powder with hot water until smooth.</li>
                        <li><strong>Blend Ingredients</strong>: In a blender, combine the prepared matcha, milk, sweetener, and a handful of ice cubes.</li>
                        <li><strong>Optional Flavor</strong>: Add vanilla extract, matcha syrup, or ground cinnamon for extra flavor.</li>
                        <li><strong>Blend Until Smooth</strong>: Blend until the mixture is smooth and frothy.</li>
                        <li><strong>Serve</strong>: Pour the blended mixture into a glass.</li>
                        <li><strong>Top with Whipped Cream</strong>: Optionally, top with whipped cream.</li>
                        <li><strong>Garnish</strong>: Sprinkle coconut flakes on top of the whipped cream.</li>
                        <li><strong>Add Syrups</strong>: Drizzle chocolate syrup on top if desired.</li>
                        <li><strong>Chia Seeds</strong>: Add chia seeds for added texture and nutrition.</li>
                        <li><strong>Collagen Powder</strong>: Optionally, mix in collagen powder for a protein boost.</li>
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
