import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="main-page-title">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/manage">Manage</NavLink>
        <NavLink to="/setting">Setting</NavLink>
      </div>
      <div className="sign">
        <NavLink to="/signin">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </header>
  );
};

export default Header;
