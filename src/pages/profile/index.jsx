/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
// import Col from "react-bootstrap/Col";
// import Nav from "react-bootstrap/Nav";
// import Row from "react-bootstrap/Row";
// import Tab from "react-bootstrap/Tab";
// import Calendar from "../calendar";
// import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

// export default function MyProfile() {
//   const [selected, setSelected] = React.useState("fields");
//   return (
//     <>
//       <>
//         {/* Page Header Start */}
//         <div
//           className="container-fluid page-header py-6 my-5 mt-0 wow fadeIn"
//           data-wow-delay="0.1s"
//         >
//           <div
//             className="container"
//             style={{
//               display: "flex",
//               height: "100%",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <div className="row justify-content-center">
//               <div className="col-lg-12">
//                 <h3 className="display-5 text-light mb-0">Profile</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Page Header End */}
//         {/* Facts Start */}
//         <div className="container-fluid facts py-5 pt-lg-0 contactFacts">
//           <div className="container py-5 pt-lg-0">
//             <div className="row gx-0">
//               <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
//                 <div className="bg-white shadow d-flex align-items-center h-100 p-4">
//                   <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
//                     <ToggleButtonGroup
//                       type="radio"
//                       name="options"
//                       value={selected}
//                       onChange={setSelected}
//                     >
//                       <ToggleButton id="tbg-btn-1" value="fields" style={{ margin: '0px 5px', background: selected == 'fields' ? "#2b9348" : "#fff", color: selected == 'fields' ? "#ffff" : "#2b9348", width: '120px' }}>
//                         My Info
//                       </ToggleButton>
//                       <ToggleButton id="tbg-btn-2" value="calendar" style={{ margin: '0px 5px', background: selected == 'calendar' ? "#2b9348" : "#fff", color: selected == 'calendar' ? "#ffff" : "#2b9348", width: '120px' }}>
//                         My Calendar
//                       </ToggleButton>
//                     </ToggleButtonGroup>
//                     <div className="mt-3">
//                       {selected === "fields" ? <form>
//                         <Row style={{ paddingBottom: "40px" }}>
//                           <Col sm={6}>
//                             <div
//                               className="form-floating"
//                               style={{ margin: "0px 15px" }}
//                             >
//                               <input
//                                 type="text"
//                                 id="name"
//                                 placeholder="First Name"
//                               />
//                               <label htmlFor="name">First Name</label>
//                             </div>
//                           </Col>
//                           <Col sm={6}>
//                             <div
//                               className="form-floating"
//                               style={{ margin: "0px 15px" }}
//                             >
//                               <input
//                                 type="text"
//                                 id="lastName"
//                                 placeholder="Last Name"
//                               />
//                               <label htmlFor="lastName">
//                                 Last Name
//                               </label>
//                             </div>
//                           </Col>
//                           <Col sm={6}>
//                             <div
//                               className="form-floating"
//                               style={{ margin: " 15px" }}
//                             >
//                               <input
//                                 type="email"
//                                 id="email"
//                                 placeholder="Email Address"
//                               />
//                               <label htmlFor="email">
//                                 Email Address
//                               </label>
//                             </div>
//                           </Col>
//                           <Col sm={6}>
//                             <div
//                               className="form-floating"
//                               style={{ margin: " 15px" }}
//                             >
//                               <input
//                                 type="text"
//                                 id="contactNumber"
//                                 placeholder="Contact Number"
//                               />
//                               <label htmlFor="contactNumber">
//                                 Contact Number
//                               </label>
//                             </div>
//                           </Col>
//                           <Col sm={6}>
//                             <div
//                               className="form-floating"
//                               style={{ margin: "0px 15px" }}
//                             >
//                               <select
//                                 className="form-select"
//                                 id="floatingSelect"
//                                 aria-label="Inquiring About"
//                               >
//                                 <option selected="">
//                                   Inquiring About
//                                 </option>
//                                 <option value={1}>
//                                   {" "}
//                                   Single Lesson
//                                 </option>
//                                 <option value={2}>
//                                   {" "}
//                                   3 x 50 Minute Lesson Package
//                                 </option>
//                                 <option value={3}>
//                                   5 x 50 Minute Lesson Package
//                                 </option>
//                               </select>
//                               <label htmlFor="floatingSelect">
//                                 Inquiring About
//                               </label>
//                             </div>
//                           </Col>
//                           <Col sm={6}>
//                             <div
//                               className="form-floating"
//                               style={{ margin: "0px 15px" }}
//                             >
//                               <textarea
//                                 placeholder="Message"
//                                 id="message"
//                                 style={{ height: 100 }}
//                                 defaultValue={""}
//                               />
//                               <label htmlFor="message">Message</label>
//                             </div>
//                           </Col>
//                         </Row>

