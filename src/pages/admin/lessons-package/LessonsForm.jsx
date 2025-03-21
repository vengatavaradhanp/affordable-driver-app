import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Container, InputGroup } from "react-bootstrap";
import {
  GenderList,
  PackageSizeList,
  RoleList,
  StateList,
  SuburbList,
} from "../../../utils/constant";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import LessonPackageService from "../../../services/lesson-package.service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import AppLoader from "../../../components/app-layout/AppLoader";

export default function LessonsForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    id: location?.state?.id,
    title: "",
    amount: "",
    expiry_date: "",
    minutes: "",
    description: "",
    status: 1,
    count: 5,
    image: "",
    type: "single",
    favourite: 1,
    package_size: "1"
  });
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({}); // Track validation errors

  useEffect(() => {
    if (location?.state?.id) {
      setIsLoading(true);
      getUserDetails();
    }
  }, []);

  const getUserDetails = () => {
    LessonPackageService.getLessonsById(location?.state?.id)
      .then((response) => {
        setFields({
          id: response.data.id,
          title: response.data.title,
          amount: response.data.amount,
          expiry_date: response.data.expiry_date,
          minutes: response.data.minutes,
          description: response.data.description,
          image: response.data.image,
          type: response.data.type,
          status: response.data.status,
          package_size: response.data.package_size,
        });
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Failed to edit lesson");
        setIsLoading(false);
      });
  };

  const handleFieldChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    const fieldSet = { ...fields };

    fieldSet[name] = value;

    setFields(fieldSet);

    // if (type === "file") {
    //   if (files && files.length > 0) {
    //     const file = files[0]; // Ensure a file is selected
    //     setFields({
    //       ...fields,
    //       [name]: type === "radio" ? (fields.status ? 0 : 1) : (type === "file" ? URL.createObjectURL(file) : value),
    //     });
    //   }
    // } else {
    //   setFields({
    //     ...fields,
    //     [name]: type === "radio" ? (fields.status ? 0 : 1) : value,
    //   });
    // }

    // if (value) {
    //   setErrors({ ...errors, [name]: false });
    // }
  };

  const handleTypeFieldChange = (event) => {
    const { name } = event.target;
    const fieldSet = { ...fields };
    fieldSet[name] = fields.type === "single" ? "package" : "single";
    setFields(fieldSet);
  };

  // const handleStatusFieldChange = (event) => {
  //   const { name } = event.target;
  //   const fieldSet = { ...fields };
  //   fieldSet[name] = fields.type === 1 ? 0 : 1;
  //   setFields(fieldSet);
  // };
  const handleStatusFieldChange = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: parseInt(value), // Convert to number
    }));
  };
  const handleFavouriteFieldChange = (event) => {
    const { name, checked } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: checked ? 1 : 0,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const fieldSet = { ...fields };
    fieldSet[name] = URL.createObjectURL(files[0]);
    setFields(fieldSet);
  };

  const validateFields = () => {
    let newErrors = {};
    debugger
    if (!fields.title.trim()) newErrors.title = "Title is required.";
    if (!fields.amount.trim()) newErrors.amount = "Amount is required.";
    if (!fields.expiry_date.trim())
      newErrors.expiry_date = "Validity is required.";
    if (!fields.minutes.trim()) newErrors.minutes = "Minutes is required.";
    if (!fields.description.trim())
      newErrors.description = "Description is required.";
    if (!fields.image.trim()) newErrors.image = "Image is required.";
    if (!fields.package_size.trim()) newErrors.package_size = "Package size is required.";
    if (!fields.type.trim()) newErrors.type = "Package type is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (validateFields()) {
      setIsLoading(true);
      const payload = { ...fields };
      if (fields.id) {
        LessonPackageService.updateLesson(fields.id, payload)
          .then(() => {
            toast.success("Lessons updated successfully!");
            navigate("/admin/lessons");
          })
          .catch((error) => {
            let newErrors = {};
            const errorData = error.response.data;
            Object.entries(errorData.errors).forEach(([key, value]) => {
              newErrors[key] = value[0];
            });
            setErrors(newErrors);
          });
      } else {
        LessonPackageService.createLesson(payload)
          .then(() => {
            toast.success("Lessons created successfully!");
            setIsLoading(false);
            navigate("/admin/lessons");
          })
          .catch((error) => {
            let newErrors = {};
            const errorData = error.response?.data;
            setIsLoading(false);
            if (errorData?.errors) {
              Object.entries(errorData.errors).forEach(([key, value]) => {
                newErrors[key] = value[0];
              });
            } else {
              toast.error("Something went wrong! Please try again.");
            }

            setErrors(newErrors);
          });
      }
    }
  };

  return (
    <Container fluid>
      <h4>Lessons Form</h4>
      <hr />
      {isLoading ? (
        <AppLoader />
      ) : (
        <Form noValidate onSubmit={handleSubmit}  >
          <Row className="mb-3">
            {/* First Name */}

            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>Title </Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={fields.title}
                onChange={handleFieldChange}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              // controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Lesson Type</Form.Label>
              <div className="mt-2">
                <Form.Check
                  inline
                  label="Single"
                  name="type"
                  type="radio"
                  checked={fields.type === "single"}
                  value="single"
                  onChange={handleTypeFieldChange}
                />
                <Form.Check
                  inline
                  label="Package"
                  name="type"
                  type="radio"
                  checked={fields.type === "package"}
                  value="package"
                  onChange={handleTypeFieldChange}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.type}
              </Form.Control.Feedback>
            </Form.Group>
            {fields.type === "package" && <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>Package Size</Form.Label>
              <Form.Select
                name="package_size"
                value={fields.package_size}
                onChange={handleFieldChange}
                isInvalid={!!errors.package_size}

              >
                <option value="">Choose</option>
                {PackageSizeList.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.package_size}
              </Form.Control.Feedback>
            </Form.Group>}

            {/* Amount */}
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>Amount ($)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Amount"
                name="amount"
                value={fields.amount}
                onChange={handleFieldChange}
                isInvalid={!!errors.amount}
              />
              <Form.Control.Feedback type="invalid">
                {errors.amount}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Validity Date */}
            {/* <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Validity End Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Validity End Date"
              name="expiry_date"
              value={fields.expiry_date}
              onChange={handleFieldChange}
              isInvalid={!!errors.expiry_date}
            />
            <Form.Control.Feedback type="invalid">
              {errors.expiry_date}
            </Form.Control.Feedback>
          </Form.Group> */}
            <Form.Group as={Col} md="4" className="d-flex flex-column mb-3">
              <Form.Label>Validity End Date</Form.Label>
              <DatePicker
                selected={
                  fields.expiry_date ? new Date(fields.expiry_date) : null
                }
                onChange={(date) =>
                  setFields({
                    ...fields,
                    expiry_date: moment(date).format("YYYY-MM-DD"),
                  })
                }
                className="form-control"
                dateFormat="yyyy-MM-dd"
                placeholderText="Select Validity End Date"
              />
              {errors.expiry_date && (
                <div className="invalid-feedback d-block">
                  {errors.expiry_date}
                </div>
              )}
            </Form.Group>

            {/* Duration */}
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>Duration Time (mins)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Duration Time"
                name="minutes"
                value={fields.minutes}
                onChange={handleFieldChange}
                isInvalid={!!errors.minutes}
              />
              <Form.Control.Feedback type="invalid">
                {errors.minutes}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Status */}
            <Form.Group
              as={Col}
              md="4"
              // controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Status</Form.Label>
              <div className="mt-2">
                <Form.Check
                  inline
                  label="Active"
                  name="status"
                  type="radio"
                  // id={inline - radio - 1}
                  value={1}
                  checked={fields.status === 1}
                  onChange={handleStatusFieldChange}
                />
                <Form.Check
                  inline
                  label="Inactive"
                  name="status"
                  type="radio"
                  // id={inline - radio - 2}
                  value={0}
                  checked={fields.status === 0}
                  onChange={handleStatusFieldChange}
                />
              </div>
              {/* ))} */}
            </Form.Group>

            {/* Status */}
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>Favourite</Form.Label>
              <div className="mt-2">
                <Form.Check
                  inline
                  label={
                    fields.favourite === 1
                      ? "Is a favourite lesson"
                      : "Is not a favourite lesson"
                  }
                  name="favourite"
                  type="checkbox"
                  value={0}
                  checked={fields.favourite === 1} // Ensure it's strictly checked
                  onChange={handleFavouriteFieldChange} // Correct function handling
                />
              </div>
            </Form.Group>

            {/* Image */}
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>Image Upload</Form.Label>
              <Form.Control
                type="file"
                placeholder="Image"
                name="image"
                onChange={handleFileChange}
                isInvalid={!!errors.image}
              />

              {fields.image && (
                <img
                  src={fields.image}
                  alt="Preview"
                  className="mt-2 d-flex"
                  style={{ width: "100px", height: "auto" }}
                />
              )}

              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                rows={5}
                as="textarea"
                placeholder="Description"
                name="description"
                value={fields.description}
                onChange={handleFieldChange}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button
              type="submit"
              className="me-3"
              variant="primary"
              style={{ width: "130px" }}
            >
              {fields.id ? "Update" : "Submit"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              style={{ width: "130px" }}
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Container>
  );
}
