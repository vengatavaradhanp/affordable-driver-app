import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  Button,
  Form,
  Pagination,
  Container,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmationModalComponent from "../../../components/confirmation-modal/ConfirmationModalComponent";
import moment from "moment/moment";
import FeebackService from "../../../services/feedback.service";

export default function FeedbackList() {
  const navigate = useNavigate();
  const [lessonData, setFeedbackData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    getFeedbacks();
  }, [currentPage, searchTerm]);

  const getFeedbacks = () => {
    const query = {
      pageNumber: currentPage,
      perPage: itemsPerPage,
      search: searchTerm,
    };
    FeebackService.getAllFeedback(query)
      .then((response) => {
        setFeedbackData(response.data);
        console.log("#########", response.data);
      })
      .catch((error) => {
        toast.error("Failed to retrieve feedback");
      });
  };

  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page when searching
    getFeedbacks();
  };

  return (
    <Container fluid>
      <h4>Feedback List</h4>
      <hr />
      <Row>
        <Col>
          <InputGroup className="my-1">
            <Form.Control
              placeholder="Search Feedback"
              aria-label="Search Feedback"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="primary" onClick={handleSearch}>
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Col>
        <Col />
        <Col />
        {/* <Col className="d-flex justify-content-end">
          <Button
            style={{ width: "100px" }}
            variant="primary"
            onClick={() => navigate("/admin/feedback/create")}
            // onClick={handleCreate}
            className="my-1"
          >
            Add &nbsp;&nbsp;<i className="bi bi-plus-circle"></i>
          </Button>
        </Col> */}
      </Row>

      <div className="mt-3">
        <Table responsive className="dataTable">
          <thead>
            <tr>
              <th>S No</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Inquiry About</th>
              <th>Created On</th>
              {/* <th>Message</th> */}
            </tr>
          </thead>
          <tbody>
            {lessonData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.firstname + " " + item.lastname}</td>
                <td>{item.emailaddress}</td>
                <td>{item.contact_number}</td>
                <td>{item.inquiring_about}</td>
                <td>{moment(item.created_at).format("DD-MM-YYYY")}</td>
                {/* <td>{item.message}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-end mt-2">
        <Pagination>{/* Pagination items can be added here */}</Pagination>
      </div>
    </Container>
  );
}
