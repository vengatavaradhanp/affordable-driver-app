import React, { useState } from "react";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logos.svg";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, googleProvider, facebookProvider,signInWithGoogle, signInWithFacebook, logout} from "../../pages/auth/firebaseconfig"
import { useAuthState } from "react-firebase-hooks/auth";







const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = useParams()
  const [user] = useAuthState(auth); // Tracks login state
  
  console.log(type)
  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Optional if using only toast notifications
    if (!email || !password) {
      toast.error("Please enter email and password.");
      return;
  }
    try {
      const response = await axios.post(
        "https://datatechgenius.com/expert-driver/public/index.php/api/login",
        {
          email, password
        }
      );
      if (response.status === 200) {
        console.log("User Data:", response);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        

        // Show success toast
        toast.success("Login successful!");

        // Redirect to the home page or previous page
        const redirectPath = location.state?.from || "/";
        navigate(redirectPath);
      } else {
        toast.error(response.data.message || "Login failed.");
      }
    } catch (error) {
      // Show error toast for unsuccessful login
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  // Handle Login Submit
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setErrorMessage("");
  //   // navigate("/");

  //   try {
  //     const response = await axios.post(
  //       "https://datatechgenius.com/expert-driver/public/index.php/api/login",
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     if (response.status === 200) {
  //       console.log("User Data:", response.data.user);
  //         sessionStorage.setItem("isLoggedIn", "true");
  //         sessionStorage.setItem("userData", JSON.stringify(response.data.user));


  //       // Show success toast
  //       toast.success("Login successful!");
  //     } 
  //     else {
  //     toast.error(response.data.message || "Login failed.");
  //     }
  //   } catch (error) {
  //     setErrorMessage(
  //       error.response?.data?.message || "An error occurred. Please try again."
  //     );
  //   }
  // };  

  // const handleLogin = () => {
  //   // Simulate authentication
  //   localStorage.setItem("isLoggedIn", "true");

  //   // Redirect back to purchase page if user was sent from there
  //   const redirectPath = location.state?.from || "/";
  //   navigate(redirectPath);
  // };


  return (
    <>
      {/* <Container>sadsa</Container> */}
      <div
        // fluid
        className="vh-100 "
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div
          className="container-fluid page-header p-0 mt-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div
            className="container"
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h3 className="display-5 text-light mb-5" style={{textTransform: 'capitalize'}}>{type} Login</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center" style={{ position: 'relative', bottom: '100px' }}>
          <Row>
            <Col>
              {/* <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={logo} alt="logo" style={{ width: '100%', height: '100%', width: "200px", height: '100px' }} />
          </div> */}

              <div
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  // borderRadius: "10px",
                  width: "550px",
                  // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  // margin: "auto",
                  padding: '20px',
                  // minHeight: '300px',
                  // borderTop: '5px solid #2b9348',
                  //  borderBottom: '4px solid #2b9348'
                }}
              >

                <div style={{ textAlign: 'center' }}>
                  <img style={{ width: "150px" }} src={logo} alt="" />
                </div>
                {/* <div style={{ fontSize: '28px', textAlign: 'center', color: "#2b9348", fontWeight: 600, textTransform: 'capitalize' }}>
                  {type} Login
                </div> */}

                <div style={{ marginTop: '10px' }}>
                  <Form  onSubmit={handleSubmit} style={{ padding: '0px 10px' }}>
                    <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                      <Form.Label column sm="12">
                        Email
                      </Form.Label>
                      <Col sm="12">
                        {/* <Form.Control placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)}/> */}
                        <Form.Control
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-2" controlId="formPlaintextPassword">
                      <Form.Label column sm="12">
                        Password
                      </Form.Label>
                      <Col sm="12">
                        {/* <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> */}
                        <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                      </Col>
                    </Form.Group>
                    <div style={{ textAlign: 'right', paddingTop: '10px' }}>
                      <a href="/forgot-password" style={{ color: "#012A41" }}>
                        Forgot Password?
                      </a>
                    </div>
                    <Button
                      type="submit"
                      variant="success"
                      className="ml-auto p-2"
                      style={{ fontWeight: "bold", width: "100%", marginTop: '20px' }}
                    >
                      LOGIN
                    </Button>



                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* {user ? (
                  <>
                    <img src={user.photoURL} alt="Profile" className="rounded-circle mx-auto d-block mb-3" width="80" />
                    <h5 className="text-center">{user.displayName}</h5>
                    <p className="text-center">{user.email}</p>
                    <Button variant="danger" className="w-100" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="primary" className="w-100 mb-2" onClick={signInWithGoogle}>
                      Sign in with Google
                    </Button>
                    <Button variant="info" className="w-100" onClick={signInWithFacebook}>
                      Sign in with Facebook
                    </Button>
                  </>
                )} */}
                {/* <a href="http://datatechgenius.com/expert-driver/public/index.php/api/auth/google">Google</a> */}

      </div>
    </>
  );
};

export default Login;
