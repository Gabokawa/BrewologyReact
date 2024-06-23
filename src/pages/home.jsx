// essential imports
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// page styling
import "../assets/css/mainstyle.css";
import "../assets/css/style.css";

//components
import Header from "../components/header";
import Footer from "../components/footer";

//assets
import coffeevid from "../assets/images/landingbgvid.webm";
import brewologylogo from "../assets/images/herologo.png";
import nextpic from "../assets/images/next.png";

class Home extends React.Component {
  snapscroll = (targetId) => (event) => {
    event.preventDefault();

    const target = document.getElementById(targetId);

    console.log("target id" + targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  showModal = () => {
    const email = document.getElementById("emailfield").value;
    console.log("emailfield value: " + email);
    const password = document.getElementById("pwordfield").value;
    console.log("passwordfield value: " + password);
    document.getElementById("emailstring").innerText = "Email: " + email;
    console.log(
      "emailstring.innertext set to " +
        document.getElementById("emailstring").innerText
    );
    document.getElementById("pwordstring").innerText = "Password: " + password;
    console.log(
      "pwordstring.innertext set to " +
        document.getElementById("pwordstring").innerText
    );

    document.getElementById("signupmodal").style.display = "block";
    document.getElementById("signupmodal").classList.add("shown");
    document.querySelector(".overlay").style.display = "block";
  };

  hideModal = () => {
    document.getElementById("signupmodal").style.display = "none";
    document.getElementById("signupmodal").classList.remove("shown");
    document.querySelector(".overlay").style.display = "none";
  };

  componentDidMount() {
    document
      .getElementById("signupbutton")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.showModal();
      });

    document
      .querySelector(".overlay")
      .addEventListener("click", this.hideModal);

    document
      .getElementById("signupmodal")
      .addEventListener("click", this.hideModal);
  }

  render() {
    return (
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
            <a
              id="brewbutton"
              style={{ cursor: "pointer" }}
              onClick={this.snapscroll("row2")}
            >
              <div id="brewbuttoncontainer">
                <h3 className="playfairdisplayfont" id="brewtext">
                  Start Brewing
                </h3>
              </div>
            </a>
          </div>
          <div className="rows scrollsnapclass" id="row2">
            <div className="previewtext">
              <Link to="/recipepage1" className="nostylelinks">
                <h1>Cappuccino</h1>
              </Link>
              <p>
                A cappuccino is a classic coffee drink crafted with equal parts
                of espresso, steamed milk, and milk foam. Its rich, robust
                flavor is perfectly balanced by the creamy texture of the milk,
                creating a delightful, aromatic experience. This beloved
                beverage is often enjoyed in the morning, providing a perfect
                blend of caffeine and comfort. Whether sipped slowly in a cozy
                café or enjoyed on the go, a cappuccino offers a moment of
                indulgence and sophistication, making it a favorite choice for
                coffee enthusiasts worldwide.
              </p>
            </div>
            <a style={{ cursor: "pointer" }} onClick={this.snapscroll("row3")}>
              <div className="gonextbutton">
                <img className="nextpic" src={nextpic} />
              </div>
            </a>
          </div>
          <div className="rows scrollsnapclass" id="row3">
            <div className="previewtext2">
              <Link to="/recipepage2" className="nostylelinks">
                <h1>Iced Mocha</h1>
              </Link>
              <p>
                An iced mocha is a refreshing and indulgent coffee drink that
                combines the bold taste of espresso with the sweet, rich flavor
                of chocolate syrup, all poured over ice and topped with creamy
                milk. This delightful beverage is perfect for hot days,
                providing a cool and energizing treat. The harmonious blend of
                coffee and chocolate creates a satisfying and luxurious taste
                experience, making it a popular choice for those seeking a
                deliciously chilled coffee with a sweet twist.
              </p>
            </div>
            <a style={{ cursor: "pointer" }} onClick={this.snapscroll("row4")}>
              <div className="gonextbutton">
                <img className="nextpic" src={nextpic} />
              </div>
            </a>
          </div>
          <div className="rows scrollsnapclass" id="row4">
            <div className="previewtext">
              <Link to="/recipepage3" className="nostylelinks">
                <h1>Matcha Frappe</h1>
              </Link>
              <p>
                A matcha frappe is a vibrant, refreshing drink made with finely
                ground matcha green tea, blended with ice, milk, and a touch of
                sweetener. This frothy, cool beverage offers a unique, earthy
                flavor that's both energizing and soothing. Perfect for warm
                weather, a matcha frappe delivers a delightful combination of
                creamy texture and invigorating taste. The natural antioxidants
                and subtle sweetness make it a favorite among those looking for
                a healthy yet indulgent treat, capturing the essence of
                traditional matcha in a modern, refreshing form.
              </p>
            </div>
            <a style={{ cursor: "pointer" }} onClick={this.snapscroll("row5")}>
              <div className="gonextbutton">
                <img className="nextpic" src={nextpic} />
              </div>
            </a>
          </div>
          <div className="rows scrollsnapclass" id="row5">
            <div id="signup">
              <center>
                <h1 className="playfairdisplayfont">Join our Newsletter!</h1>
              </center>
              <input id="emailfield" type="textfield" placeholder="Email" />
              <input id="pwordfield" type="password" placeholder="Password" />
              <a id="signupbutton" href="#">
                <div>
                  <h3 className="playfairdisplayfont" id="brewtext">
                    Sign Up
                  </h3>
                </div>
              </a>
              <div className="overlay" />
              <div id="signupmodal">
                <center>
                  <h2>SIGN UP SUCCESS</h2>
                </center>
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
