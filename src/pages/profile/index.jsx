import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Form,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Calendar from "../calendar";
import {
  GenderList,
  RoleList,
  StateList,
  SuburbList,
} from "../../utils/constant";
import userService from "../../services/user.service";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FileUploadService from "../../services/file-upload.service";
// import { FaCamera } from "react-icons/fa"; // ✅ Import FaCamera from react-icons

export default function MyProfile() {
  const [image, setImage] = useState();
  const [selected, setSelected] = useState("profile"); // Toggle between Profile & Calendar
  const [fieldState, setFieldState] = useState(false);
  const [fields, setFields] = useState({
    id: 3,
    fname: "",
    lname: "",
    email: "",
    phone: "",
    suburbs: "",
    address: "",
    state: "",
    gender: "",
    role: "user",
    status: null,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const loginSelector = useSelector((state) => state.auth);
  console.log("############", loginSelector);
  const [errors, setErrors] = useState({}); // Track validation errors

  useEffect(() => {
    if (loginSelector.user !== null) {
      const field = { ...fields };
      field["id"] = loginSelector.user?.id;
      field["fname"] = loginSelector.user.fname;
      field["lname"] = loginSelector.user.lname;
      field["email"] = loginSelector.user.email;
      field["phone"] = loginSelector.user.phone;
      field["suburbs"] = loginSelector.user.suburbs;
      field["address"] = loginSelector.user.address;
      field["state"] = loginSelector.user.state;
      field["status"] = loginSelector.user.status;
      field["role"] = loginSelector.user.role;
      field["gender"] = loginSelector.user.gender;
      field["image"] = null
      // loginSelector.user.image == null
      //   ? "https://www.w3schools.com/howto/img_avatar.png"
      //   : loginSelector.user.image;
      setFields(field);
    }
  }, [loginSelector]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name]: value,
    });
    if (value) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("type", "users");
      FileUploadService.uploadFile(formData)
        .then((response) => {
          debugger;
        })
        .catch((error) => {
          debugger;
        });
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setImage(reader.result);
      // };
      // reader.readAsDataURL(file);
    }
  };

  const validateFields = () => {
    let newErrors = {};

    if (!fields.fname.trim()) newErrors.fname = "First name is required.";
    if (!fields.lname.trim()) newErrors.lname = "Last name is required.";
    if (!fields.email.trim()) newErrors.email = "Email is required.";
    if (!fields.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!fields.address.trim()) newErrors.address = "Address is required.";
    if (!fields.gender.trim()) newErrors.gender = "Please select a gender.";
    if (!fields.role.trim()) newErrors.role = "Please select a role.";
    if (!fields.state.trim()) newErrors.state = "Please select a state.";
    if (!fields.suburbs.trim()) newErrors.suburbs = "Please select a suburb.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (validateFields()) {
      const payload = { ...fields };
      if (fields.id) {
        userService
          .updateUser(fields.id, payload)
          .then(() => {
            toast.success("Profile updated successfully!");
            navigate("/profile");
            setFieldState(false);
          })
          .catch((error) => {
            let newErrors = {};
            const errorData = error.response.data;
            Object.entries(errorData.errors).forEach(([key, value]) => {
              newErrors[key] = value[0];
            });
            setErrors(newErrors);
            setFieldState(false);
          });
      }
    }
  };

  return (
    <>
      {/* Page Header */}
      <div
        className="container-fluid page-header py-6 my-5 mt-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h3 className="display-5 text-light mb-0">Profile</h3>
        </div>
      </div>

      {/* Profile Section */}
      <div className="container-fluid facts py-5 contactFacts">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4">
                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">


                  {/* Toggle Buttons */}
                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    value={selected}
                    onChange={setSelected}
                  >
                    <ToggleButton
                      id="tbg-btn-1"
                      value="profile"
                      style={{
                        margin: "0px 5px",
                        background: selected === "profile" ? "#2b9348" : "#fff",
                        color: selected === "profile" ? "#fff" : "#2b9348",
                        width: "120px",
                      }}
                    >
                      My Info
                    </ToggleButton>
                    <ToggleButton
                      id="tbg-btn-2"
                      value="calendar"
                      style={{
                        margin: "0px 5px",
                        background:
                          selected === "calendar" ? "#2b9348" : "#fff",
                        color: selected === "calendar" ? "#fff" : "#2b9348",
                        width: "120px",
                      }}
                    >
                      My Calendar
                    </ToggleButton>
                  </ToggleButtonGroup>



                  {/* Profile Form */}
                  <div className="mt-3">
                    {selected === "profile" ? (
                      <Form onSubmit={handleSubmit} noValidate>




                        <Row className="pb-4">
                          <Col  > <div className="circle position-relative d-inline-block">
                            <Form.Group className=" m-2">
                              <Form.Label> Profile Image</Form.Label>
                              <br />
                              <label className="upload-button">
                                <div
                                  style={{
                                    border: "1px solid #e4e5e7",
                                    borderRadius: "10px",
                                    padding: "5px",
                                    width: "160px",
                                    height: "150px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    background: !fieldState ? "#e9ecef" : "#fff",
                                  }}
                                  // className="my-3"
                                >
                                  <i
                                    class="bi bi-person-circle"
                                    style={{
                                      fontSize: "80px",
                                      color: "#012a41",
                                    }}
                                  ></i>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="file-upload d-none"
                                    onChange={handleImageChange}
                                    disabled={!fieldState}
                                  />
                                </div>
                              </label>

                            </Form.Group>
                          </div></Col>
                          <Col sm={9}>
                            <Row>
                              <Col sm={6}>
                                <Form.Group className=" m-2">
                                  <Form.Label> First Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="fname"
                                    value={fields.fname}
                                    onChange={handleFieldChange}
                                    placeholder="First Name"
                                    disabled={!fieldState}
                                    isInvalid={!!errors.fname}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.fname}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group className=" m-2">
                                  <Form.Label>Last Name</Form.Label>

                                  <Form.Control
                                    type="text"
                                    name="lname"
                                    value={fields.lname}
                                    onChange={handleFieldChange}
                                    placeholder="Last Name"
                                    disabled={!fieldState}
                                    isInvalid={!!errors.lname}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.lname}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group className="m-2">
                                  <Form.Label>Gender</Form.Label>
                                  <Form.Select
                                    name="gender"
                                    value={fields.gender}
                                    onChange={handleFieldChange}
                                    disabled={!fieldState}
                                    isInvalid={!!errors.gender}
                                  >
                                    <option value="">Choose...</option>
                                    {GenderList.map((item, index) => (
                                      <option key={index} value={item.value}>
                                        {item.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                  <Form.Control.Feedback type="invalid">
                                    {errors.gender}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group className=" m-2">
                                  <Form.Label> Email</Form.Label>
                                  <Form.Control
                                    type="email"
                                    name="email"
                                    value={fields.email}
                                    onChange={handleFieldChange}
                                    placeholder="Email Address"
                                    disabled={!fieldState}
                                    isInvalid={!!errors.email}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group className=" m-2">
                                  <Form.Label>Phone</Form.Label>

                                  <Form.Control
                                    type="text"
                                    name="phone"
                                    value={fields.phone}
                                    onChange={handleFieldChange}
                                    placeholder="Contact Number"
                                    disabled={!fieldState}
                                    isInvalid={!!errors.phone}
                                    maxLength={10}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.phone}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>

                              <Col sm={6}>
                                <Form.Group className="m-2">
                                  <Form.Label>Role</Form.Label>
                                  <div style={{ background: '#e9ecef', textTransform: 'capitalize', padding: "0.375rem 2.25rem 0.375rem 0.75rem" }}>{fields.role}</div>

                                </Form.Group>
                              </Col>

                              <Col sm={6}>
                                <Form.Group className="m-2">
                                  <Form.Label>State</Form.Label>
                                  <Form.Select
                                    name="state"
                                    value={fields.state}
                                    onChange={handleFieldChange}
                                    disabled={!fieldState}
                                    isInvalid={!!errors.state}
                                  >
                                    {/* <option value="">Select Role</option> */}
                                    <option value="">Choose</option>
                                    {StateList.map((item, index) => (
                                      <option key={index} value={item.value}>
                                        {item.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                  <Form.Control.Feedback type="invalid">
                                    {errors.state}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>

                              <Col sm={6}>
                                <Form.Group className="m-2">
                                  <Form.Label>Suburbs</Form.Label>
                                  <Form.Select
                                    name="suburbs"
                                    value={fields.suburbs}
                                    onChange={handleFieldChange}
                                    disabled={!fieldState}
                                    isInvalid={!!errors.suburbs}
                                  >
                                    <option value="">Choose</option>
                                    {SuburbList.map((item, index) => (
                                      <option key={index} value={item.value}>
                                        {item.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                  <Form.Control.Feedback type="invalid">
                                    {errors.suburbs}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group className=" m-2">
                                  <Form.Label>Address</Form.Label>

                                  <Form.Control
                                    type="address"
                                    rows={4}
                                    as="textarea"
                                    name="address"
                                    value={fields.address}
                                    onChange={handleFieldChange}
                                    placeholder="Address"
                                    disabled={!fieldState}
                                    isInvalid={!!errors.address}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.address}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group className=" m-2">
                                  <Form.Label>Status</Form.Label>
                                  <div className="mt-2">
                                    <div style={{ background: '#e9ecef', textTransform: 'capitalize', padding: "0.375rem 2.25rem 0.375rem 0.75rem" }}>{fields.status == 0 ? "Inactive" : "Active"}</div>

                                  </div>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <div className="border-top pt-4 d-flex justify-content-center">
                          <div className="mx-2" >
                            <Button
                              variant="light"
                              className="btn btn-light py-2 px-3"
                              onClick={() => setFieldState(!fieldState)}
                              style={{ width: '150px' }}
                              disabled={fieldState}
                            >
                              Enable Edit

                            </Button>

                          </div>
                          <div className="mx-2" >
                            <Button
                              type="submit"
                              className="btn btn-primary py-2 px-3"
                              disabled={!fieldState}
                            >
                              Update Profile
                            </Button>
                          </div>
                        </div>
                      </Form>
                    ) : (
                      <Calendar />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
