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
// import LessonPackageService from "../../../services/lesson-package.service";
import HomeBannersService from "../../../services/home.service";
import ConfirmationModalComponent from "../../../components/confirmation-modal/ConfirmationModalComponent";
import moment from "moment/moment";

export default function LessonPackageList() {
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // For modal confirmation deletion
  const confirmationModalRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getHomeBannersPackage();
    // eslint-disable-next-line
  }, [currentPage, searchTerm]);

  const getHomeBannersPackage = () => {
    const query = {
      pageNumber: currentPage,
      perPage: itemsPerPage,
      search: searchTerm,
    };
    HomeBannersService.getAllHomeBanners(query)
      .then((response) => {
        setBannerData(response.data.data);
        setLoading(false);
        console.log("bannerData========", response.data.data);  
      })
      .catch((error) => {
        setError("Failed to retrieve Banner packages");
        setLoading(false);
        toast.error("Failed to retrieve Banner packages");
      });
  };

  const handleCreate = () => {
    navigate("/admin/homebanner/create");
  };

  const handleEdit = (item) => {
    navigate("/admin/homebanner/edit", { state: item });
  };

  // Open confirmation modal with the lesson package ID
  const handleDelete = (id) => {
    console.log(id);
    confirmationModalRef.current.open(id);
  };

  const handleDeleteHomeBanner = (id) => {
    HomeBannersService.deleteHomeBanners(id)
      .then(() => {
        toast.success("Home Banner deleted successfully");
        getHomeBannersPackage();
      })
      .catch(() => {
        toast.error("Failed to delete lesson package");
      });
  };

  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page when searching
    getHomeBannersPackage();
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // (Optional) Pagination rendering can be added here if needed

  return (
    <Container fluid>
      <h4>Home Banner List</h4>
      <hr />
      <Row>
        <Col>
          <InputGroup className="my-1">
            <Form.Control
              placeholder="Search Lessons"
              aria-label="Search Lessons"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="primary" onClick={handleSearch}>
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Col>
        <Col />
        <Col className="d-flex justify-content-end">
          <Button
            style={{ width: "100px" }}
            variant="primary"
            onClick={() => navigate("/admin/homebanner/create")}
            // onClick={handleCreate}
            className="my-1"
          >
            Add &nbsp;&nbsp;<i className="bi bi-plus-circle"></i>
          </Button>
        </Col>
      </Row>

      <div className="mt-3">
        <Table responsive className="dataTable">
          <thead>
            <tr>
              <th>S No</th>
              <th>Banner Title</th>
              <th>Description</th>
              <th>Link</th>
              <th>Sort Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bannerData && Array.isArray(bannerData)
              ? bannerData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.link}</td>
                    <td>{item.sort_order}</td>
                    {/* <td>{index % 4 !== 0 ? "Package" : "Single"}</td>
                <td>{moment(item.created_at).format("DD-MM-YYYY")}</td> */}
                    <td>
                      <span
                        style={{ padding: "0px 5px", cursor: "pointer" }}
                        onClick={() => handleEdit(item)}
                      >
                        <i
                          className="bi bi-pencil-square"
                          style={{ color: "#40a0ed", fontSize: "18px" }}
                        ></i>
                      </span>
                      <span
                        style={{ padding: "0px 5px", cursor: "pointer" }}
                        onClick={() => handleDelete(item)}
                      >
                        <i
                          className="bi bi-trash"
                          style={{ color: "#eb433f", fontSize: "18px" }}
                        ></i>
                      </span>
                    </td>
                  </tr>
                ))
              :(
  <tr>
    <td colSpan="6">No data available</td>
  </tr>
)}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-end mt-2">
        <Pagination>{/* Pagination items can be added here */}</Pagination>
      </div>
      <ConfirmationModalComponent
        ref={confirmationModalRef}
        handleDeleteUser={handleDeleteHomeBanner}
      />
    </Container>
  );
}
