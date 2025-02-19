// import React from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   Card,
//   Stack,
// } from "react-bootstrap";
// // import { AddUserResponse } from "../../utils/constant";
// import { toast } from "react-toastify";
// import { AddUserResponse } from "../../utils/constant";

// export default function UseForm() {
//   const handleContinue = () => {
//     if (!AddUserResponse.userDetails.name || !AddUserResponse.userDetails.email) {
//       toast.error("Please complete all required fields.");
//       return;
//     }
//     console.log("AddUserResponse", AddUserResponse);
//   };
//   return (
//     <div>
//       <Row>
//         {/* Form Section */}
//         <Col xs={12} lg={8}>
//           <div
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//             }}
//           >
//             <div
//               style={{
//                 borderBottom: "1px solid #ddd",
//                 padding: "15px 20px ",
//               }}
//             >
//               <Form>
//                 <Row>
//                   <Col xs={12} md={6}>
//                     <Form.Group className="mb-3">
//                       <Form.Label>First name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="First name"
//                         style={{ borderRadius: "10px" }}
//                         value={AddUserResponse.userDetails.name}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col xs={12} md={6}>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Last name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Last name"
//                         style={{ borderRadius: "10px" }}
//                         value={AddUserResponse.userDetails.lastName}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col xs={12} md={6}>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Suburb</Form.Label>
//                       <Form.Select style={{ borderRadius: "10px" }}>
//                         <option value="Hobart, 7000">Hobart, 7000</option>
//                         <option value="Glebe, 7000">Glebe, 7000</option>
//                       </Form.Select>
//                     </Form.Group>
//                   </Col>
//                   <Col xs={12} md={6}>
//                     <Form.Group className="mb-3">
//                       <Form.Label>State</Form.Label>
//                       <Form.Select style={{ borderRadius: "10px" }}>
//                         <option value="Tasmania">Tasmania</option>
//                         <option value="Other">Other</option>
//                       </Form.Select>
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col xs={6}>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Email address</Form.Label>
//                       <Form.Control
//                         type="email"
//                         placeholder="Your email address"
//                         style={{ borderRadius: "10px" }}
//                         value={"agilankarthik09@gmail.com"}
//                       />
//                       <Form.Text className="text-muted"></Form.Text>
//                     </Form.Group>
//                   </Col>
//                   <Col xs={12} md={6}>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Phone number</Form.Label>
//                       <Form.Control
//                         type="tel"
//                         placeholder="0400 000 000"
//                         style={{ borderRadius: "10px" }}
//                         value={"9790695858"}
//                       />
//                       <Form.Text className="text-muted"></Form.Text>
//                     </Form.Group>

//                   </Col>
//                 </Row>
//               </Form>
//               <button className="text-white bg-primary" onClick={handleContinue} >Submit</button>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Users from "./index";
import { useNavigate } from "react-router-dom";
// import { AddUserResponse } from "../../../utils/constant";
// import { AddUserResponse } from "../../../utils/constant";

export default function UseForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [suburb, setSuburb] = useState("");
  const navigate = useNavigate();



  const handleContinue = () => {
   navigate("/admin/users",{state:{firstName}});
    /* if (!AddUserResponse.userDetails.name || !AddUserResponse.userDetails.email) {
      toast.error("Please complete all required fields.");
      return;
    } */
    //  if (!name) {
    //     toast.error("Please complete all required fields.");
    //     return;
    //   }
    console.log("AddUserResponse", {
      firstName,
      lastName,
      email,
      phone,
      suburb,
      state,
    });
  };

  return (
    <div>
      <Row>
        <Col xs={12} lg={8}>
          <div style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
            <div
              style={{ borderBottom: "1px solid #ddd", padding: "15px 20px" }}
            >
              <Form>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        style={{ borderRadius: "10px" }}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        style={{ borderRadius: "10px" }}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Suburb</Form.Label>
                      <Form.Select
                        onChange={(e) => setSuburb(e.target.value)}
                        style={{ borderRadius: "10px" }}
                        value={suburb}
                      >
                        {/* <option value=""disabled >select the suburb</option> */}
                        <option value="" disabled>
                          Select a suburb
                        </option>
                        <option value="Hobart, 7000">Hobart, 7000</option>
                        <option value="usa">usa</option>
                        <option value="africa">africa</option>
                        <option value="Glebe, 7000">Glebe, 7000</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        onChange={(e) => setState(e.target.value)}
                        style={{ borderRadius: "10px" }}
                        value={state}
                      >
                        <option value="" disabled>
                          Select a state
                        </option>
                        <option value="Tasmania">Tasmania</option>
                        <option value="france">france</option>
                        <option value="paris">paris</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Your email address"
                        style={{ borderRadius: "10px" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="0400 000 000"
                        style={{ borderRadius: "10px" }}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <button
                className="text-white bg-primary"
                onClick={handleContinue} 
              >
                Submit
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
