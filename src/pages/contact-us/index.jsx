// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     inquiry: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//     setErrors({ ...errors, [id]: "" }); // Clear error when user types
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First Name is required.";
//     if (!formData.lastName) newErrors.lastName = "Last Name is required.";
//     if (!formData.email) newErrors.email = "Email Address is required.";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Invalid email format.";
//     if (!formData.contactNumber)
//       newErrors.contactNumber = "Contact Number is required.";
//     if (!formData.inquiry) newErrors.inquiry = "Please select an option.";
//     if (!formData.message) newErrors.message = "Message cannot be empty.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) {
//       return; // Stop submission if validation fails
//     }

//     try {
//       await axios.post("http://localhost:5000/send-feedback", formData);
//       setSuccessMessage("Your message has been sent successfully!");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         contactNumber: "",
//         inquiry: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setSuccessMessage("Failed to send your message. Please try again.");
//     }
//   };

//   return (
//     <>
//       <div
//         className="container-fluid page-header py-6 my-5 mt-0 wow fadeIn"
//         data-wow-delay="0.1s"
//       >
//         <div
//           className="container"
//           style={{
//             display: "flex",
//             height: "100%",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div className="row justify-content-center">
//             <div className="col-lg-12">
//               <h3 className="display-5 text-light mb-0">Contact Us</h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid facts py-5 pt-lg-0 contactFacts">
//         <div className="container py-5 pt-lg-0">
//           <div className="row gx-0">
//             <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
//               <div className="bg-white shadow d-flex align-items-center h-100 p-4">
//                 <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
//                   <h1 className="display-12 mb-4 text-center">
//                     If You Have Any Query, Please Contact Us
//                   </h1>

//                   <Form onSubmit={handleSubmit} style={{ padding: "0px 10px" }}>
//                     <Form.Group
//                       as={Row}
//                       className="mb-2"
//                       controlId="formPlaintextEmail"
//                     >
//                       <Form.Label column sm="12">
//                         First Name
//                       </Form.Label>
//                       <Col sm="12">
//                         <Form.Control placeholder="first Name" />
//                       </Col>
//                     </Form.Group>
//                     <Form.Group
//                       as={Row}
//                       className="mb-2"
//                       controlId="formPlaintextEmail"
//                     >
//                       <Form.Label column sm="12">
//                         Last Name
//                       </Form.Label>
//                       <Col sm="12">
//                         <Form.Control placeholder="Last Name" />
//                       </Col>
//                     </Form.Group>
//                     <Form.Group
//                       as={Row}
//                       className="mb-2"
//                       controlId="formPlaintextEmail"
//                     >
//                       <Form.Label column sm="12">
//                         Email Address
//                       </Form.Label>
//                       <Col sm="12">
//                         <Form.Control placeholder="Email Address" />
//                       </Col>
//                     </Form.Group>
//                     <Form.Group
//                       as={Row}
//                       className=""
//                       controlId="formPlaintextEmail"
//                     >
//                        <Form.Label column sm="6">
//                         Inquiring About
//                       </Form.Label>
//                       <Form.Select
//                                         // name="state"
//                                         // value={state}
//                                         // onChange={handleInputChange}
//                                       >
//                                         <option value="" disabled>
//                                           Select a inqury
//                                         </option>
//                                         <option value="">3 x 60 Minute Lesson</option>
//                                         <option value="">5 x 30 Minute Lesson</option>
//                                         <option value="">7 x 25 Minute Lesson</option>
//                                         <option value="">10 x 60 Minute Lesson</option>
//                                       </Form.Select>

//                     </Form.Group>

//                     <Form.Group
//                       as={Row}
//                       className="mb-2"
//                       controlId="formPlaintextPassword"
//                     >
//                       <Form.Label column sm="12">
//                         Comment
//                       </Form.Label>

//                       <Col sm="12">
//                         <Form.Control type="password" placeholder="comment" />
//                       </Col>
//                     </Form.Group>
//                     <Button
//                       type="submit"
//                       variant="success"
//                       className="ml-auto p-2"
//                       style={{
//                         fontWeight: "bold",
//                         width: "100%",
//                         marginTop: "20px",
//                       }}
//                     >
//                       Submit
//                     </Button>

