import React, { useState } from "react";
import axios from "axios";

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error when user types
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) newErrors.email = "Email Address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact Number is required.";
    if (!formData.inquiry) newErrors.inquiry = "Please select an option.";
    if (!formData.message) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // Stop submission if validation fails
    }

    try {
      await axios.post("http://localhost:5000/send-feedback", formData);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        inquiry: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("Failed to send your message. Please try again.");
    }
  };

  return (
    <>
      <div
        className="container-fluid page-header py-6 my-5 mt-0 wow fadeIn"
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
              <h3 className="display-5 text-light mb-0">Contact Us</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid facts py-5 pt-lg-0 contactFacts">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-4">
                <div
                  className="col-lg-12 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h1 className="display-12 mb-4 text-center">
                    If You Have Any Query, Please Contact Us
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-2">
                      {/* First Name */}
                      <div className="col-md-12">
                        <div >
                          <input
                            type="text"
                            className={`form-control border-0 bg-light  ${
                              errors.firstName ? "is-invalid" : ""
                            }`}
                            id="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          <label htmlFor="firstName"></label>
                          {errors.firstName && (
                            <div className="invalid-feedback">
                              {errors.firstName}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="col-md-12 ">
                        <div >
                          <input
                            type="text"
                            className={`form-control border-0 bg-light ${
                              errors.lastName ? "is-invalid" : ""
                            }`}
                            id="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                          <label htmlFor="lastName"></label>
                          {errors.lastName && (
                            <div className="invalid-feedback">
                              {errors.lastName}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-md-12">
                        <div >
                          <input
                            type="email"
                            className={`form-control border-0 bg-light ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label htmlFor="email"></label>
                          {errors.email && (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Contact Number */}
                      <div className="col-12">
                        <div >
                          <input
                            type="text"
                            className={`form-control border-0 bg-light ${
                              errors.contactNumber ? "is-invalid" : ""
                            }`}
                            id="contactNumber"
                            placeholder="Contact Number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                          />
                          <label htmlFor="contactNumber"  ></label>
                          {errors.contactNumber && (
                            <div className="invalid-feedback">
                              {errors.contactNumber}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Inquiry */}
                      <div className="col-md-12">
                        <div >
                          <select
                            className={`form-select ${
                              errors.inquiry ? "is-invalid" : ""
                            }`}
                            id="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                          >
                            <option value="">Inquiring About</option>
                            <option value="Single Lesson">Single Lesson</option>
                            <option value="3 x 50 Minute Lesson Package">
                              3 x 50 Minute Lesson Package
                            </option>
                            <option value="5 x 50 Minute Lesson Package">
                              5 x 50 Minute Lesson Package
                            </option>
                          </select>
                          <label htmlFor="inquiry"></label>
                          {errors.inquiry && (
                            <div className="invalid-feedback">
                              {errors.inquiry}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <div >
                          <textarea
                            className={`form-control border-0 bg-light ${
                              errors.message ? "is-invalid" : ""
                            }`}
                            placeholder="Message"
                            id="message"
                            style={{ height: 150 }}
                            value={formData.message}
                            onChange={handleChange}
                          />
                          <label htmlFor="message"></label>
                          {errors.message && (
                            <div className="invalid-feedback">
                              {errors.message}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12">
                        <button
                          className="btn btn-primary py-3 px-5"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>

                  {successMessage && (
                    <div className="mt-3 alert alert-danger">
                      {successMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
