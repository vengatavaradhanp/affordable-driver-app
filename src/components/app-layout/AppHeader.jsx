import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logos.svg";

export default function AppHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = window.location.pathname;
  const navigate = useNavigate();

  // Check login status from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login status
    setIsLoggedIn(false); // Update state
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
        <div className="container px-3">
          {/* <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img style={{ width: "120px", height: "100%" }} src={logo} alt="" />
          </a> */}

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <span class="navbar-text mt-1 fw-bold" style={{ color: '#2b9348', fontSize: '16px' }}><i class="bi bi-telephone-fill"></i> &nbsp;&nbsp;0418 858 111</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span class="navbar-text">
                <button type="button" class="btn btn-sm btn-outline-danger mx-2" onClick={() => navigate('/booking')}>Book Now</button>
              </span>
              <span class="navbar-text">
                <button type="button" class="btn btn-sm btn-outline-dark mx-2"  onClick={() => navigate('/login/student')}>Student Login</button>
              </span>
              <span class="navbar-text">
                <button type="button" class="btn btn-sm btn-warning mx-2"  onClick={() => navigate('/login/instructor')}>Instructor Login</button>
              </span>

            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
        <div className="container p-0">

          <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img style={{ width: "150px", position: 'relative', bottom: '25px' }} src={logo} alt="" />
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
              <a href="/" className={location === "/" ? "nav-item nav-link active" : "nav-item nav-link"}>HOME</a>
              <a href="/lessons" className={location === "/lessons" ? "nav-item nav-link active" : "nav-item nav-link"}>LESSON PACKAGES</a>
              <a href="/booking" className={location === "/booking" ? "nav-item nav-link active" : "nav-item nav-link"}>BOOK ONLINE</a>
              <a href="/gift-card" className={location === "/gift-card" ? "nav-item nav-link active" : "nav-item nav-link"}>GIFT CARD</a>
              <a href="/contact-us" className={location === "/contact-us" ? "nav-item nav-link active" : "nav-item nav-link"}>CONTACT US</a>
              <a href="/admin/dashboard" className={location === "/contact-us" ? "nav-item nav-link active" : "nav-item nav-link"}>ADMIN</a>
              {/* <a href="/login" className={"nav-item nav-link"}>Log In</a> */}
              {/* {isLoggedIn ? (
                <button className="btn btn-danger p-4 px-5 d-none d-lg-block" onClick={handleLogout}>
                  <i className="fa fa-sign-out-alt"></i> Log Out
                </button>
              ) : (
                <a href="/login" className="btn btn-primary p-4 px-5 d-none d-lg-block">
                  <i className="fa fa-user-circle"></i> Log In
                </a>
              )} */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
