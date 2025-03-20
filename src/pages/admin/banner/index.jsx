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
import AppLoader from "../../../components/app-layout/AppLoader";

export default function BannerList() {
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bannerInfo, setBannerInfo] = useState();
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const confirmationModalRef = useRef(null);

  useEffect(() => {
    getHomeBannersPackage();
    // eslint-disable-next-line
  }, [currentPage, itemsPerPage]);

  const getHomeBannersPackage = () => {
    const query = {
      pageNumber: currentPage,
      perPage: itemsPerPage,
      search: searchTerm,
    };
    HomeBannersService.getAllHomeBanners(query)
      .then((response) => {
        const info = response.data.data;
        setBannerData(info.data);
        setBannerInfo(info);
        setTotalRecords(info.total);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Failed to retrieve Banner packages");
        toast.error("Failed to retrieve Banner packages");
        setIsLoading(false);
      });
  };

  const handleEdit = (item) => {
    navigate("/admin/banner/edit", { state: item });
  };

  // Open confirmation modal with the lesson package ID
  const handleDelete = (id) => {
    console.log(id);
    confirmationModalRef.current.open(id);
  };

  const handleDeleteHomeBanner = (id) => {
    setIsLoading(true);
    HomeBannersService.deleteHomeBanners(id)
      .then(() => {
        toast.success("Home Banner deleted successfully");
        getHomeBannersPackage();
      })
      .catch(() => {
        toast.error("Failed to delete lesson package");
      });
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

  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page when searching
    getHomeBannersPackage();
  };

  

  // (Optional) Pagination rendering can be added here if needed

  return (
    <Container fluid>
      <h4>Banner List</h4>
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
            onClick={() => navigate("/admin/banner/create")}
            // onClick={handleCreate}
            className="my-1"
          >
            Add &nbsp;&nbsp;<i className="bi bi-plus-circle"></i>
          </Button>
        </Col>
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
                  <th>Banner Title</th>
                  <th> Order</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bannerData && Array.isArray(bannerData) ? (
                  bannerData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
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
                ) : (
                  <tr>
                    <td colSpan="6">No data available</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>

          {bannerData.length > 0 && (
            <div className="d-flex justify-content-end align-items-center m-2 gap-2">
              <strong>Page :</strong>
              <Pagination className="mb-0">
                {getPageItems().map((number, i) => (
                  <Pagination.Item
                    key={i}
                    active={number === currentPage}
                    onClick={() => handlePaginationChange(number)}
                    variant="primary"
                  >
                    {number} {/* Ensure correct page number is displayed */}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )}
        </>
      )}

      <ConfirmationModalComponent
        ref={confirmationModalRef}
        handleDeleteUser={handleDeleteHomeBanner}
      />
    </Container>
  );
}