//                         <Row
//                           style={{
//                             borderTop: "1px solid #e4e5e7",
//                             margin: "0px 0px",
//                             paddingTop: "40px",
//                           }}
//                         >
//                           <Col lg={3}>
//                             <button
//                               className="btn btn-primary py-3 px-5"
//                               type="submit"
//                             // style={{ margin: "0px 25px" }}
//                             >
//                               Update Profile
//                             </button>
//                           </Col>
//                         </Row>
//                       </form> : <Calendar />}
//                     </div>
//                     {/* <Tab.Container
//                       id="left-tabs-example"
//                       defaultActiveKey="first"
//                     >
//                       <Row>
//                         <Col
//                           sm={2}
//                           lg={2}
//                           style={{ borderRight: "1px solid #e4e5e7" }}
//                         >
//                           <Nav variant="pills" className="flex-column">
//                             <Nav.Item>
//                               <Nav.Link eventKey="first">Edit Profile</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                               <Nav.Link eventKey="second">My Calendar</Nav.Link>
//                             </Nav.Item>
//                           </Nav>
//                         </Col>
//                         <Col sm={10} lg={10} style={{ minHeight: "700px" }}>
//                           <Tab.Content>
//                             <Tab.Pane eventKey="first">
//                               <div style={{ margin: "0px 15px 15px 15px" }}>
//                                 {" "}
//                                 <div
//                                   style={{
//                                     fontSize: "26px",
//                                     fontWeight: 600,
//                                     color: "#012a41",
//                                   }}
//                                 >
//                                   {" "}
//                                   Edit Profile
//                                 </div>
//                                 <hr />
//                               </div>
//                               <form>
//                                 <Row style={{ paddingBottom: "40px" }}>
//                                   <Col sm={6}>
//                                     <div
//                                       className="form-floating"
//                                       style={{ margin: "0px 15px" }}
//                                     >
//                                       <input
//                                         type="text"
//                                         id="name"
//                                         placeholder="First Name"
//                                       />
//                                       <label htmlFor="name">First Name</label>
//                                     </div>
//                                   </Col>
//                                   <Col sm={6}>
//                                     <div
//                                       className="form-floating"
//                                       style={{ margin: "0px 15px" }}
//                                     >
//                                       <input
//                                         type="text"
//                                         id="lastName"
//                                         placeholder="Last Name"
//                                       />
//                                       <label htmlFor="lastName">
//                                         Last Name
//                                       </label>
//                                     </div>
//                                   </Col>
//                                   <Col sm={6}>
//                                     <div
//                                       className="form-floating"
//                                       style={{ margin: " 15px" }}
//                                     >
//                                       <input
//                                         type="email"
//                                         id="email"
//                                         placeholder="Email Address"
//                                       />
//                                       <label htmlFor="email">
//                                         Email Address
//                                       </label>
//                                     </div>
//                                   </Col>
//                                   <Col sm={6}>
//                                     <div
//                                       className="form-floating"
//                                       style={{ margin: " 15px" }}
//                                     >
//                                       <input
//                                         type="text"
//                                         id="contactNumber"
//                                         placeholder="Contact Number"
//                                       />
//                                       <label htmlFor="contactNumber">
//                                         Contact Number
//                                       </label>
//                                     </div>
//                                   </Col>
//                                   <Col sm={6}>
//                                     <div
//                                       className="form-floating"
//                                       style={{ margin: "0px 15px" }}
//                                     >
//                                       <select
//                                         className="form-select"
//                                         id="floatingSelect"
//                                         aria-label="Inquiring About"
//                                       >
//                                         <option selected="">
//                                           Inquiring About
//                                         </option>
//                                         <option value={1}>
//                                           {" "}
//                                           Single Lesson
//                                         </option>
//                                         <option value={2}>
//                                           {" "}
//                                           3 x 50 Minute Lesson Package
//                                         </option>
//                                         <option value={3}>
//                                           5 x 50 Minute Lesson Package
//                                         </option>
//                                       </select>
//                                       <label htmlFor="floatingSelect">
//                                         Inquiring About
//                                       </label>
//                                     </div>
//                                   </Col>
//                                   <Col sm={6}>
//                                     <div
//                                       className="form-floating"
//                                       style={{ margin: "0px 15px" }}
//                                     >
//                                       <textarea
//                                         placeholder="Message"
//                                         id="message"
//                                         style={{ height: 100 }}
//                                         defaultValue={""}
//                                       />
//                                       <label htmlFor="message">Message</label>
//                                     </div>
//                                   </Col>
//                                 </Row>

