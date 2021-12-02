import React from "react";
import { Link , useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  let location = useLocation();

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <li className="navbar-brand" >
          Pockedia Notes
        </li>
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
        <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/'? "active": "" } `} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about'? "active": "" } `} to="/about">
                About 
              </Link>
            </li>
          </ul>
          <li className="d-flex">
             <Link to="/" className="btn btn-outline-success btnNav" type="submit">
              Login
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
