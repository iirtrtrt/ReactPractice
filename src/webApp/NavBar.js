import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navPadding navColour">
        <div>
          <Link to="/">
            <img src="./images/logo_non_background.png" alt="PinchPoint" />
          </Link>
        </div>
        <p className="navLogoText">PinchPoint</p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-auto"
          id="navbarSupportedContent"
        >
          <ul className="nav-links navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/about" className="navText hoverUnderbar">
                about
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/tech" className="navText hoverUnderbar">
                tech
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="navText hoverUnderbar">
                product
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/careers" className="navText hoverUnderbar">
                careers
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" className="navText hoverUnderbar">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}