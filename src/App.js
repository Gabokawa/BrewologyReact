import Home from "./pages/home";
import RecipePage1 from "./pages/recipepage1";
import RecipePage2 from "./pages/recipepage2";
import RecipePage3 from "./pages/recipepage3";
import AboutUs from "./pages/aboutus";

import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/recipepage1" element={<RecipePage1 />} />
      <Route path="/recipepage2" element={<RecipePage2 />} />
      <Route path="/recipepage3" element={<RecipePage3 />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