//                     {successMessage && (
//                       <div className="mt-3 alert alert-danger">
//                         {successMessage}
//                       </div>
//                     )}
//                   </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import axios from "axios";
// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import { toast } from "react-toastify";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     inquiry: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//     setErrors({ ...errors, [id]: "" }); // Clear error when user types
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First Name is required.";
//     if (!formData.lastName) newErrors.lastName = "Last Name is required.";
//     if (!formData.email) newErrors.email = "Email Address is required.";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Invalid email format.";
//     if (!formData.contactNumber)
//       newErrors.contactNumber = "Contact Number is required.";
//     if (!formData.inquiry) newErrors.inquiry = "Please select an option.";
//     if (!formData.message) newErrors.message = "Message cannot be empty.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!validate()) return;

//     try {
//       const response = await axios.post(
//         "https://datatechgenius.com/expert-driver/public/index.php/api/contacts",
//         formData
//       );

//       if (response.status === 200) {
//         toast.success("Message sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           contactNumber: "",
//           inquiry: "",
//           message: "",
//         });
//         setSuccessMessage("Your message has been sent successfully!");
//       } else {
//         toast.error(response.data.message || "Submission failed.");
//       }
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "An error occurred. Please try again."
//       );
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid page-header py-6 my-5 mt-0 wow fadeIn">
//         <div
//           className="container"
//           style={{
//             display: "flex",
//             height: "100%",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div className="row justify-content-center">
//             <div className="col-lg-12">
//               <h3 className="display-5 text-light mb-0">Contact Us</h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid facts py-5 pt-lg-0 contactFacts">
//         <div className="container py-5 pt-lg-0">
//           <div className="row gx-0">
//             <div className="col-lg-12 wow fadeIn">
//               <div className="bg-white shadow d-flex align-items-center h-100 p-4">
//                 <div className="col-lg-12 wow fadeInUp">
//                   <h1 className="display-12 mb-4 text-center">
//                     If You Have Any Query, Please Contact Us
//                   </h1>

//                   <Form onSubmit={handleSubmit} style={{ padding: "0px 10px" }}>
//                     <Form.Group className="mb-2">
//                       <Form.Label>First Name</Form.Label>
//                       <Form.Control
//                         id="firstName"
//                         placeholder="First Name"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                       />
//                       {errors.firstName && (
//                         <div style={{ color: "#dc3545" }}>{errors.firstName}</div>
//                       )}
//                     </Form.Group>

//                     <Form.Group className="mb-2">
//                       <Form.Label>Last Name</Form.Label>
//                       <Form.Control
//                         id="lastName"
//                         placeholder="Last Name"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                       />
//                       {errors.lastName && (
//                         <div style={{ color: "#dc3545" }}>{errors.lastName}</div>
//                       )}
//                     </Form.Group>

//                     <Form.Group className="mb-2">
//                       <Form.Label>Email Address</Form.Label>
//                       <Form.Control
//                         id="email"
//                         placeholder="Email Address"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                       {errors.email && (
//                         <div style={{ color: "#dc3545" }}>{errors.email}</div>
//                       )}
//                     </Form.Group>

//                     <Form.Group className="mb-2">
//                       <Form.Label>Contact Number</Form.Label>
//                       <Form.Control
//                         id="contactNumber"
//                         placeholder="Contact Number"
//                         value={formData.contactNumber}
//                         onChange={handleChange}
//                       />
//                       {errors.contactNumber && (
//                         <div style={{ color: "#dc3545" }}>{errors.contactNumber}</div>
//                       )}
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                       <Form.Label>Inquiry</Form.Label>
//                       <Form.Select
//                         id="inquiry"
//                         value={formData.inquiry}
//                         onChange={handleChange}
//                       >
//                         <option value="">Select a lesson</option>
//                         <option value="3x60">3 x 60 Minute Lesson</option>
//                         <option value="5x30">5 x 30 Minute Lesson</option>
//                         <option value="7x25">7 x 25 Minute Lesson</option>
//                         <option value="10x60">10 x 60 Minute Lesson</option>
//                         <option value="other">Other</option>
//                       </Form.Select>
//                       {errors.inquiry && (
//                         <div style={{ color: "#dc3545" }}>{errors.inquiry}</div>
//                       )}
//                     </Form.Group>

//                     <Form.Group className="mb-2">
//                       <Form.Label>Message</Form.Label>
//                       <Form.Control
//                         id="message"
//                         as="textarea"
//                         placeholder="Enter your message"
//                         value={formData.message}
//                         onChange={handleChange}
//                       />
//                       {errors.message && (
//                         <div style={{ color: "#dc3545" }}>{errors.message}</div>
//                       )}
//                     </Form.Group>