//                                 <Row
//                                   style={{
//                                     borderTop: "1px solid #e4e5e7",
//                                     margin: "0px 0px",
//                                     paddingTop: "40px",
//                                   }}
//                                 >
//                                   <Col lg={3}>
//                                     <button
//                                       className="btn btn-primary py-3 px-5"
//                                       type="submit"
//                                     // style={{ margin: "0px 25px" }}
//                                     >
//                                       Update Profile
//                                     </button>
//                                   </Col>
//                                 </Row>
//                               </form>
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="second">
//                               <div style={{ margin: "0px 15px 15px 15px" }}>
//                                 {" "}
//                                 <div
//                                   style={{
//                                     fontSize: "26px",
//                                     fontWeight: 600,
//                                     color: "#012a41",
//                                   }}
//                                 >
//                                   {" "}
//                                   Calendar Schedules
//                                 </div>
//                                 <hr />
//                               </div>
//                               <Calendar />
//                             </Tab.Pane>
//                           </Tab.Content>
//                         </Col>
//                       </Row>
//                     </Tab.Container> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     </>
//   );
// }

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
// import { FaCamera } from "react-icons/fa"; // ✅ Import FaCamera from react-icons

export default function MyProfile() {
  const [image, setImage] = useState();
  const [selected, setSelected] = useState("fields"); // Toggle between Profile & Calendar
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
  const loginSelector = useSelector((state) => state.login);
 console.log('############', loginSelector)
  const [errors, setErrors] = useState({}); // Track validation errors

  useEffect(() => {
    if(loginSelector.user !== null) {
      const field = {...fields};
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
      field["gender"] = loginSelector.user.role;
      setFields(field);
    }
  }, [loginSelector]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
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
            toast.success("User updated successfully!");
            navigate("/admin/users");
          })
          .catch((error) => {
            let newErrors = {};
            const errorData = error.response.data;
            Object.entries(errorData.errors).forEach(([key, value]) => {
              newErrors[key] = value[0];
            });
            setErrors(newErrors);
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
                      value="fields"
                      style={{
                        margin: "0px 5px",
                        background: selected === "fields" ? "#2b9348" : "#fff",
                        color: selected === "fields" ? "#fff" : "#2b9348",
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
                    {selected === "fields" ? (
                      <Form onSubmit={handleSubmit} noValidate>
                        <Row className="pb-4">
                          <Col sm={4} className="text-left">
                            <div className="circle position-relative d-inline-block">
                              <Form.Group className=" m-2">
                                <Form.Label> Profile Image</Form.Label>
                                <br />
                                <label className="upload-button">
                                  <div
                                    style={{
                                      border: "1px solid #e4e5e7",
                                      borderRadius: "10px",
                                      padding: "5px",
                                      width: "120px",
                                      height: "100px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <i
                                      class="bi bi-person-circle"
                                      style={{
                                        fontSize: "52px",
                                        color: "#e4e5e7",
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
                            </div>
                          </Col>
                          <Col sm={4} className="text-center" />
                          <Col sm={4} style={{ textAlign: "right" }}>
                            <Button
                              variant="light"
                              style={{ padding: "10px 30px" }}
                              onClick={() => setFieldState(!fieldState)}
                            >
                              Edit &nbsp;{" "}
                              <i
                                className="bi bi-pencil-square"
                                style={{
                                  color: "#000",
                                  fontSize: "18px",
                                  paddingX: "10px",
                                }}
                              ></i>
                            </Button>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label> First Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="fname"
                                value={fields.fname}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                              <Form.Select
                                name="role"
                                value={fields.role}
                                onChange={handleChange}
                                isInvalid={!!errors.role}
                                disabled
                              >
                                <option value="">Choose</option>
                                {RoleList.map((item, index) => (
                                  <option key={index} value={item.value}>
                                    {item.name}
                                  </option>
                                ))}
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                {errors.role}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>

                          <Col sm={6}>
                            <Form.Group className="m-2">
                              <Form.Label>State</Form.Label>
                              <Form.Select
                                name="role"
                                value={fields.role}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                <Form.Check
                                  inline
                                  label="Active"
                                  name="status"
                                  type="radio"
                                  // id={inline - radio - 1}
                                  checked={fields.status == 1}
                                  onChange={handleChange}
                                  disabled
                                />
                                <Form.Check
                                  inline
                                  label="Inactive"
                                  name="status"
                                  type="radio"
                                  // id={inline - radio - 2}
                                  checked={fields.status == 0}
                                  onChange={handleChange}
                                  disabled
                                />
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row className="border-top pt-4">
                          <Col lg={3}>
                            <Button
                              type="submit"
                              className="btn btn-primary py-2 px-3"
                            >
                              Update Profile
                            </Button>
                          </Col>
                        </Row>
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
