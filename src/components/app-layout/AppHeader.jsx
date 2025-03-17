// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logos.svg";

// export default function AppHeader() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = window.location.pathname;
//   const navigate = useNavigate();

//   // Check login status from localStorage
//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(loggedIn === "true");
//   }, []);

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn"); // Clear login status
//     setIsLoggedIn(false); // Update state
//     navigate("/"); // Redirect to home page
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
//         <div className="container px-3">
//           {/* <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
//             <img style={{ width: "120px", height: "100%" }} src={logo} alt="" />
//           </a> */}

//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto p-4 p-lg-0">
//               <span class="navbar-text mt-1 fw-bold" style={{ color: '#2b9348', fontSize: '16px' }}><i class="bi bi-telephone-fill"></i> &nbsp;&nbsp;0418 858 111</span>
//               &nbsp;&nbsp;&nbsp;&nbsp;
//               <span class="navbar-text">
//                 <button type="button" class="btn btn-sm btn-outline-danger mx-2" onClick={() => navigate('/booking')}>Book Now</button>
//               </span>
//               <span class="navbar-text">
//                 <button type="button" class="btn btn-sm btn-outline-dark mx-2"  onClick={() => navigate('/login/student')}>Student Login</button>
//               </span>
//               <span class="navbar-text">
//                 <button type="button" class="btn btn-sm btn-warning mx-2"  onClick={() => navigate('/login/instructor')}>Instructor Login</button>
//               </span>

//             </div>
//           </div>
//         </div>
//       </nav>
//       <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
//         <div className="container p-0">

//           <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
//             <img style={{ width: "150px", position: 'relative', bottom: '25px' }} src={logo} alt="" />
//           </a>
//           <button
//             type="button"
//             className="navbar-toggler me-4"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto p-4 p-lg-0">
//               <a href="/" className={location === "/" ? "nav-item nav-link active" : "nav-item nav-link"}>HOME</a>
//               <a href="/lessons" className={location === "/lessons" ? "nav-item nav-link active" : "nav-item nav-link"}>LESSON PACKAGES</a>
//               <a href="/booking" className={location === "/booking" ? "nav-item nav-link active" : "nav-item nav-link"}>BOOK ONLINE</a>
//               <a href="/gift-card" className={location === "/gift-card" ? "nav-item nav-link active" : "nav-item nav-link"}>GIFT CARD</a>
//               <a href="/contact-us" className={location === "/contact-us" ? "nav-item nav-link active" : "nav-item nav-link"}>CONTACT US</a>
//               <a href="/admin/dashboard" className={location === "/contact-us" ? "nav-item nav-link active" : "nav-item nav-link"}>DASHBOARD</a>
              
//               {/* <a href="/login" className={"nav-item nav-link"}>Log In</a> */}
//               {/* {isLoggedIn ? (
//                 <button className="btn btn-danger p-4 px-5 d-none d-lg-block" onClick={handleLogout}>
//                   <i className="fa fa-sign-out-alt"></i> Log Out
//                 </button>
//               ) : (
//                 <a href="/login" className="btn btn-primary p-4 px-5 d-none d-lg-block">
//                   <i className="fa fa-user-circle"></i> Log In
//                 </a>
//               )} */}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Image, Dropdown } from "react-bootstrap";
// import logo from "../../assets/images/logos.svg";
// import defaultProfilePic from "../../assets/images/default-profile.png";
// import { useAuthState } from "react-firebase-hooks/auth";
// import {
//   auth,
//   logout,
//   signInWithFacebook,
//   signInWithGoogle,
// } from "../../pages/auth/firebaseconfig";

// export default function AppHeader() {
//   const navigate = useNavigate();
//   const [user] = useAuthState(auth);

//   // State variables
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userRole, setUserRole] = useState("");
//   const [loginMethod, setLoginMethod] = useState("");

//   // Check authentication state
//   useEffect(() => {
//     if (user) {
//       setIsLoggedIn(true);
//       setUserName(user.displayName || localStorage.getItem("userName") || "");
//       setUserEmail(user.email || localStorage.getItem("userEmail") || "");
//       setLoginMethod(localStorage.getItem("loginMethod") || "");
//       setUserRole(localStorage.getItem("userRole") || "");
//     } else {
//       setIsLoggedIn(false);
//       setUserName("");
//       setUserEmail("");
//       setUserRole("");
//       setLoginMethod("");
//     }
//   }, [user]); // Runs only when `user` changes

