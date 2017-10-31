import React from "react";
import { Link } from "react-router";
import "../../css/menu.css";

const Menu = () => (
  <nav className="navbar">
    <div className="container">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/leads" className="navbar-link">
            Novo Lead
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Menu;
