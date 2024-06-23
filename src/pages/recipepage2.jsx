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

class recipepage2 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Iced Mocha - Brewology Coffee</title>
        </Helmet>
        <Header />
        <main>
          <div className="rows row1" id="rp2">
            <div className="overlay" />
            <div className="content">
              <center>
                <h1
                  className="recipeheader"
                  style={{ color: "RGBA(255,205,155,0.9)" }}
                >
                  ICED MOCHA
                </h1>
              </center>
            </div>

            <Cards
              header="Ingredients"
              content="<ul>
                      <li>1 shot of espresso (about 1 ounce)</li>
                      <li>1 cup milk</li>
                      <li>2 tablespoons chocolate syrup</li>
                      <li>Ice cubes</li>
                      <li>Whipped cream (optional)</li>
                      <li>1 teaspoon sugar (optional)</li>
                      <li>1 teaspoon cocoa powder (for garnish)</li>
                      <li>1/4 teaspoon vanilla extract (optional)</li>
                      <li>1 tablespoon chocolate chips</li>
                      <li>1 tablespoon caramel syrup (optional)</li>
                      <li>1 tablespoon flavored syrup (hazelnut, vanilla, etc.)</li>
                      <li>1 teaspoon instant coffee granules (for stronger flavor)</li>
                      <li>1 tablespoon coffee liqueur (optional)</li>
                      <li>1 glass or tumbler</li>
                      <li>1 stirring stick or spoon</li>
                    </ul>"
              id="card1"
            />
            <Cards
              header="Steps"
              content="<ol>
                        <li><strong>Brew Espresso</strong>: Brew a shot of espresso and let it cool.</li>
                        <li><strong>Mix Ingredients</strong>: In a glass, mix the chocolate syrup with the cooled espresso.</li>
                        <li><strong>Optional Sweetener</strong>: Add sugar and vanilla extract to the mixture if desired.</li>
                        <li><strong>Add Milk</strong>: Pour the milk into the glass and stir well.</li>
                        <li><strong>Add Ice</strong>: Fill the glass with ice cubes.</li>
                        <li><strong>Top with Whipped Cream</strong>: If desired, top with whipped cream for extra indulgence.</li>
                        <li><strong>Garnish</strong>: Sprinkle cocoa powder on top of the whipped cream.</li>
                        <li><strong>Add Syrups</strong>: Drizzle caramel or flavored syrups on top if desired.</li>
                        <li><strong>Chocolate Chips</strong>: Add chocolate chips on top of the whipped cream.</li>
                        <li><strong>Extra Coffee Flavor</strong>: Add instant coffee granules or coffee liqueur for a stronger flavor.</li>
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

export default recipepage2;
