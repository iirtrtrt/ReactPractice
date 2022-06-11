import React from "react";
import "../Style.css";
import About from "./About";
import Tech from "./Tech";
import NavBar from "./NavBar";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app textColour background">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Main() {
  return (
    <div className="container">
      <div className="row">
        <div className="leftContent col">
          <h1 className="leftContentText">Study Smart.</h1>
          <h1 className="leftContentText">Wherever and Whenever.</h1>
        </div>
      </div>
      <div className="row">
        <div className="rightContent col">
        <h1 className="rightContentText">We use AI Technology to</h1>
          <h1 className="rightContentText">revolutionize the way you study</h1>
          <h1 className="rightContentText">
            Improved results are now possible
          </h1>
          <h1 className="rightContentText">when you use PinchPoint</h1>
        </div>
      </div>
    </div>
  );
}
