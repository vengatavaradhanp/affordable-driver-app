import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
  Dropdown,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logos.svg";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithGoogle,
  signInWithFacebook,
  logout,
} from "../../pages/auth/firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import AppLoader from "../../components/app-layout/AppLoader";
import { useDispatch } from "react-redux";
import { login } from "../../features/loginSlice";
import AuthService from "../../services/auth.service";

const Login = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { type } = useParams();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateFields = () => {
    let newErrors = {};

    if (!fields.email.trim()) newErrors.email = "Email is required.";
    if (!fields.password.trim()) newErrors.password = "Password is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (validateFields()) {
      const payload = { ...fields };

      AuthService.login(payload)
        .then((response) => {
          dispatch(login(response.data));
          toast.success("Login successfully");
          navigate("/");
        })
        .catch((error) => {
          toast.error("Failed to login");
        });

      // UserService.createUser(payload)
      //   .then(() => {
      //     toast.success("User created successfully!");
      //     navigate("/admin/users");
      //   })
      //   .catch((error) => {
      //     let newErrors = {};
      //     const errorData = error.response.data;
      //     Object.entries(errorData.errors).forEach(([key, value]) => {
      //       newErrors[key] = value[0];
      //     });
      //     setErrors(newErrors);
      //   });
    }
  };

  const handleFieldChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFields({
      ...fields,
      [name]: value,
    });
    if (value) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSocialLogin = (platform) => {
    window.location.href = `http://datatechgenius.com/expert-driver/public/index.php/api/auth/${platform}`;
  };

  return (
    <div className="vh-100" style={{ backgroundColor: "#f8f9fa" }}>
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
              <h3
                className="display-5 text-light mb-5"
                style={{ textTransform: "capitalize" }}
                color="red"
              >
                {type} Login
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ position: "relative", bottom: "100px" }}
      >
        <Row>
          <Col>
            <div
              style={{
                backgroundColor: "#fff",
                color: "#000",
                width: "550px",
                padding: "20px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img style={{ width: "150px" }} src={logo} alt="Logo" />
              </div>
              <div style={{ marginTop: "10px" }}>
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  style={{ padding: "0px 10px" }}
                >
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="email@example.com"
                        name="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type={passwordVisible ? "text" : "password"}
                        placeholder="********"
                        name="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <div style={{ textAlign: "right" }}>
                    <a href="/forgot-password" style={{ color: "#012A41" }}>
                      Forgot Password?
                    </a>
                  </div>
                  <Button
                    type="submit"
                    variant="success"
                    className="ml-auto p-2"
                    style={{
                      fontWeight: "bold",
                      width: "100%",
                      marginTop: "20px",
                    }}
                  >
                    LOGIN
                  </Button>
                </Form>
              </div>
              {/* <div style={{, padding: '10px 0px'}} /> */}
              <div className="mt-2 text-center">
                {" "}
                ---------------- OR ------------------
              </div>
              <Container>
                <Row>
                  <Col>
                    <Button
                      variant="light"
                      className="mt-2"
                      onClick={() => handleSocialLogin("google")}
                      style={{
                        width: "100%",
                        marginTop: "20px",
                      }}
                    >
                     <i class="bi bi-google" style={{color: "#2b9348"}}></i> &nbsp; Sign in with Google
                    </Button>
                  </Col>
                  <Col>
                    {" "}
                    <Button
                      variant="light"
                      className="mt-2"
                      onClick={() => handleSocialLogin("facebook")}
                      style={{
                        width: "100%",
                        marginTop: "20px",
                      }}
                    >
                      <i class="bi bi-meta" style={{color: "#2b9348"}}></i> &nbsp; Sign in with Facebook
                    </Button>
                  </Col>
                </Row>
              </Container>
              {/* <div style={{ padding: "0px 10px" }}>
                
              
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
