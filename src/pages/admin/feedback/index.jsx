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
// import { set } from "react-datepicker/dist/date_utils";
import AppLoader from "../../../components/app-layout/AppLoader";

export default function FeedbackList() {
  const navigate = useNavigate();
  const [feedBackData, setFeedbackData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [feedBackInfo, setFeedBackInfo] = useState({});
  const confirmationModalRef = useRef(null);

  useEffect(() => {
    getFeedbacks();
  }, [currentPage, itemsPerPage]);

  const getFeedbacks = () => {
    const query = {
      pageNumber: currentPage,
      perPage: itemsPerPage,
      search: searchTerm,
    };
    FeebackService.getAllFeedback(query)
      .then((response) => {
        const info = response.data.data;
        setFeedbackData(info.data);
        setFeedBackInfo(info);
        setTotalRecords(info.total);
        setIsLoading(false);
      })
      //   setFeedbackData(response.data);
      //   console.log("#########", response.data);
      // })
      .catch((error) => {
        toast.error("Failed to retrieve feedback");
        setIsLoading(false);
      });
  };

  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page when searching
    getFeedbacks();
  };

  const handlePaginationChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageItems = () => {
    const pageItems = [];
    for (let i = 1; i <= Math.ceil(totalRecords / itemsPerPage); i++) {
      pageItems.push(i);
    }
    return pageItems;
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

      {isLoading ? (
        <AppLoader />
      ) : (
        <>
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
                
                {feedBackData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{feedBackInfo.from + index}</td>
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

          <div className="d-flex justify-content-end align-item-center m-2 gap-2">
          <strong>Page :</strong>
            <Pagination>
              {getPageItems().map((number, i) => (
                <Pagination.Item
                  key={i}
                  active={number === currentPage}
                  onClick={() => handlePaginationChange(number)}
                  variant="primary"
                >
                  {i + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </>
      )}
    </Container>
  );
}
