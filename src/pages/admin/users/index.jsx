import React, { useState } from 'react'
import { Table, Button, Modal, Form, Pagination, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function Users() {
  const navigate = useNavigate();
  // Sample data
  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com" },
    { id: 4, name: "Anna Taylor", email: "anna@example.com" },
    { id: 5, name: "John Doe", email: "john@example.com" },
    { id: 6, name: "Jane Smith", email: "jane@example.com" },
    { id: 7, name: "Sam Wilson", email: "sam@example.com" },
    { id: 8, name: "Anna Taylor", email: "anna@example.com" },
    { id: 9, name: "Jane Smith", email: "jane@example.com" },
    { id: 10, name: "Sam Wilson", email: "sam@example.com" },
    { id: 11, name: "Anna Taylor", email: "anna@example.com" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [name, setName] = useState("");
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
    setName(item.name);
    setEmail(item.email);
    setShowModal(true);
  };

  // Handle saving the item (create or update)
  const handleSave = () => {
    if (editItem) {
      const updatedData = data.map((item) =>
        item.id === editItem.id ? { ...item, name, email } : item
      );
      setData(updatedData);
    } else {
      const newItem = { id: data.length + 1, name, email };
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
    <Container className=" my-4">
      <h2>User Login List</h2>
      <div className="d-flex justify-content-end">
        {/* <Button variant="primary" onClick={handleCreate} className="mb-1"
      >
        Add New
      </Button> */}
        <Button variant="primary" onClick={() => (navigate("/admin/addUser"))} className="mb-1"
        >
          Add New
        </Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Button
                  variant="warning"
                  size="md"
                  onClick={() => handleEdit(item)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="md"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination>
        {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => paginate(number + 1)}
            variant="primary"
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      {/* Modal for Add/Edit */}
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
                placeholder="Enter name"
                value={name}
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
