import React, { useState, useEffect, useRef } from "react";
import { Table, Button, Modal, Form, Pagination, Container, Row, Col, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import UserService from "../../../services/user.service";
import ConfirmationModalComponent from "../../../components/confirmation-modal/ConfirmationModalComponent";

export default function Users() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [serachText, setSearchText] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [toggleStates, setToggleStates] = useState({});

  const confirmationModalRef = useRef(null)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getUserList()
  }, []);

  const getUserList = () => {
    const queryString = {
      pageNumber: 1,
      perPage: 10,
      search: serachText
    }
    UserService.getAllUsers(queryString)
      .then((response) => {
        const responseData = response.data;
        setUserData(responseData);
        console.log(responseData)
      })
      .catch((error) => {
        const errorData = error.response.data;
        toast.error("Failed to retrive user data")
      })
  }



  const handleCreate = () => {
    setEditItem(null);
    setName("");
    setEmail("");
    setShowModal(true);
  };

  const handleEdit = (item) => {
    navigate('/admin/users/edit', { state: item })
  };

  const handleDelete = async (user) => {
    // if (window.confirm("Are you sure you want to delete this user?")) {
    //   try {
    //     await axios.delete(`https://datatechgenius.com/expert-driver/public/index.php/api/users/${id}`);
    //     setUserData(userData.filter((item) => item.id !== id));
    //     toast.success("User deleted successfully!");
    //   } catch (error) {
    //     toast.error("Failed to delete user.");
    //   }
    // }
    confirmationModalRef.current.open(user)
  };

  const handleToggle = (id) => {
    setToggleStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // const filteredUsers = data.filter((user) =>
  //   user.fname.toLowerCase().includes(serachText.toLowerCase()) ||
  //   user.email.toLowerCase().includes(serachText.toLowerCase()) ||
  //   user.phone.toLowerCase().includes(serachText.toLowerCase()) ||
  //   user.suburbs.toLowerCase().includes(serachText.toLowerCase()) ||
  //   user.state.toLowerCase().includes(serachText.toLowerCase())

  // );

  // const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSwitchChange = (event, user) => {
    event.preventDefault();
    const payload = {
      status: event.target.checked === true ? 1 : 0
    }
    UserService.updateUser(user.id, payload)
      .then((response) => {
        toast.success("User status updated");
        getUserList()
      })
      .catch((error) => {
        toast.error("Failed to update user status");
      })
  }

  const handleSearch = () => {
    getUserList()
  }

  const handleDeleteUser = (id) => {
    UserService.deleteUser(id)
      .then((response) => {
        toast.success("User deleted successfully");
        getUserList()
      })
      .catch((error) => {
        toast.error("Failed to delete user");
      })
  }

  return (
    <Container fluid>
      <h4>Users List</h4>
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
          <Button style={{ width: "100px" }} variant="primary" onClick={() => navigate("/admin/users/create")} className="my-1">
            Add &nbsp;&nbsp;<i className="bi bi-plus-circle"></i>
          </Button>
        </Col>
      </Row>

      {/* {loading && <p>Loading users...</p>} */}
      {error && <p style={{ color: "red" }}>{error}</p>}

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
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{item.fname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.state}</td>
                <td>{item.suburbs}</td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <span style={{ padding: "0px 10px", cursor: "pointer" }} onClick={() => handleEdit(item)}>
                      <i className="bi bi-pencil-square" style={{ color: "#40a0ed", fontSize: "18px" }}></i>
                    </span>
                    <span style={{ padding: "0px 10px", cursor: "pointer" }} onClick={() => handleDelete(item)}>
                      <i className="bi bi-trash" style={{ color: "#eb433f", fontSize: "18px" }}></i>
                    </span>
                    <span style={{ padding: "0px 10px", cursor: "pointer" }} >
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        style={{ fontSize: '18px' }}
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

      <div className="d-flex justify-content-end mt-2">
        <Pagination>
          {/* {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, i) => (
            <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
              {i + 1}
            </Pagination.Item>
          ))} */}
        </Pagination>
      </div>
      <ConfirmationModalComponent ref={confirmationModalRef} handleDeleteUser={handleDeleteUser} />
    </Container>
  );
}