//   // Handle Logout
//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userRole");
//     localStorage.removeItem("loginMethod");

//     logout();

//     setIsLoggedIn(false);
//     setUserName("");
//     setUserEmail("");
//     setUserRole("");
//     setLoginMethod("");

//     navigate("/");
//   };

//   // Google Login
//   const googleLogin = () => {
//     handleLogout();
//     signInWithGoogle();
//     localStorage.setItem("loginMethod", "google");
//     setLoginMethod("google");
//   };

//   // Facebook Login
//   const facebookLogin = () => {
//     handleLogout();
//     signInWithFacebook();
//     localStorage.setItem("loginMethod", "facebook");
//     setLoginMethod("facebook");
//   };

//   return (
//     <>
//       {/* Top Navigation Bar */}
//       <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
//         <div className="container px-3">
//           <button
//             type="button"
//             className="navbar-toggler"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto p-4 p-lg-0">
//               <a
//                 href="tel:0418858111"
//                 className="navbar-text mt-1 fw-bold"
//                 style={{
//                   color: "#2b9348",
//                   fontSize: "16px",
//                   textDecoration: "none",
//                 }}
//               >
//                 <i className="bi bi-telephone-fill"></i> &nbsp;&nbsp;0418 858 111
//               </a>
//               &nbsp;&nbsp;&nbsp;&nbsp;
//               <span className="navbar-text">
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-outline-danger mx-2"
//                   onClick={() => navigate("/booking")}
//                 >
//                   Book Now
//                 </button>
//               </span>

//               {/* Login Buttons */}
//               {!isLoggedIn && !user && (
//                 <>
//                   <span className="navbar-text">
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-outline-dark mx-2"
//                       onClick={() => navigate("/login/student")}
//                     >
//                       Student Login
//                     </button>
//                   </span>
//                   <span className="navbar-text">
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-warning mx-2"
//                       onClick={() => navigate("/login/instructor")}
//                     >
//                       Instructor Login
//                     </button>
//                   </span>
//                   <span className="navbar-text">
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-danger mx-2"
//                       onClick={() => navigate("/login/admin")}
//                     >
//                       Admin Login
//                     </button>
//                   </span>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Navigation Bar */}
//       <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
//         <div className="container p-0">
//           <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
//             <img style={{ width: "150px", position: "relative", bottom: "25px" }} src={logo} alt="" />
//           </a>
//           <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto p-4 p-lg-0">
//               <a href="/" className="nav-item nav-link">HOME</a>
//               <a href="/lessons" className="nav-item nav-link">LESSON PACKAGES</a>
//               <a href="/booking" className="nav-item nav-link">BOOK ONLINE</a>
//               <a href="/gift-card" className="nav-item nav-link">GIFT CARD</a>
//               <a href="/contact-us" className="nav-item nav-link">CONTACT US</a>
//               {userRole === "admin" && <a href="/admin/dashboard" className="nav-item nav-link">DASHBOARD</a>}
//             </div>
//           </div>

//           {/* Profile Dropdown */}
//           {(isLoggedIn || user) && (
//             <Dropdown align="end">
//               <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center me-4 navbar-text btn-sm">
//                 <Image src={user?.photoURL || defaultProfilePic} roundedCircle width="40" height="40" className="me-2" />
//                 <span>{userName || user?.displayName || user?.email}</span>
//               </Dropdown.Toggle>

