// import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // Import the context
// import AppHeader from "../components/app-layout/AppHeader";
// import AppFooter from "../components/app-layout/AppFooter";
// import NotAuthorized from "../pages/not-authorized";
// import { Navbar, Container, Button, Offcanvas, Nav, Stack } from "react-bootstrap";
// import { useState } from "react";
// import ListGroup from 'react-bootstrap/ListGroup';
// import logos from '../assets/images/logos.svg'
// import { MenuList } from "../utils/constant";

// const isAdmin = true;

// const AdminRoute = () => {
//     const { user } = useAuth();
//     const [activeItem, setActiveItem] = useState("/admin/dashboard")
//     const [show, setShow] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const navigate = useNavigate()

//     return user ? (isAdmin ? <>
//         <div style={{ overflowX: "hidden" }}>
//             {/* Header */}
//             <nav className="navbar navbar-dark fixed-top" style={{
//                 width: "100%",
//                 height: "60px",

//                 top: "0px",

//                 transition: "0.3s ease",
//                 background: '#2b9348',
//                 boxShadow: '0 4px 6px -2px rgba(0, 0, 0, 0.1)',
//                 left: !isSidebarOpen ? "0px" : "250px",
//             }}>
//                 <div className="container-fluid" >
//                     <button
//                         className="btn btn-outline-primary"
//                         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                         style={{ color: '#fff', border: '1px solid #fff' }}
//                     >
//                         ☰
//                     </button>

//                 </div>
//             </nav>

//             {/* Sidebar */}
//             <div

//                 style={{
//                     width: "250px",
//                     height: "100vh",
//                     position: "fixed",
//                     top: "0px",
//                     left: isSidebarOpen ? "0" : "-250px",
//                     transition: "0.3s ease",
//                     // paddingTop: "50px",
//                     background: '#fff',
//                     boxShadow: '4px 0 6px -2px rgba(0, 0, 0, 0.1)',
//                 }}
//             >
//                 <div style={{ textAlign: 'center' }}>
//                     <img src={logos} style={{ width: '150px', padding: '10px 0px' }} />
//                 </div>

//                 <div style={{ paddingTop: '10px' }}>
//                     <ListGroup defaultActiveKey="#link1" >
//                         {
//                             MenuList.map((item, index) => <ListGroup.Item action active={item.link === activeItem} key={index} onClick={() => {
//                                 setActiveItem(item.link)
//                                 navigate(item.link)
//                             }}>
//                             <div className="py-1"><span style={{ paddingRight: '10px' }}><i class={`bi ${item.icon}`}></i></span>{item.name}</div>
//                         </ListGroup.Item>)
//                         }
//                     </ListGroup>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div
//                 style={{
//                     marginLeft: isSidebarOpen ? "250px" : "0",
//                     transition: "0.3s ease",
//                     padding: "30px 20px",
//                     marginTop: '50px'
//                 }}
//             >
//                 <Outlet />
//             </div>
//         </div>
//     </> : <NotAuthorized />) : <Navigate to="/" replace />;
// };

// export default AdminRoute;

// import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // Import the context
// import AppHeader from "../components/app-layout/AppHeader";
// import AppFooter from "../components/app-layout/AppFooter";
// import NotAuthorized from "../pages/not-authorized";
// import { Navbar, Container, Button, Offcanvas, Nav, Stack } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import ListGroup from 'react-bootstrap/ListGroup';
// import logos from '../assets/images/logos.svg'
// import { MenuList } from "../utils/constant";
// import AppLoader from "../components/app-layout/AppLoader";

// const AdminRoute = () => {
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const { user } = useAuth();
//     const [activeItem, setActiveItem] = useState("/admin/dashboard");
//     const [show, setShow] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const checkAdminStatus = async () => {
//             const role = await localStorage.getItem("userRole");
//             setIsAdmin(role === "admin");
//             setLoading(false);
//         };
//         checkAdminStatus();
//     }, []);

//     if (loading) {
//         return <div><AppLoader /></div>;
//     }

//     return user ? (isAdmin ? (
//         <div style={{ overflowX: "hidden" }}>
//             {/* Header */}
//             <nav className="navbar navbar-dark fixed-top" style={{
//                 width: "100%",
//                 height: "60px",
//                 top: "0px",
//                 transition: "0.3s ease",
//                 background: '#2b9348',
//                 boxShadow: '0 4px 6px -2px rgba(0, 0, 0, 0.1)',
//                 left: !isSidebarOpen ? "0px" : "250px",
//             }}>
//                 <div className="container-fluid">
//                     <button
//                         className="btn btn-outline-primary"
//                         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                         style={{ color: '#fff', border: '1px solid #fff' }}
//                     >
//                         ☰
//                     </button>
//                     {/* home button */}
//                     {/* <button
//                         className="btn btn-outline-primary"
//                         onClick={() => navigate("/")}
//                         style={{ color: '#fff', border: '1px solid #fff' }}
//                     >
//                         Home
//                     </button> */}
//                 </div>
//             </nav>

