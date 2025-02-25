import React, { useState } from 'react'
import { Table, Button, Modal, Form, Pagination, Container, Row, Col, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function Users() {
  const navigate = useNavigate();
  // Sample data
  const [data, setData] = useState([
    { id: 1, full_name: "John Doe", email: "john@example.com", gender: 'M', status: true },
    { id: 2, full_name: "Jane Smith", email: "jane@example.com", gender: 'F', status: true },
    { id: 3, full_name: "Sam Wilson", email: "sam@example.com", gender: 'M', status: true },
    { id: 4, full_name: "Anna Taylor", email: "anna@example.com", gender: 'F', status: false },
    { id: 5, full_name: "John Doe", email: "john@example.com", gender: 'M', status: true },
    { id: 6, full_name: "Jane Smith", email: "jane@example.com", gender: 'F', status: false },
    { id: 7, full_name: "Sam Wilson", email: "sam@example.com", gender: 'M', status: true },
    { id: 8, full_name: "Anna Taylor", email: "anna@example.com", gender: 'F', status: false },
    { id: 9, full_name: "Jane Smith", email: "jane@example.com", gender: 'F', status: true },
    { id: 10, full_name: "Sam Wilson", email: "sam@example.com", gender: 'M', status: true },
    { id: 11, full_name: "Anna Taylor", email: "anna@example.com", gender: 'F', status: true }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Handle opening the modal for creating a new item
  const handleCreate = () => {
    setEditItem(null);
    setName("");
    setEmail("");
    setShowModal(true);
  };

  // Handle editing an existing item
  const handleEdit = (item) => {
    setEditItem(item);
    setName(item.full_name);
    setEmail(item.email);
    setShowModal(true);
  };

  // Handle saving the item (create or update)
  const handleSave = () => {
    if (editItem) {
      const updatedData = data.map((item) =>
        item.id === editItem.id ? { ...item, full_name, email } : item
      );
      setData(updatedData);
    } else {
      const newItem = { id: data.length + 1, full_name, email };
      setData([...data, newItem]);
    }
    setShowModal(false);
  };

  // Handle deleting an item
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // Handle pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <Container>
      <h4>Users List</h4>
      <div>
        <Row  >
          {/* <Col lg={{span: 7}} /> */}
          <Col >
            <InputGroup className="my-1"  >
              <Form.Control
                placeholder="Search User"
                aria-label="Search User"
                aria-describedby="basic-addon2"

              />
              <Button variant="btn btn-primary" id="button-addon2">
                <i class="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Col>
          <Col />
          
          <Col className='d-flex justify-content-end'>  <Button style={{ width: '100px' }} variant="primary" onClick={() => (navigate("/admin/users/create"))}
            className="my-1"
          >
            Add &nbsp;&nbsp;<i class="bi bi-plus-circle"></i>
          </Button></Col>
        </Row>
      </div>
      <div className="mt-3" >
        <Table responsive >
          <thead >
            <tr className="admin-table-head-tr">
              <th>S No</th>
              <th>User</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="admin-table-body-tr">
                <td>{item.id}</td>
                <td>{item.full_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status ? <span style={{ color: '#2b9348' }}>Active</span> : <span style={{ color: '#eb433f' }}>Inactive</span>}</td>
                <td >

                  <span
                    style={{ padding: '0px 10px', cursor: 'pointer' }}
                    onClick={() => handleEdit(item)}

                  >
                    <i class="bi bi-pencil-square" style={{ color: '#40a0ed', fontSize: '18px' }}></i>
                  </span>
                  <span
                    style={{ padding: '0px 10px', cursor: 'pointer' }}
                    onClick={() => handleDelete(item.id)}
                  >
                    <i class="bi bi-trash" style={{ color: '#eb433f', fontSize: '18px' }}></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>

      <div className='d-flex justify-content-end mt-2'>
        <Pagination>
          {[{}, {}, {}, {}, {}, {}, {}].map((number, i) => (
            <Pagination.Item
              key={number + 1}
              active={i + 1 === currentPage}
              onClick={() => paginate(number + 1)}
              variant="primary"
            >
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>


      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editItem ? "Edit Item" : "Add New Item"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full_name"
                value={full_name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>

  )
}
