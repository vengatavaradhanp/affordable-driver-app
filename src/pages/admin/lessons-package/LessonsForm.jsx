// import React, { useState } from "react";
// import { Row, Col, Form, Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";


// export default function LessonsForm() {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [validity, setValidity] = useState("");
//   const [duration, setDuration] = useState("");
//   const [description, setDescription] = useState("");
//   const [status, setStatus] = useState("");
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData]=useState("")
//   const [successMessage, setSuccessMessage]= useState("")
//   // New states for image upload
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const navigate = useNavigate();

//   const validateForm = () => {
//     let formErrors = {};

//     if (!title) {
//       formErrors.title = "Title is required.";
//     } else if (!/^[A-Za-z]+$/.test(title)) {
//       formErrors.title = "Title can only contain letters.";
//     }

//     if (!price) {
//       formErrors.price = "Price is required.";
//     } else if (!/^\d+$/.test(price)) {
//       formErrors.price = "Price can only contain letters.";
//     }

//     if (!validity) {
//       formErrors.validity = "validity is required.";
//     } else if (!/^\d+$/.test(validity)) {
//       formErrors.validity = "validity can only contain numbers.";
//     }

//     if (!duration) {
//       formErrors.duration = "Duration is required.";
//     } else if (!/^\d+$/.test(duration)) {
//       formErrors.duration = "Duration can only contain numbers.";
//     }

//     if (!description) {
//       formErrors.description = "Description is required.";
//     }

//     // Optionally add validation for image field if needed
//     // e.g., if (!image) { formErrors.image = "Image is required."; }

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   // Handle input change and validate in real-time
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "title":
//         setTitle(value);
//         if (/^[A-Za-z]+$/.test(value))
//           setErrors((prev) => ({ ...prev, title: "" }));
//         break;
//       case "price":
//         setPrice(value);
//         if (/^[A-Za-z\s.,]+$/.test(value))
//           setErrors((prev) => ({ ...prev, price: "" }));
//         break;
//       case "validity":
//         setValidity(value);
//         if (/\S+@\S+\.\S+/.test(value))
//           setErrors((prev) => ({ ...prev, validity: "" }));
//         break;
//       case "duration":
//         setDuration(value);
//         if (/^\d+$/.test(value)) {
//           setErrors((prev) => ({ ...prev, duration: "" }));
//         }
//         break;
//       case "description":
//         setDescription(value);
//         if (value) setErrors((prev) => ({ ...prev, description: "" }));
//         break;
//       default:
//         break;
//     }
//   };

//   // Handle image file selection and preview
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };


//   const handleSubmit = async (event) => {
//     console.log("details",formData)
//     event.preventDefault();

//     if (!validateForm()) return;

//     try {
//       const response = await axios.post(
//         "https://datatechgenius.com/expert-driver/public/index.php/api/lesson-packages",
//         {
//           title: formData.title,
//           amount: formData.price,
//           count: formData.duration,
//           description: formData.description,
//           expiry_date: formData.validity,
//           minutes: formData.message,
//         }
//       );

//       if (response.status === 201) {
//         toast.success("Message sent successfully!");
//         setFormData({
//           title : "",
//           price: "",
//           duration: "",
//           description: "",
//           validity: "",
//           message: "",
//         });
//         setSuccessMessage("Your message has been sent successfully!");
//       } else {
//         toast.error(response.data.message || "Submission failed.");
//       }

//       navigate("/admin/lesson", { state: { title } });

//       // Optionally reset the form fields
//       setTitle("");
//       setPrice("");
//       setValidity("");
//       setDuration("");
//       setDescription("");
//       setStatus("");
//       setImage(null);
//       setImagePreview(null);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "An error occurred. Please try again."
//       );
//     }
//   };
  

