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
//                   <Col xs={12} md={4}>
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
//                   <Col xs={12} md={4}>
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
//                   <Col xs={12} md={4}>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Suburb</Form.Label>
//                       <Form.Select style={{ borderRadius: "10px" }}>
//                         <option value="Hobart, 7000">Hobart, 7000</option>
//                         <option value="Glebe, 7000">Glebe, 7000</option>
//                       </Form.Select>
//                     </Form.Group>
//                   </Col>
//                   <Col xs={12} md={4}>
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
//                   <Col xs={12} md={4}>
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

// import React, { useState } from "react";
// import { Row, Col, Form, Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// export default function UseForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [state, setState] = useState("");
//   const [phone, setPhone] = useState("");
//   const [suburb, setSuburb] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let formErrors = {};

//     if (!firstName) {
//       formErrors.firstName = "First name is required.";
//     } else if (!/^[A-Za-z]+$/.test(firstName)) {
//       formErrors.firstName = "First name can only contain letters.";
//     }

//     if (!lastName) {
//       formErrors.lastName = "Last name is required.";
//     } else if (!/^[A-Za-z\s.,]+$/.test(lastName)) {
//       formErrors.lastName = "Last name can only contain letters.";
//     }

//     if (!email) {
//       formErrors.email = "Email address is required.";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       formErrors.email = "Please enter a valid email address.";
//     }

//     if (!phone) {
//       formErrors.phone = "Phone number is required.";
//     } else if (!/^\d+$/.test(phone)) {
//       formErrors.phone = "Phone number can only contain numbers.";
//     }

