import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalInstructors: 0,
    activeUsers: 0,
  });
  const getToken = () => localStorage.getItem("token");


  useEffect(() => {
    
    const token = getToken();
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://datatechgenius.com/expert-driver/public/index.php/api/user-stats",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Replace with your token
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        setDashboardData({
          totalUsers: data.total_users || 0,
          totalInstructors: data.total_admins || 0,
          activeUsers: data.active_users || 0,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);


  const cardData = [
    {
      title: "Total Users",
      value: dashboardData.totalUsers,
      icon: <i className="bi bi-person-fill"></i>,
    },
    {
      title: "Total Instructors",
      value: dashboardData.totalInstructors,
      icon: <i className="bi bi-car-front-fill"></i>,
    },
    {
      title: "Total Active Users",
      value: dashboardData.activeUsers,
      icon: <i className="bi bi-person-check-fill"></i>,
    },
  ];

  return (
    <div>
      <h4>Dashboard</h4>
      <div style={{ marginTop: "20px" }}>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="border-1 rounded-3">
                <Card.Body className="d-flex flex-column">
                  <Row style={{ alignItems: "center" }}>
                    <Col xs={12} md={3}>
                      <div
                        className="icon-container"
                        style={{ fontSize: "50px", color: "#2b9348" }}
                      >
                        {card.icon}
                      </div>
                    </Col>
                    <Col xs={12} md={9} className="text-end">
                      <div>
                        <Card.Title>{card.title}</Card.Title>
                      </div>
                      <div className="mb-0">
                        <h2 className="fw-medium">{card.value}</h2>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
