import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Pagination,
  Container,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserService from "../../../services/user.service";
import ConfirmationModalComponent from "../../../components/confirmation-modal/ConfirmationModalComponent";
import AppLoader from "../../../components/app-layout/AppLoader";

export default function Users() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const [error, setError] = useState(null);
  const [serachText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [toggleStates, setToggleStates] = useState({});
  const confirmationModalRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserList();
  }, [currentPage, itemsPerPage]);

  const getUserList = () => {
    const queryString = {
      pageNumber: currentPage,
      perPage: itemsPerPage,
      search: serachText,
    };
    UserService.getAllUsers(queryString)
      .then((response) => {
        const info = response.data.data;
        setUserData(info.data);
        setUserInfo(info);
        setTotalRecords(info.total);
        setIsLoading(false);
        // const responseData = response.data;
        // setUserData(responseData);
      })
      .catch((error) => {
        const errorData = error.response.data;
        toast.error("Failed to retrive user data");
        setIsLoading(false);
      });
  };

  const handleCreate = () => {
    setEditItem(null);
    setName("");
    setEmail("");
    setShowModal(true);
  };

  const handleEdit = (item) => {
    navigate("/admin/users/edit", { state: item });
  };

  const handleDelete = async (user) => {
    confirmationModalRef.current.open(user);
  };

  const handleToggle = (id) => {
    setToggleStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
 

  const handleSwitchChange = (event, user) => {
    event.preventDefault();
    setIsLoading(true);
    const payload = {
      status: event.target.checked === true ? 1 : 0,
    };
    UserService.blockUser(user.id, payload)
      .then((response) => {
        event.target.checked === true ? toast.error("User Inactivated") : toast.success("User Activated");
        
        getUserList();
      })
      .catch((error) => {
        toast.error("Failed to update user status");
      });
  };

  const handleSearch = () => {
    getUserList();
  };

  const handleDeleteUser = (id) => {
    UserService.deleteUser(id)
      .then((response) => {
        toast.success("User deleted successfully");
        getUserList();
      })
      .catch((error) => {
        toast.error("Failed to delete user");
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
  return (
    <Container fluid>
      <h4>Users List</h4>
      <hr />
      <Row>
        <Col>
          <InputGroup className="my-1">
            <Form.Control
              placeholder="Search User"
              aria-label="Search User"
              value={serachText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="btn btn-primary" onClick={handleSearch}>
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Col>
        <Col />
        <Col className="d-flex justify-content-end">
          <Button
            style={{ width: "100px" }}
            variant="primary"
            onClick={() => navigate("/admin/users/create")}
            className="my-1"
          >
            Add &nbsp;&nbsp;<i className="bi bi-plus-circle"></i>
          </Button>
        </Col>
      </Row>

      {isLoading ? (
        <AppLoader/>
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
              <th>State</th>
              <th>Suburb</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr key={item.id}>
                <td>{ userInfo.from + index}</td>
                <td>{item.fname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.state}</td>
                <td>{item.suburbs}</td>
                <td>
                  <div style={{ display: "flex" }}>
                    <span
                      style={{ padding: "0px 10px", cursor: "pointer" }}
                      onClick={() => handleEdit(item)}
                    >
                      <i
                        className="bi bi-pencil-square"
                        style={{ color: "#40a0ed", fontSize: "18px" }}
                      ></i>
                    </span>
                    <span
                      style={{ padding: "0px 10px", cursor: "pointer" }}
                      onClick={() => handleDelete(item)}
                    >
                      <i
                        className="bi bi-trash"
                        style={{ color: "#eb433f", fontSize: "18px" }}
                      ></i>
                    </span>
                    <span style={{ padding: "0px 10px", cursor: "pointer" }}>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        style={{ fontSize: "18px", cursor: "pointer" }}
                        value={item.status}
                        checked={item.status === 1 ? true : false}
                        onChange={(event) => handleSwitchChange(event, item)}
                      />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-end mt-2 gap-2">
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



      <ConfirmationModalComponent
        ref={confirmationModalRef}
        handleDeleteUser={handleDeleteUser}
      />
    </Container>
  );
}