//   return (
//     <Container fluid className="mt-4">
//       <h4>Lessons Form</h4>
//       <Form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
//         <Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Title"
//                 name="title"
//                 value={title}
//                 onChange={handleInputChange}
//               />
//               {errors.title && (
//                 <div style={{ color: "#dc3545" }}>{errors.title}</div>
//               )}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Price"
//                 name="price"
//                 value={price}
//                 onChange={handleInputChange}
//               />
//               {errors.price && (
//                 <div style={{ color: "#dc3545" }}>{errors.price}</div>
//               )}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Validity</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Validity"
//                 name="validity"
//                 value={validity}
//                 onChange={handleInputChange}
//               />
//               {errors.validity && (
//                 <div style={{ color: "#dc3545" }}>{errors.validity}</div>
//               )}
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Duration</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Duration"
//                 name="duration"
//                 value={duration}
//                 onChange={handleInputChange}
//               />
//               {errors.duration && (
//                 <div style={{ color: "#dc3545" }}>{errors.duration}</div>
//               )}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Status</Form.Label>
//               <div className="mt-1">
//                 <Form.Check
//                   inline
//                   label="Active"
//                   name="status"
//                   type="radio"
//                   id="inline-radio-1"
//                   onChange={() => setStatus("Active")}
//                 />
//                 <Form.Check
//                   inline
//                   label="Inactive"
//                   name="status"
//                   type="radio"
//                   id="inline-radio-2"
//                   onChange={() => setStatus("Inactive")}
//                 />
//               </div>
//               {errors.status && (
//                 <div style={{ color: "#dc3545", marginTop: "5px" }}>
//                   {errors.status}
//                 </div>
//               )}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Description"
//                 name="description"
//                 value={description}
//                 onChange={handleInputChange}
//                 as="textarea"
//                 rows={3}
//               />
//               {errors.description && (
//                 <div style={{ color: "#dc3545" }}>{errors.description}</div>
//               )}
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* New Row for Image Upload */}
//         <Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Image Upload</Form.Label>
//               <Form.Control
//                 type="file"
//                 accept="image/*"
//                 name="image"
//                 onChange={handleImageUpload}
//               />
//               {/* Optionally show validation errors for image if needed */}
//               {errors.image && (
//                 <div style={{ color: "#dc3545" }}>{errors.image}</div>
//               )}
//             </Form.Group>
//           </Col>
//           {imagePreview && (
//             <Col lg={4}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Preview</Form.Label>
//                 <div>
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     style={{ maxWidth: "200px" }}
//                   />
//                 </div>
//               </Form.Group>
//             </Col>
//           )}
//         </Row>

//         <div
//           style={{
//             marginTop: "30px",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Button
//             type="submit"
//             className="me-2"
//             variant="primary"
//             style={{ width: "100px" }}
//           >
//             Submit
//           </Button>
//           <Button type="button" variant="secondary" style={{ width: "100px" }}>
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
// import { toast } from "react-toastify";
// import axios from "axios";

// export default function LessonsForm() {
//   const [formData, setFormData] = useState({
//     title: "",
//     price: "",
//     validity: "",
//     duration: "",
//     description: "",
//     status: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const navigate = useNavigate();

//   const validateForm = () => {
//     let formErrors = {};

//     if (!formData.title) {
//       formErrors.title = "Title is required.";
//     } else if (!/^[A-Za-z\s]+$/.test(formData.title)) {
//       formErrors.title = "Title can only contain letters.";
//     }
//     if (!formData.price) {
//       formErrors.price = "Price is required.";
//     } else if (!/^\d+$/.test(formData.price)) {
//       formErrors.price = "Price can only contain numbers.";
//     }
//     if (!formData.validity) {
//       formErrors.validity = "Validity is required.";
//     } else if (!/^\d+$/.test(formData.validity)) {
//       formErrors.validity = "Validity can only contain numbers.";
//     }
//     if (!formData.duration) {
//       formErrors.duration = "Duration is required.";
//     } else if (!/^\d+$/.test(formData.duration)) {
//       formErrors.duration = "Duration can only contain numbers.";
//     }
//     if (!formData.description) {
//       formErrors.description = "Description is required.";
//     }
  
//     if (!image) {
//       formErrors.image = "Image is required.";
//     }

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   // Handle changes for text fields and radio buttons
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }
//   };

//   // Handle image file selection and preview
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

    
//     try {
//       const response = await axios.post(
//         "https://datatechgenius.com/expert-driver/public/index.php/api/users",
//         {
//           title: formData.title,
//           amount: formData.price,
//           minutes: formData.duration,
//           description: formData.description,
//           // suburbs: formData.suburb,
//           // address: formData.pickUpAddress, //
//           // state: formData.state,
         
