import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import axios from "axios";

export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://datatechgenius.com/expert-driver/public/index.php/api/contacts");
        console.log("API Response:", response.data);
        setData(response.data);
      } catch (err) {
        console.error("API Error:", err.response ? err.response.data : err.message);
        setError("Failed to fetch users. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  

  return (
    <Container>
      <h4>Users List</h4>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="mt-3">
        <Table responsive>
          <thead>
            <tr>
              <th>S No</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Inquiry About</th>
              <th>Message</th>

            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.emailaddress}</td>
                <td>{item.contact_number}</td>
                <td>{item.inquiring_about}</td>
                <td>{item.message}</td>


                {/* <td>{item.inquiring_about}</td> */}
                
                
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
