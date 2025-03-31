import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Button, Dropdown } from "react-bootstrap";
import logo from "../../assets/images/logos.svg";
import defaultProfilePic from "../../assets/images/default-profile.png";
import AuthService from "../../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, logout } from "../../features/loginSlice";
import userService from "../../services/user.service";

export default function AppHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const location = window.location.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginSelector = useSelector((state) => state.auth);

  useEffect(() => {
    if (loginSelector.token !== null) {
      setIsLoggedIn(true);
      getProfileInfo()
    }
  }, [ loginSelector.token]);

  const getProfileInfo = () => {
    userService.getProfile().then((response) => {
      setUserInfo(response.data.data);
      dispatch(login({ token: loginSelector.token, user: response.data.data }));
    }
    ).catch((error) => {
      const errorResponse = error.response.data;
      if (error.status === 401) {
        dispatch(logout());
        localStorage.clear(); 
        setIsLoggedIn(false);
        toast.error("Session Expired. Please login again")
        navigate("/login");
      }
      console.log("Error", error);
    });
  }
 

  const handleLogout = () => {
    const payload = {};
    AuthService.logout(payload)
      .then((response) => {
        dispatch(logout());
        localStorage.clear(); // Clear auth token from storage
        navigate("/");
        setIsLoggedIn(false);
        toast.success("Logged out Successfully")
      })
      .catch((error) => {
        dispatch(logout());
        localStorage.clear(); // Clear auth token from storage
        navigate("/");
        setIsLoggedIn(false);
        toast.success("Logged out Successfully")
      });
     
  };
 
  return (
    <>
      {/* ===={JSON.stringify(userInfo)} */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
        <div className="container px-3">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a
                href="tel:0418858111"
                className="navbar-text mt-2 fw-bold"
                style={{
                  color: "#2b9348",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <i className="bi bi-telephone-fill"></i> &nbsp;&nbsp;0418 858
                111
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="navbar-text">
                <button
                  type="button"
                  className="btn btn-md btn-outline-danger mx-2"
                  onClick={() => navigate("/booking")}
                >
                  Book Now
                </button>
              </span>
              {isLoggedIn ? (
                <></>
              ) : (
                <>
                  {/* <span className="navbar-text">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-dark mx-2"
                      onClick={() => navigate("/login/student")}
                    >
                      Student Login
                    </button>
                  </span>
                  <span className="navbar-text">
                    <button
                      type="button"
                      className="btn btn-sm btn-warning mx-2"
                      onClick={() => navigate("/login/instructor")}
                    >
                      Instructor Login
                    </button>
                  </span> */}
                  <span className="navbar-text">
                    <button
                      type="button"
                      className="btn btn-md btn-warning mx-2"
                      onClick={() => navigate("/login")}
                      style={{ width: "100px" }}
                    >
                      Login
                    </button>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
        <div className="container p-0">
          <a
            href="/"
            className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <img
              style={{ width: "150px", position: "relative", bottom: "25px" }}
              src={logo}
              alt=""
            />
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
              <a
                href="/"
                className={
                  location === "/"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
              >
                HOME
              </a>
              <a
                href="/lessons"
                className={
                  location === "/lessons"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
              >
                LESSON PACKAGES
              </a>
              <a
                href="/booking"
                className={
                  location === "/booking"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
              >
                BOOK ONLINE
              </a>
              <a
                href="/gift-card"
                className={
                  location === "/gift-card"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
              >
                GIFT CARD
              </a>
              <a
                href="/contact-us"
                className={
                  location === "/contact-us"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
              >
                CONTACT US
              </a>
              {/* {userRole === "admin" ? (
                <a
                  href="/admin/dashboard"
                  className={
                    location === "/admin/dashboard"
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"
                  }
                >
                  DASHBOARD
                </a>
              ) : (
                <></>
              )} */}
            </div>
          </div>

          {isLoggedIn && (
            <Dropdown align="end">
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="d-flex align-items-center me-4 navbar-text  btn-sm"
                style={{ border: "0px" }}
              >
                <span style={{ textTransform: "capitalize", fontSize: "18px" }}>
                  {userInfo?.fname + " " + userInfo?.lname}
                </span>
                &nbsp;&nbsp;
                <Image
                  src={userInfo?.image || defaultProfilePic}
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-2"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="shadow">
                {userInfo?.role === "admin" && (
                  <Dropdown.Item
                    className="navbar-text"
                    onClick={() => navigate("/admin/dashboard")}
                  >
                    Dashboard
                  </Dropdown.Item>
                )}
                <Dropdown.Item
                  className="navbar-text"
                  onClick={() => navigate("/profile")}
                >
                  View Profile
                </Dropdown.Item>
                <Dropdown.Item className="navbar-text" onClick={handleLogout}>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </nav>
    </>
  );
}
