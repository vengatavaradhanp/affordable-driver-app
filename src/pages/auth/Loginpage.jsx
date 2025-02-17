import React, { useState } from "react";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logos.svg";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";




const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Optional if using only toast notifications
  
    try {
      const response = await axios.post(
        "https://datatechgenius.com/expert-driver/public/index.php/api/login",
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        console.log("User Data:", response.data.user);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(response.data.user));
  
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
  
  // // Handle Login Submit
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
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <Row>
        <Col>
          <div
            className="p-3"
            style={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "10px",
              width: "600px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              margin: "auto",
            }}
          >
            <div style={{textAlign: 'center'}}>
            <img src={logo} alt="logo" style={{width: '100%', height: '100%', maxWidth: "130px"}} />
            </div>
            <h3 className="text-center mb-4 text-success">
              Affordable Student Login
            </h3>
            <Form onSubmit={handleSubmit}>
              {/* Display Error Message */}
              {errorMessage && (
                <div
                  className="alert alert-danger text-center"
                  role="alert"
                  style={{ fontSize: "14px" }}
                >
                  {errorMessage}
                </div>
              )}

              {/* Email Input */}
              <Form.Group className="mb-3 p-1" controlId="formEmail">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Password Input */}
              <Form.Group className="mb-3 p-1" controlId="formPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <InputGroup>
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    <i
                      className={`bi ${
                        passwordVisible ? "bi-eye-slash" : "bi-eye"
                      }`}
                    ></i>
                  </Button>
                </InputGroup>
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center p-2">
                <a href="/forgot-password" style={{ color: "#012A41" }}>
                  Forgot Password?
                </a>
                <Button
                  type="submit"
                  variant="success"
                  className="ml-auto p-2"
                  style={{ fontWeight: "bold", width: "30%" }}
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
