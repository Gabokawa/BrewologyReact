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

class recipepage1 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Capuccino - Brewology Coffee</title>
        </Helmet>
        <Header />
        <main>
          <div className="rows row1" id="rp1">
            <div className="overlay" />
            <div className="content">
              <center>
                <h1 className="recipeheader">CAPPUCCINO</h1>
              </center>
            </div>

            <Cards
              header="Ingredients"
              content="
                    <ul>
                    <li>1 shot of espresso (about 1 ounce)</li>
                    <li>1/3 cup steamed milk</li>
                    <li>1/3 cup milk foam</li>
                    <li>1 teaspoon sugar (optional)</li>
                    <li>1 teaspoon cocoa powder (for garnish)</li>
                    <li>1/4 teaspoon vanilla extract (optional)</li>
                    <li>1/4 teaspoon ground cinnamon (optional)</li>
                    <li>1/4 teaspoon ground nutmeg (optional)</li>
                    <li>1 tablespoon chocolate shavings (optional)</li>
                    <li>1 tablespoon caramel syrup (optional)</li>
                    <li>1 tablespoon flavored syrup (hazelnut, vanilla, etc.)</li>
                    <li>1 dash of sea salt (optional)</li>
                    <li>1 teaspoon whipped cream (optional)</li>
                    <li>1 espresso cup</li>
                    <li>1 milk frother or steam wand</li>
                  </ul>"
              id="card1"
            />

            <Cards
              header="Steps"
              content="
                    <ol>
                    <li><strong>Brew Espresso</strong>: Brew a shot of espresso using an espresso machine.</li>
                    <li><strong>Steam Milk</strong>: Use a steam wand to heat and froth the milk until you have both steamed milk and a layer of milk foam.</li>
                    <li><strong>Optional Sweetener</strong>: Add sugar and vanilla extract to the steamed milk if desired.</li>
                    <li><strong>Pour Milk</strong>: Pour the steamed milk over the espresso, holding back the foam with a spoon.</li>
                    <li><strong>Top with Foam</strong>: Spoon the milk foam on top of the steamed milk and espresso mixture.</li>
                    <li><strong>Garnish</strong>: Sprinkle cocoa powder, cinnamon, or nutmeg on top of the foam.</li>
                    <li><strong>Add Syrups</strong>: Drizzle caramel or flavored syrups on top if desired.</li>
                    <li><strong>Chocolate Shavings</strong>: Add chocolate shavings on top of the foam for extra flavor.</li>
                    <li><strong>Sea Salt</strong>: Add a dash of sea salt on top if you like a salty-sweet taste.</li>
                    <li><strong>Whipped Cream</strong>: Optionally, top with a dollop of whipped cream.</li>
                  </ol>"
              id="card2"
            />

            <Cards header="Gallery" content="" id="card3" />
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default recipepage1;