//         }
//       );

//       if (response.status === 201) {
//         toast.success("LessonForm registered successfully!");
//         navigate("#", { state: { firstName: formData.title } });

//         setFormData({
//           title: "",
//           price: "",
//           duration: "",
//           description: "",
          
//         });
//       }
//     } catch (error) {
//       console.error("API Error:", error);
//       if (error.response) {
//         const errorMessage = error.response.data.message || "An error occurred. Please try again.";

//         if (errorMessage.includes("email already exists")) {
//           toast.error("This email is already in use. Please use a different email.");
//         } else if (errorMessage.includes("phone number already exists")) {
//           toast.error("This phone number is already registered.");
//         } else {
//           toast.error(errorMessage);
//         }
//       } else {
//         toast.error("Request failed. Please check your internet connection.");
//       }
//     }
//   };
//   return (
//     <Container fluid className="mt-4">
//       <h4>Lessons Form</h4>
//       <Form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
//         <Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//               />
//               {errors.title && (
//                 <div style={{ color: "#dc3545" }}>{errors.title}</div>
//               )}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//               />
//               {errors.price && (
//                 <div style={{ color: "#dc3545" }}>{errors.price}</div>
//               )}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Validity</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Validity"
//                 name="validity"
//                 value={formData.validity}
//                 onChange={handleInputChange}
//               />
//               {errors.validity && (
//                 <div style={{ color: "#dc3545" }}>{errors.validity}</div>
//               )}
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Duration</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Duration"
//                 name="duration"
//                 value={formData.duration}
//                 onChange={handleInputChange}
//               />
//               {errors.duration && (
//                 <div style={{ color: "#dc3545" }}>{errors.duration}</div>
//               )}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Status</Form.Label>
//               <div className="mt-1">
//                 <Form.Check
//                   inline
//                   label="Active"
//                   name="status"
//                   type="radio"
//                   id="inline-radio-1"
//                   value="Active"
//                   onChange={handleInputChange}
//                   checked={formData.status === "Active"}
//                 />
//                 <Form.Check
//                   inline
//                   label="Inactive"
//                   name="status"
//                   type="radio"
//                   id="inline-radio-2"
//                   value="Inactive"
//                   onChange={handleInputChange}
//                   checked={formData.status === "Inactive"}
//                 />
//               </div>
//               {errors.status && (
//                 <div style={{ color: "#dc3545", marginTop: "5px" }}>
//                   {errors.status}
//                 </div>
//               )}
//             </Form.Group>
//           </Col>

//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Image Upload</Form.Label>
//               <Form.Control
//                 type="file"
//                 accept="image/*"
//                 name="image"
//                 onChange={handleImageUpload}
//               />
//               {errors.image && (
//                 <div style={{ color: "#dc3545" }}>{errors.image}</div>
//               )}
//             </Form.Group>
//           </Col>
//           {imagePreview && (
//             <Col lg={4}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Preview</Form.Label>
//                 <div>
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     style={{ maxWidth: "200px" }}
//                   />
//                 </div>
//               </Form.Group>
//             </Col>
//           )}
          
//         </Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//               />
//               {errors.description && (
//                 <div style={{ color: "#dc3545" }}>{errors.description}</div>
//               )}
//             </Form.Group>
//           </Col>
       
//         <Row>
          
//         </Row>

//         <div
//           style={{
//             marginTop: "30px",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Button
//             type="submit"
//             className="me-2"
//             variant="primary"
//             style={{ width: "100px" }}
//           >
//             Submit
//           </Button>
//           <Button type="button" variant="secondary" style={{ width: "100px" }}>
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
import { toast } from "react-toastify";
import axios from "axios";
import UserService from "../../../services/user.service";
import LessonPackageService from "../../../services/lesson-package.service";