//                     <Button
//                       type="submit"
//                       variant="success"
//                       className="ml-auto p-2"
//                       style={{
//                         fontWeight: "bold",
//                         width: "100%",
//                         marginTop: "20px",
//                       }}
//                     >
//                       Submit
//                     </Button>

//                     {successMessage && (
//                       <div className="mt-3 alert alert-success">
//                         {successMessage}
//                       </div>
//                     )}
//                   </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import axios from "axios";
// import React, { useState } from "react";
// import { Form, Button, Col, Row } from "react-bootstrap";
// import { toast } from "react-toastify";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     inquiry: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" }); // Reset error when user types
//   };

//   // Form validation
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim())
//       newErrors.firstName = "First Name is required.";
//     if (!formData.lastName.trim())
//       newErrors.lastName = "Last Name is required.";
//     if (!formData.email.trim()) newErrors.email = "Email Address is required.";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Invalid email format.";
//     if (!formData.contactNumber.trim())
//       newErrors.contactNumber = "Contact Number is required.";
//     if (!formData.inquiry) newErrors.inquiry = "Please select an option.";
//     if (!formData.message.trim())
//       newErrors.message = "Message cannot be empty.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!validate()) return;

//     try {
//       const response = await axios.post(
//         "https://datatechgenius.com/expert-driver/public/index.php/api/contacts",
//         {
//           firstname: formData.firstName,
//           lastname: formData.lastName,
//           emailaddress: formData.email,
//           contact_number: formData.contactNumber,
//           inquiring_about: formData.inquiry,
//           message: formData.message,
//         }
//       );

//       if (response.status === 201) {
//         toast.success("Message sent successfully!");
//         setSuccessMessage("Your message has been sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           contactNumber: "",
//           inquiry: "",
//           message: "",
//         });
//       } else {
//         toast.error(response.data.message || "Submission failed.");
//       }
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "An error occurred. Please try again."
//       );
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid page-header py-6 my-5 mt-0 wow fadeIn">
//         <div
//           className="container"
//           style={{
//             display: "flex",
//             height: "100%",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div className="row justify-content-center">
//             <div className="col-lg-12">
//               <h3 className="display-5 text-light mb-0">Contact Us</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid facts py-5 pt-lg-0 contactFacts">
//         <div className="container py-5 pt-lg-0">
//           <div className="row gx-0">
//             <div className="col-lg-12 wow fadeIn">
//               <div className="bg-white shadow d-flex align-items-center h-100 p-4">
//                 <div className="col-lg-12 wow fadeInUp">
//                   <h1 className="display-12 mb-4 text-center">
//                     If You Have Any Query, Please Contact Us
//                   </h1>

//                   <Form onSubmit={handleSubmit}>
//                     <Row className="mb-3">
//                       <Form.Group className="mb-2" as={Col} md="6">
//                         <Form.Label>First Name</Form.Label>
//                         <Form.Control
//                           name="firstName"
//                           placeholder="First Name"
//                           value={formData.firstName}
//                           onChange={handleChange}
//                         />
//                         {errors.firstName && (
//                           <div className="text-danger mt-2 " style={{fontSize: '14px'}}>{errors.firstName}</div>
//                         )}
//                       </Form.Group>

//                       <Form.Group className="mb-2" as={Col} md="6">
//                         <Form.Label>Last Name</Form.Label>
//                         <Form.Control
//                           name="lastName"
//                           placeholder="Last Name"
//                           value={formData.lastName}
//                           onChange={handleChange}
//                         />
//                         {errors.lastName && (
//                           <div className="text-danger mt-2 " style={{fontSize: '14px'}}>{errors.lastName}</div>
//                         )}
//                       </Form.Group>

