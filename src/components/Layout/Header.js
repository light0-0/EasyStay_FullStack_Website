import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsBuilding } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "../../styles/Header.css";
import SearchBox from './SearchBox';
const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark  sticky-sm-top  " id='navdark'>
<div className="container">
          <Link className="navbar-brand text-light"   to="/">
          <span id='wee'><h2>EasyStay</h2></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars />
            </span>
          </button>
          <div className="d-flex justify-content-center">
</div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-2">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  to="/category/sale"
                >
                  RoomMate
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  to="/category/rent"
                >
                  Rent
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  to="/offers"
                >
                  Offers
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
              {/* <li className="nav-item mx-2">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "active" : "inactive"}`}
                  to="/"
                >
                  About Us
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
