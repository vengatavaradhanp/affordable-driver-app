import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-new.svg";

export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <div className="container p-0">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <img style={{ width: "100%", height: "100%" }} src={logo} alt="" />
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">
              HOME
            </a>
            <a href="lessons" className="nav-item nav-link">
              LESSON PACKAGES
            </a>
            <a href="booking" className="nav-item nav-link">
              BOOK ONLINE
            </a>
            <a href="gift-card" className="nav-item nav-link">
              GIFT CARD
            </a>
            <a href="contact-us" className="nav-item nav-link ">
              CONTACT US
            </a>
          </div>
          <a
            href="/"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            <i className="fa fa-user-circle" /> Log In
          </a>
        </div>
      </div>
    </nav>
  );
}