//               <Dropdown.Menu className="border-1 border-primary shadow">
//                 <Dropdown.ItemText className="text-center navbar-text">
//                   <p className="mb-0">{userEmail || user?.email}</p>
//                 </Dropdown.ItemText>
//                 <Dropdown.Divider />
//                 <Dropdown.Item className="navbar-text" onClick={() => navigate("/profile")}>
//                   <i className="fa fa-user"></i> View Profile
//                 </Dropdown.Item>
//                 <Dropdown.Item className="navbar-text" onClick={handleLogout}>
//                   <i className="fa fa-sign-out"></i> Log Out
//                 </Dropdown.Item>
//                 {loginMethod !== "google" && (
//                   <Dropdown.Item className="navbar-text" onClick={googleLogin}>
//                     <i className="fa fa-google"></i> Sign in with Google
//                   </Dropdown.Item>
//                 )}
//                 {loginMethod !== "facebook" && (
//                   <Dropdown.Item className="navbar-text" onClick={facebookLogin}>
//                     <i className="fa fa-facebook"></i> Sign in with Facebook
//                   </Dropdown.Item>
//                 )}
//               </Dropdown.Menu>
//             </Dropdown>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Button, Dropdown } from "react-bootstrap";
import logo from "../../assets/images/logos.svg";
import defaultProfilePic from "../../assets/images/default-profile.png";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logout,
  signInWithFacebook,
  signInWithGoogle,
} from "../../pages/auth/firebaseconfig";

export default function AppHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loginMethod, setLoginMethod] = useState("");
  const location = window.location.pathname;
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setUserName(localStorage.getItem("userName") || "");
    setUserEmail(localStorage.getItem("userEmail") || "");
    setLoginMethod(localStorage.getItem("loginMethod") || "");
    setUserRole(localStorage.getItem("userRole") || "");
  }, [setIsLoggedIn]); // Empty dependency array ensures this runs only once

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setUserName(localStorage.removeItem("userName"));
    setUserEmail(localStorage.removeItem("userEmail"));
    setUserRole(localStorage.removeItem("userRole"));
    localStorage.removeItem("loginMethod");
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    logout();
    setIsLoggedIn(false);
    setLoginMethod("");
    navigate("/");
  };

  const googleLogin = () => {
    handleLogout();
    signInWithGoogle();
    localStorage.setItem("loginMethod", "google");
    setLoginMethod("google");
  };

  const facebookLogin = () => {
    handleLogout();
    signInWithFacebook();
    localStorage.setItem("loginMethod", "facebook");
    setLoginMethod("facebook");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2">
        <div className="container px-3">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a
                href="tel:0418858111"
                className="navbar-text mt-1 fw-bold"
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
                  className="btn btn-sm btn-outline-danger mx-2"
                  onClick={() => navigate("/booking")}
                >
                  Book Now
                </button>
              </span>
              {isLoggedIn || user ? (
                <></>
              ) : (
                <>
                  <span className="navbar-text">
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
                  </span>
                  <span className="navbar-text">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger mx-2"
                      onClick={() => navigate("/login/admin")}
                    >
                      Admin Login
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
              {userRole === "admin" ? (
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
              )}
            </div>
          </div>
          {isLoggedIn || user ? (
            <Dropdown align="end" >
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="d-flex align-items-center me-4 navbar-text  btn-sm"
                style={{border: '0px'}}
              >
                <Image
                  src={user?.photoURL || defaultProfilePic}
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-2"
                />
                <span style={{textTransform: 'capitalize'}}>{userName || user?.displayName || user?.email}</span>
                <style>
                  {`
                        .navbar-text:hover {
                            color: green; /* Change text color to green on hover */
                        }
                    `}
                </style>
              </Dropdown.Toggle>

              <Dropdown.Menu className="border-1 border-primary shadow">
                <Dropdown.ItemText className="text-center navbar-text">
                  <p className="mb-0">{userEmail || user?.email}</p>
                </Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item
                  className="navbar-text"
                  onClick={() => navigate("/profile")}
                >
                  <i className="fa fa-sign-out"></i> View Profile
                </Dropdown.Item>
                <Dropdown.Item className="navbar-text" onClick={handleLogout}>
                  <i className="fa fa-sign-out"></i> Log Out
                </Dropdown.Item>
                {/* {loginMethod !== "google" && (
                  <Dropdown.Item className="navbar-text" onClick={googleLogin}>
                    <i className="fa fa-sign-out"></i> Sign in with Google
                  </Dropdown.Item>
                )}
                {loginMethod !== "facebook" && (
                  <Dropdown.Item
                    className="navbar-text"
                    onClick={facebookLogin}
                  >
                    <i className="fa fa-sign-out"></i> Sign in with Facebook
                  </Dropdown.Item>
                )} */}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
}
