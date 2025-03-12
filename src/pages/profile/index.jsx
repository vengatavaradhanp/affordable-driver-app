// import React from "react";
// import Col from "react-bootstrap/Col";
// import Nav from "react-bootstrap/Nav";
// import Row from "react-bootstrap/Row";
// import Tab from "react-bootstrap/Tab";
// import Calendar from "../calendar";
// import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

// export default function MyProfile() {
//   const [selected, setSelected] = React.useState("profile");
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
//                       <ToggleButton id="tbg-btn-1" value="profile" style={{ margin: '0px 5px', background: selected == 'profile' ? "#2b9348" : "#fff", color: selected == 'profile' ? "#ffff" : "#2b9348", width: '120px' }}>
//                         My Info
//                       </ToggleButton>
//                       <ToggleButton id="tbg-btn-2" value="calendar" style={{ margin: '0px 5px', background: selected == 'calendar' ? "#2b9348" : "#fff", color: selected == 'calendar' ? "#ffff" : "#2b9348", width: '120px' }}>
//                         My Calendar
//                       </ToggleButton>
//                     </ToggleButtonGroup>
//                     <div className="mt-3">
//                       {selected === "profile" ? <form>
//                         <Row style={{ paddingBottom: "40px" }}>
//                           <Col sm={6}>
//                             <div
//                               className="form-floating"
//                               style={{ margin: "0px 15px" }}
//                             >
//                               <input
//                                 type="text"
//                                 className="form-control border-0 bg-light"
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
//                                 className="form-control border-0 bg-light"
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
//                                 className="form-control border-0 bg-light"
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
//                                 className="form-control border-0 bg-light"
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
//                                 className="form-control border-0 bg-light"
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
//                                         className="form-control border-0 bg-light"
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
//                                         className="form-control border-0 bg-light"
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
//                                         className="form-control border-0 bg-light"
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
//                                         className="form-control border-0 bg-light"
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
//                                         className="form-control border-0 bg-light"
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
import { FaCamera } from "react-icons/fa"; // ✅ Import FaCamera from react-icons

export default function MyProfile() {
  const [image, setImage] = useState();
  const [selected, setSelected] = useState("profile"); // Toggle between Profile & Calendar
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    suburbs: "",
    address: "",
  });

  const getToken = () => localStorage.getItem("token");

  useEffect(() => {
    // Fetch user data from API
    fetch(
      "https://datatechgenius.com/expert-driver/public/index.php/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfile({
          fname: data.data.fname,
          lname: data.data.lname,
          email: data.data.email,
          phone: data.data.phone,
          suburbs: data.data.suburbs,
          address: data.data.address,
          state: data.data.state,
          gender: data.data.gender,
          role: data.data.role,
          status: 0,
          image: data.data.image,

          // inquiry: data.data.inquiry,
          // message: data.data.message
        });
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", profile);
    const token = getToken();
    fetch(
      "https://datatechgenius.com/expert-driver/public/index.php/api/users/update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
      }
    )
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log("Profile Updated Successfully", data);
      // })
      // .catch((error) => console.error("Error updating profile:", error));
      .then(async (response) => {
        const data = await response.json();
        console.log("API Response:", data);

        if (response.ok) {
          console.log("Profile Updated Successfully");
        } else {
          console.error("Update Failed:", data);
        }
      })
      .catch((error) => console.error("Error updating profile:", error));
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
                      <Form onSubmit={handleSubmit}>
                        <Row className="pb-4">
                          <Col sm={6} className="text-center">
                            <div className="circle position-relative d-inline-block">
                              <img
                                className="profile-pic rounded-circle border shadow"
                                src={
                                  profile.image ||
                                  "https://via.placeholder.com/100"
                                }
                                alt="Profile"
                                width={100}
                                height={100}
                              />
                              <div className="p-image position-absolute bottom-0 start-0">
                                <label className="upload-button">
                                  <FaCamera
                                    size={24}
                                    className="text-primary cursor-pointer"
                                  />
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="file-upload d-none"
                                    onChange={handleImageChange}
                                  />
                                </label>
                              </div>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label> First Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="fname"
                                value={profile.fname}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="First Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label>Last Name</Form.Label>

                              <Form.Control
                                type="text"
                                name="lname"
                                value={profile.lname}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="Last Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label> Email</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="Email Address"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label>Phone</Form.Label>

                              <Form.Control
                                type="text"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="Contact Number"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label> suburbs</Form.Label>
                              <Form.Control
                                type="suburbs"
                                name="suburbs"
                                value={profile.suburbs}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="Suburbs"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label>Address</Form.Label>

                              <Form.Control
                                type="address"
                                name="address"
                                value={profile.address}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="address"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label> State</Form.Label>
                              <Form.Control
                                type="state"
                                name="state"
                                value={profile.state}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="State"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label>Gender</Form.Label>

                              <Form.Control
                                type="gender"
                                name="address"
                                value={profile.gender}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="gender"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label> Role</Form.Label>
                              <Form.Control
                                type="role"
                                name="role"
                                value={profile.role}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="role"
                              />
                            </Form.Group>
                          </Col>

                          {/* <Col sm={6}>
                            <Form.Group className=" m-2">
                              <Form.Label>Image Upload</Form.Label>
                              <Form.Control
                                type="file"
                                placeholder="image upload"
                                name="image"
                                value={profile.image}
                              />

                              {/* <Form.Control
                                type="image"
                                name="image"
                                value={profile.image}
                                onChange={handleChange}
                                className="border-0 bg-light"
                                placeholder="image"
                              /> */}
                          {/* </Form.Group>
                          </Col> */}
                        </Row>

                        <Row className="border-top pt-4">
                          <Col lg={3}>
                            <Button
                              type="submit"
                              className="btn btn-primary py-3 px-5"
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
