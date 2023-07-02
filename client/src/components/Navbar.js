import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../image/logo2.png";
import icon from "../image/icon.png";


import { UserContext } from '../App';

const Navbar = () => {

  const {state, dispatch} = useContext(UserContext);

  const RenderMenue = () => {
    if (state) {
      return (
      <>
      <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact">
                  Contact
                </NavLink>
              </li>
                <li className="nav-item"> 
                <NavLink className="nav-link active" to="/signout">
                  Log out
                </NavLink>
              </li>
      </>
      )
    } else {
      return (
        <>
        <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/signin">
                  Login
                </NavLink>
              </li>
              <li className="nav-item"> 
                <NavLink className="nav-link active" to="/signup">
                  Sign up
                </NavLink>
                </li>
        </>
      )
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img className="logo_img" src={logo} alt="logo" />
            <img className="icon_img" src={icon} alt="icon" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <RenderMenue />

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;