export default function LessonsForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    validity: "",
    duration: "",
    description: "",
    status: "",
  });
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};

    if (!formData.title) {
      formErrors.title = "Title is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.title)) {
      formErrors.title = "Title can only contain letters and spaces.";
    }
    if (!formData.price) {
      formErrors.price = "Price is required.";
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.price)) {
      formErrors.price = "Price must be a valid number (e.g. 79.99).";
    }
    if (!formData.validity) {
      formErrors.validity = "Validity is required.";
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.validity)) {
      formErrors.validity = "Validity must be in YYYY-MM-DD format.";
    }
    if (!formData.duration) {
      formErrors.duration = "Duration is required.";
    } else if (!/^\d+$/.test(formData.duration)) {
      formErrors.duration = "Duration can only contain numbers.";
    }
    if (!formData.description) {
      formErrors.description = "Description is required.";
    }
    if (!image) {
      formErrors.image = "Image is required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Update form data state and clear field errors on change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle file input and preview image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      if (errors.image) {
        setErrors((prev) => ({ ...prev, image: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // if (!validateForm()) return;

    // Create FormData for file upload and text fields
    // const data = new FormData();
    // data.append("title", formData.title);
    // data.append("amount", formData.price);
    // data.append("expiry_date", formData.validity);
    // data.append("minutes", formData.duration);
    // data.append("count", "5"); // Default count; adjust as needed
    // data.append("description", formData.description);
    // data.append("favorite", "1"); // Default favorite value
    // data.append("status", formData.status);
    // data.append("image", image);

    // try {
    //   const response = await axios.post(
    //     "https://datatechgenius.com/expert-driver/public/index.php/api/lesson-packages",
    //     data,
    //     {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     }
    //   );

    //   if (response.data.success) {
    //     toast.success(response.data.message || "Lesson registered successfully!");
    //     navigate("/admin/lessons", { state: { title: formData.title } });
    //     setFormData({
    //       title: "",
    //       price: "",
    //       validity: "",
    //       duration: "",
    //       description: "",
    //       status: "",
    //     });
    //     setImage(null);
    //     setImagePreview(null);
    //   } else {
    //     toast.error(response.data.message || "Submission failed.");
    //   }
    // } catch (error) {
    //   console.error("API Error:", error);
    //   const errorMessage =
    //     error.response?.data?.message ||
    //     "An error occurred. Please try again.";
    //   toast.error(errorMessage);
    // }

    e.preventDefault();
    e.stopPropagation();

    if (validateForm()) {
      const payload = { ...formData };
      UserService.createUser(payload)
        .then(() => {
          toast.success("Lessons was created successfully!");
          navigate("/admin/users");
        })
        .catch(() => toast.error("Failed to create user"));
    }
  };

  return (
    <Container fluid className="mt-4">
      <h4>Lessons Form</h4>
      <Form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
              {errors.title && (
                <div style={{ color: "#dc3545" }}>{errors.title}</div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
              {errors.price && (
                <div style={{ color: "#dc3545" }}>{errors.price}</div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Validity (YYYY-MM-DD)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Validity"
                name="validity"
                value={formData.validity}
                onChange={handleInputChange}
              />
              {errors.validity && (
                <div style={{ color: "#dc3545" }}>{errors.validity}</div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Duration (minutes)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
              />
              {errors.duration && (
                <div style={{ color: "#dc3545" }}>{errors.duration}</div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <div className="mt-1">
                <Form.Check
                  inline
                  label="Active"
                  name="status"
                  type="radio"
                  id="inline-radio-1"
                  value="Active"
                  onChange={handleInputChange}
                  checked={formData.status === "Active"}
                />
                <Form.Check
                  inline
                  label="Inactive"
                  name="status"
                  type="radio"
                  id="inline-radio-2"
                  value="Inactive"
                  onChange={handleInputChange}
                  checked={formData.status === "Inactive"}
                />
              </div>
              {errors.status && (
                <div style={{ color: "#dc3545", marginTop: "5px" }}>
                  {errors.status}
                </div>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Image Upload</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageUpload}
              />
              {errors.image && (
                <div style={{ color: "#dc3545" }}>{errors.image}</div>
              )}
            </Form.Group>
          </Col>
          {imagePreview && (
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Preview</Form.Label>
                <div>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </Form.Group>
            </Col>
          )}
        </Row>

        <Row>
          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              {errors.description && (
                <div style={{ color: "#dc3545" }}>{errors.description}</div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            type="submit"
            className="me-2"
            variant="primary"
            style={{ width: "100px" }}
          >
            Submit
          </Button>
          <Button type="button" variant="secondary" style={{ width: "100px" }}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}