//             {/* Sidebar */}
//             <div style={{
//                 width: "250px",
//                 height: "100vh",
//                 position: "fixed",
//                 top: "0px",
//                 left: isSidebarOpen ? "0" : "-250px",
//                 transition: "0.3s ease",
//                 background: '#fff',
//                 boxShadow: '4px 0 6px -2px rgba(0, 0, 0, 0.1)',
//             }}>
//                 <div style={{ textAlign: 'center', cursor: 'pointer' }}
//                 onClick={() => navigate("/")}
//                 >
//                     <img src={logos} style={{ width: '150px', padding: '10px 0px' }} />

//                 </div>

//                 <div style={{ paddingTop: '10px' }}>
//                     <ListGroup defaultActiveKey="#link1">
//                         {MenuList.map((item, index) => (
//                             <ListGroup.Item action active={item.link === activeItem} key={index} onClick={() => {
//                                 setActiveItem(item.link);
//                                 navigate(item.link);
//                             }}>
//                                 <div className="py-1">
//                                     <span style={{ paddingRight: '10px' }}>
//                                         <i className={`bi ${item.icon}`}></i>
//                                     </span>
//                                     {item.name}
//                                 </div>
//                             </ListGroup.Item>
//                         ))}
//                     </ListGroup>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div style={{
//                 marginLeft: isSidebarOpen ? "250px" : "0",
//                 transition: "0.3s ease",
//                 padding: "30px 20px",
//                 marginTop: '50px'
//             }}>
//                 <Outlet />
//             </div>
//         </div>
//     ) : <NotAuthorized />) : <Navigate to="/" replace />;
// };

// export default AdminRoute;

import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the context
import AppHeader from "../components/app-layout/AppHeader";
import AppFooter from "../components/app-layout/AppFooter";
import NotAuthorized from "../pages/not-authorized";
import {
  Navbar,
  Container,
  Button,
  Offcanvas,
  Nav,
  Stack,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import logos from "../assets/images/logos.svg";
import { MenuList } from "../utils/constant";
import AppLoader from "../components/app-layout/AppLoader";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [activeItem, setActiveItem] = useState("/admin/dashboard");
  const [show, setShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const loginSelector = useSelector((state) => state.auth);

  console.log("#############################", loginSelector);


  useEffect(() => {
    if (loginSelector.token !== null) {
      setIsAdmin(loginSelector.user?.role === "admin");
      setLoading(false);
    }
  }, [loginSelector]);

  if (loading) {
    return (
      <div>
        <AppLoader />
      </div>
    );
  }

  return user ? (
    isAdmin ? (
      <div style={{ overflowX: "hidden" }}>
        {/* Header */}
        <nav
          className="navbar navbar-dark fixed-top"
          style={{
            width: "100%",
            height: "60px",
            top: "0px",
            transition: "0.3s ease",
            background: "#2b9348",
            boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.1)",
            left: !isSidebarOpen ? "0px" : "250px",
          }}
        >
          <div className="container-fluid">
            <button
              className="btn btn-outline-primary"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{ color: "#fff", border: "1px solid #fff" }}
            >
              ☰
            </button>
            {/* home button */}
            {/* <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate("/")}
                        style={{ color: '#fff', border: '1px solid #fff' }}
                    >
                        Home
                    </button> */}
          </div>
        </nav>

        {/* Sidebar */}
        <div
          style={{
            width: "250px",
            height: "100vh",
            position: "fixed",
            top: "0px",
            left: isSidebarOpen ? "0" : "-250px",
            transition: "0.3s ease",
            background: "#fff",
            boxShadow: "4px 0 6px -2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img src={logos} style={{ width: "150px", padding: "10px 0px" }} />
          </div>

          <div style={{ paddingTop: "10px" }}>
            <ListGroup defaultActiveKey="#link1">
              {MenuList.map((item, index) => (
                <ListGroup.Item
                  action
                  active={item.link === activeItem}
                  key={index}
                  onClick={() => {
                    setActiveItem(item.link);
                    navigate(item.link);
                  }}
                >
                  <div className="py-1">
                    <span style={{ paddingRight: "10px" }}>
                      <i className={`bi ${item.icon}`}></i>
                    </span>
                    {item.name}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            marginLeft: isSidebarOpen ? "250px" : "0",
            transition: "0.3s ease",
            padding: "30px 20px",
            marginTop: "50px",
          }}
        >
          <Outlet />
        </div>
      </div>
    ) : (
      <NotAuthorized />
    )
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminRoute;