//                       <Form.Group className="mb-2" as={Col} md="6">
//                         <Form.Label>Email Address</Form.Label>
//                         <Form.Control
//                           name="email"
//                           type="email"
//                           placeholder="Email Address"
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                         {errors.email && (
//                           <div className="text-danger mt-2 " style={{fontSize: '14px'}}>{errors.email}</div>
//                         )}
//                       </Form.Group>

//                       <Form.Group className="mb-2" as={Col} md="6">
//                         <Form.Label>Contact Number</Form.Label>
//                         <Form.Control
//                           name="contactNumber"
//                           placeholder="Contact Number"
//                           value={formData.contactNumber}
//                           onChange={handleChange}
//                         />
//                         {errors.contactNumber && (
//                           <div className="text-danger mt-2 " style={{fontSize: '14px'}}>
//                             {errors.contactNumber}
//                           </div>
//                         )}
//                       </Form.Group>

//                       <Form.Group className="mb-2" as={Col} md="6">
//                         <Form.Label>Inquiry</Form.Label>
//                         <Form.Select
//                           name="inquiry"
//                           value={formData.inquiry}
//                           onChange={handleChange}
//                         >
//                           <option value="">Select an option</option>
//                           <option value="3x60">3 x 60 Minute Lesson</option>
//                           <option value="5x30">5 x 30 Minute Lesson</option>
//                           <option value="7x25">7 x 25 Minute Lesson</option>
//                           <option value="10x60">10 x 60 Minute Lesson</option>
//                           <option value="other">Other</option>
//                         </Form.Select>
//                         {errors.inquiry && (
//                           <div className="text-danger mt-2 " style={{fontSize: '14px'}}>{errors.inquiry}</div>
//                         )}
//                       </Form.Group>

//                       <Form.Group className="mb-2">
//                         <Form.Label>Message</Form.Label>
//                         <Form.Control
//                           rows={4}
//                           name="message"
//                           as="textarea"
//                           placeholder="Enter your message"
//                           value={formData.message}
//                           onChange={handleChange}
//                         />
//                         {errors.message && (
//                           <div className="text-danger mt-2 " style={{fontSize: '14px'}}>{errors.message}</div>
//                         )}
//                       </Form.Group>
//                       <div className="d-flex justify-content-center">
//                         <Button type="submit" variant="success">
//                           Submit
//                         </Button>
//                       </div>

//                       {successMessage && (
//                         <div className="alert alert-success mt-3">
//                           {successMessage}
//                         </div>
//                       )}
//                     </Row>
//                   </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import ContactUsService from "../../services/contactus.service";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    inquiry: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Reset error when user types
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email Address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.contactNumber.trim())
      newErrors.contactNumber = "Contact Number is required.";
    if (!formData.inquiry) newErrors.inquiry = "Please select an option.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    try {
      const response = await ContactUsService.submitContactForm(formData);

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          inquiry: "",
          message: "",
        });
      } else {
        toast.error(response.data.message || "Submission failed.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <>
      <div className="container-fluid page-header py-6 my-5 mt-0 wow fadeIn">
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
              <h3 className="display-5 text-light mb-0">Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid facts py-5 pt-lg-0 contactFacts">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-12 wow fadeIn">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4">
                <div className="col-lg-12 wow fadeInUp">
                  <h1 className="display-12 mb-4 text-center">
                    If You Have Any Query, Please Contact Us
                  </h1>

                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group className="mb-2" as={Col} md="6">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                        {errors.firstName && (
                          <div className="text-danger mt-2 " style={{fontSize: '14px'}}>{errors.firstName}</div>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-2" as={Col} md="6">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                        {errors.lastName && (
                          <div className="text-danger mt-2 " style={{fontSize: '14px'}}>{errors.lastName}</div>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-2" as={Col} md="6">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <div className="text-danger mt-2 " style={{fontSize: '14px'}}>{errors.email}</div>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-2" as={Col} md="6">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          name="contactNumber"
                          placeholder="Contact Number"
                          value={formData.contactNumber}
                          onChange={handleChange}
                        />
                        {errors.contactNumber && (
                          <div className="text-danger mt-2 " style={{fontSize: '14px'}}>
                            {errors.contactNumber}
                          </div>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-2" as={Col} md="6">
                        <Form.Label>Inquiry</Form.Label>
                        <Form.Select
                          name="inquiry"
                          value={formData.inquiry}
                          onChange={handleChange}
                        >
                          <option value="">Select an option</option>
                          <option value="3x60">3 x 60 Minute Lesson</option>
                          <option value="5x30">5 x 30 Minute Lesson</option>
                          <option value="7x25">7 x 25 Minute Lesson</option>
                          <option value="10x60">10 x 60 Minute Lesson</option>
                          <option value="other">Other</option>
                        </Form.Select>
                        {errors.inquiry && (
                          <div className="text-danger mt-2   style={{fontSize: '14px'}}mt-2">{errors.inquiry}</div>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          rows={4}
                          name="message"
                          as="textarea"
                          placeholder="Enter your message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && (
                          <div className="text-danger mt-2 " style={{fontSize: '14px'}}>{errors.message}</div>
                        )}
                      </Form.Group>
                      <div className="d-flex justify-content-center mt-2">
                        <Button type="submit" variant="success" style={{width: "150px"}}>
                          Submit
                        </Button>
                      </div>

                      {/* {successMessage && (
                        <div className="alert alert-success mt-3">
                          {successMessage}
                        </div>
                      )} */}
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