//     if (!state) formErrors.state = "State is required.";
//     if (!suburb) formErrors.suburb = "Suburb is required.";

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleContinue = (e) => {
//     e.preventDefault(); // Prevent page refresh

//     if (!validateForm()) {
//       return;
//     }

//   //   if (!firstName) formErrors.firstName = "First name is required.";
//   //   if (!lastName) formErrors.lastName = "Last name is required.";
//   //   if (!email) {
//   //     formErrors.email = "Email address is required.";
//   //   } else if (!/\S+@\S+\.\S+/.test(email)) {
//   //     formErrors.email = "Please enter a valid email address.";
//   //   }
//   //   if (!phone) formErrors.phone = "Phone number is required.";
//   //   if (!state) formErrors.state = "State is required.";
//   //   if (!suburb) formErrors.suburb = "Suburb is required.";

//   //   setErrors(formErrors);
//   //   return Object.keys(formErrors).length === 0;
//   // };

//   // const handleContinue = (e) => {
//   //   e.preventDefault(); // Prevent page refresh

//   //   if (!validateForm()) {
//   //     return;
//   //   }

//     console.log("Form Data:", {
//       firstName,
//       lastName,
//       email,
//       phone,
//       suburb,
//       state,
//     });

//     navigate("/admin/users", { state: { firstName } });

//     // Optionally reset the form fields
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setState("");
//     setPhone("");
//     setSuburb("");
//   };

//   return (
//     <Container className="mt-4">
//       <h4>Users Form</h4>
//       <Form onSubmit={handleContinue} style={{ marginTop: "30px" }}>
//         <Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="First name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//               {errors.firstName && <div style={{ color: "#dc3545" }}>{errors.firstName}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Last name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//               {errors.lastName && <div style={{ color: "#dc3545" }}>{errors.lastName}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Suburb</Form.Label>
//               <Form.Select
//                 value={suburb}
//                 onChange={(e) => setSuburb(e.target.value)}
//               >
//                 <option value="" disabled>
//                   Select a Suburb
//                 </option>
//                 <option value="Hobart, 7000">Hobart, 7000</option>
//                 <option value="USA">USA</option>
//                 <option value="Africa">Africa</option>
//                 <option value="Glebe, 7000">Glebe, 7000</option>
//               </Form.Select>
//               {errors.suburb && <div style={{ color: "#dc3545" }}>{errors.suburb}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Your email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && <div style={{ color: "#dc3545" }}>{errors.email}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="0400 000 000"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//               {errors.phone && <div style={{ color: "#dc3545" }}>{errors.phone}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>State</Form.Label>
//               <Form.Select
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//               >
//                 <option value="" disabled>
//                   Select a State
//                 </option>
//                 <option value="Tasmania">Tasmania</option>
//                 <option value="France">France</option>
//                 <option value="Paris">Paris</option>
//                 <option value="Other">Other</option>
//               </Form.Select>
//               {errors.state && <div style={{ color: "#dc3545" }}>{errors.state}</div>}
//             </Form.Group>
//           </Col>
//         </Row>

//         <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
//           <Button type="submit" className="me-2" variant="primary">
//             Submit
//           </Button>
//           <Button type="button" variant="secondary">
//             Cancel
//           </Button>
//         </div>
//       </Form>
//     </Container>
//   );
// }


// import React, { useState } from "react";
// import { Row, Col, Form, Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// export default function UseForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [state, setState] = useState("");
//   const [phone, setPhone] = useState("");
//   const [suburb, setSuburb] = useState("");
//   const [errors, setErrors] = useState({});
//   const [pickUpAddress, setPickUpAddress] = useState("");
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let formErrors = {};

//     if (!firstName) {
//       formErrors.firstName = "First name is required.";
//     } else if (!/^[A-Za-z]+$/.test(firstName)) {
//       formErrors.firstName = "First name can only contain letters.";
//     }

//     if (!lastName) {
//       formErrors.lastName = "Last name is required.";
//     } else if (!/^[A-Za-z\s.,]+$/.test(lastName)) {
//       formErrors.lastName = "Last name can only contain letters.";
//     }

//     if (!email) {
//       formErrors.email = "Email address is required.";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       formErrors.email = "Please enter a valid email address.";
//     }

//     if (!phone) {
//       formErrors.phone = "Phone number is required.";
//     } else if (!/^\d{10}$/.test(phone)) {
//       formErrors.phone = "Phone number can only contain numbers.";
//     }

//     if (!pickUpAddress) {
//       formErrors.pickUpAddress = "pick up address is requried.";
//     } else if (!/^\d$/.test(pickUpAddress)) {
//       formErrors.pickUpAddress = "pick up address is requried.";
//     }

//     if (!state) formErrors.state = "State is required.";
//     if (!suburb) formErrors.suburb = "Suburb is required.";

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   // Handle input change and validate in real-time
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "firstName":
//         setFirstName(value);
//         if (/^[A-Za-z]+$/.test(value)) setErrors((prev) => ({ ...prev, firstName: "" }));
//         break;
//       case "lastName":
//         setLastName(value);
//         if (/^[A-Za-z\s.,]+$/.test(value)) setErrors((prev) => ({ ...prev, lastName: "" }));
//         break;
//       case "email":
//         setEmail(value);
//         if (/\S+@\S+\.\S+/.test(value)) setErrors((prev) => ({ ...prev, email: "" }));
//         break;
//       case "phone":
//         setPhone(value);
//         if (/^\d{10}$/.test(value)) {
//           setErrors((prev) => ({ ...prev, phone: "" }));
//         }
//         break;
//       case "state":
//         setState(value);
//         if (value) setErrors((prev) => ({ ...prev, state: "" }));
//         break;
//       case "pickUpAddress":
//         setPickUpAddress(value);
//         if (value) setErrors((prev) => ({ ...prev, state: "" }));
//         break;
//       case "suburb":
//         setSuburb(value);
//         if (value) setErrors((prev) => ({ ...prev, suburb: "" }));
//         break;
//       default:
//         break;
//     }
//   };

//   const handleContinue = (e) => {``
//     e.preventDefault(); // Prevent page refresh

//     if (!validateForm()) {
//       return;
//     }

//     console.log("Form Data:", {
//       firstName,
//       lastName,
//       email,
//       phone,
//       suburb,
//       state,
//     });

//     navigate("/admin/users", { state: { firstName } });

//     // Optionally reset the form fields
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setState("");
//     setPhone("");
//     setSuburb("");
//   };

//   return (
//     <Container className="mt-4">
//       <h4>Users Form</h4>
//       <Form onSubmit={handleContinue} style={{ marginTop: "30px" }}>
//         <Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="First name"
//                 name="firstName"
//                 value={firstName}
//                 onChange={handleInputChange}
//               />
//               {errors.firstName && <div style={{ color: "#dc3545" }}>{errors.firstName}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Last name"
//                 name="lastName"
//                 value={lastName}
//                 onChange={handleInputChange}
//               />
//               {errors.lastName && <div style={{ color: "#dc3545" }}>{errors.lastName}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Your email address"
//                 name="email"
//                 value={email}
//                 onChange={handleInputChange}
//               />
//               {errors.email && <div style={{ color: "#dc3545" }}>{errors.email}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="0400 000 000"
//                 name="phone"
//                 value={phone}
//                 onChange={handleInputChange}
//                 maxLength="10"
//               />
//               {errors.phone && <div style={{ color: "#dc3545" }}>{errors.phone}</div>}
//             </Form.Group>
//           </Col>


//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Pick Up Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Pick Up Address"
//                 name="pickupaddress"
//                 value={pickUpAddress}
//                 onChange={handleInputChange}
//                 as="textarea" rows={3}
//               />
//               {errors.pickUpAddress && <div style={{ color: "#dc3545" }}>{errors.pickUpAddress}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Suburb</Form.Label>
//               <Form.Select
//                 name="suburb"
//                 value={suburb}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>
//                   Select a Suburb
//                 </option>
//                 <option value="Hobart, 7000">Hobart, 7000</option>
//                 <option value="USA">USA</option>
//                 <option value="Africa">Africa</option>
//                 <option value="Glebe, 7000">Glebe, 7000</option>
//               </Form.Select>
//               {errors.suburb && <div style={{ color: "#dc3545" }}>{errors.suburb}</div>}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>State</Form.Label>s
//               <Form.Select
//                 name="state"
//                 value={state}
//                 onChange={handleInputChange}
//               >
//                 <option value="" disabled>
//                   Select a State
//                 </option>
//                 <option value="Tasmania">Tasmania</option>
//                 <option value="France">France</option>
//                 <option value="Paris">Paris</option>
//                 <option value="Other">Other</option>
//               </Form.Select>
//               {errors.state && <div style={{ color: "#dc3545" }}>{errors.state}</div>}
//             </Form.Group>
//           </Col>
//         </Row>

//         <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
//           <Button type="submit" className="me-2" variant="primary">
//             Submit
//           </Button>
//           <Button type="button" variant="secondary">
//             Cancel
//           </Button>
//         </div>
//       </Form>
//     </Container>
//   );
// }
 
import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
export default function UseForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Suburb: "",
    State: "",
    PickUpAddress: "",
  });
 
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
 
  const validateForm = () => {
    let formErrors = {};
   
    if (!formData.firstName) formErrors.firstName = "First name is required.";
    if (!formData.lastName) formErrors.lastName = "Last name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Valid email is required.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Valid phone number is required.";
    if (!formData.pickUpAddress) formErrors.pickUpAddress = "Pick-up address is required.";
    if (!formData.state) formErrors.state = "State is required.";
    if (!formData.suburb) formErrors.suburb = "Suburb is required.";
 
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
   
    try {
      const response = await axios.post("https://datatechgenius.com/expert-driver/public/index.php/api/users", {
        fname: formData.firstName ,
        lname: formData.lastName,
        email: formData.email,
        password: "password123",
        phone: formData.phone,
        suburbs: formData.suburb,
        address: formData.pickUpAddress,
        state: formData.state,
        gender: "male",
        role: "user",
        status: 1,
      });
     
      if (response.status === 200) {
        toast.success("User registered successfully!");
        navigate("/admin/users", { state: { firstName: formData.firstName } });
      }
    } catch (error) {
      console.log(error)
      if (error.response) {
        const errorMessage = error.response.data.message || "An error occurred. Please try again.";
 
        // Checking specific API errors for duplicate email or phone number
        if (errorMessage.includes("email already exists")) {
          toast.error("This email is already in use. Please use a different email.");
        } else if (errorMessage.includes("phone number already exists")) {
          toast.error("This phone number is already registered.");
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error("Request failed. Please check your internet connection.");
      }
    }
  };
 
  return (
    <Container className="mt-4">
      <h4>Users Form</h4>
      <Form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
        <Row>
          {Object.keys(formData).map((key) => (
            <Col lg={4} key={key}>
              <Form.Group className="mb-3">
                <Form.Label style={{textTransform:"capitalize"}}>{key.replace(/([A-Z])/g, ' $1')}</Form.Label>
                <Form.Control
                  type={key === "email" ? "email" : "text"}
                  placeholder={key.replace(/([A-Z])/g, ' $1').replace(/\b\w/g, (char) => char.toUpperCase())}
                  name={key}
                  value={formData[key]}
                  onChange={handleInputChange}
                />
                {errors[key] && <div style={{ color: "#dc3545" }}>{errors[key]}</div>}
              </Form.Group>
            </Col>
          ))}
        </Row>
 
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
          <Button type="submit" className="me-2" variant="primary" >Submit</Button>
          <Button type="button" variant="secondary">Cancel</Button>
        </div>
      </Form>
    </Container>
  );
}
 
 