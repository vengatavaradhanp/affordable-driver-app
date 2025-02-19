// import React from 'react'
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// export default function Dashboard() {
//   return (
//     <CardGroup className='p-3 m-4 gap-4 '>
//       <Card>

//         <Card.Body className='shadow-lg rounded-3' style={{ height: '15rem', }}>
//           <Card.Title>  Total Users </Card.Title>
//           <Card.Text>

//           </Card.Text>
//         </Card.Body>

//       </Card>
//       <Card>

//         <Card.Body className='shadow-lg rounded-3' style={{ height: '15rem', }}>
//           <Card.Title> Total Event</Card.Title>
//           <Card.Text>

//           </Card.Text>
//         </Card.Body>

//       </Card>
//       <Card>

//         <Card.Body className='shadow-lg rounded-3' style={{ height: '15rem', }}>
//           <Card.Title> Total Instructor</Card.Title>
//           <Card.Text>

//           </Card.Text>
//         </Card.Body>

//       </Card>
//     </CardGroup>
//   )
// }

// import React from "react";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";

// export default function Dashboard() {
//   // Card data stored in an array
//   const cardData = [
//     { title: "Total Users", text: "Number of users in the system" },
//     { title: "Total Events", text: "Number of events available" },
//     { title: "Total Instructors", text: "Number of instructors in the system" },
//   ];

//   return (
//     <CardGroup className="p-3 m-4 gap-4">
//       {/* Iterate over cardData to render each card */}
//       {cardData.map((card, index) => (
//         <Card key={index}>
//           <Card.Body className="shadow-lg rounded-3" style={{ height: "15rem" }}>
//             <Card.Title>{card.title}</Card.Title>
//             <Card.Text>{card.text}</Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </CardGroup>
//   );
// }

// import React from "react";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";

// export default function Dashboard() {
//   // Dynamic card data
//   const cardData = [
//     { title: "Total Users", text: "Number of users in the system" },
//     { title: "Total Events", text: "Number of events available" },
//     { title: "Total Instructors", text: "Number of instructors in the system" },
//   ];

//   return (
//     <CardGroup className="p-3 m-4 gap-4">
//       {/* Render each card by iterating over cardData */}
//       {cardData.map((card, index) => (
//         <Card key={index}>
//           <Card.Body className="shadow-lg rounded-3" style={{ height: "15rem" }}>
//             <Card.Title>{card.title}</Card.Title>
//             <Card.Text>{card.text}</Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </CardGroup>
//   );
// }

import React from "react";
import { Card, Row, Col } from "react-bootstrap";


const cardData = [
  {
    title: "Users",
    value: "36,254",
    icon: <div>logo</div>,
    trend: "5.27%",
    trendDirection: "up", // Define trend direction for conditional rendering
    description: "Since last month",
  },
  {
    title: "Instructors",
    value: "5,543",
    icon: <div>logo</div>,
    trend: "1.08%",
    trendDirection: "down",
    description: "Since last month",
  },
  {
    title: "Growth",
    value: "+ 30.56%",
    icon: <div>logo</div>,
    trend: "4.87%",
    trendDirection: "up",
    description: "Since last month",
  },
];

export default function Dashboard() {
  return (
    <div className="p-4">
      {/* <h3>Dashboard</h3> */}
      <Row className="g-4">
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="shadow-sm border-0 rounded-3">
              <Card.Body
                className="d-flex flex-column justify-content-between"
                style={{ height: "10rem" }}
              >
                {/* <div className="d-flex justify-content-between">
                  
                </div> */}
                <Row>
                  <Col key={index} xs={12} md={4}>
                    <div
                      className="icon-container"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {card.icon}
                    </div>
                  </Col>
                  <Col key={index} xs={12} md={8} className="text-end">
                    <div className = "mb-4">
                      <Card.Title>{card.title}</Card.Title>
                    </div>
                    <div className = "mb-4">
                      <h2 className="fw-bold">{card.value}</h2>
                    </div>

                    <div className="d-flex align-items-center justify-content-end">
                      {card.trendDirection === "up" ? (
                        <div style={{ color: "green" }} />
                      ) : (
                        <div style={{ color: "red" }} />
                      )}
                      <span
                        style={{
                          color: card.trendDirection === "up" ? "green" : "red",
                          fontWeight: "bold",
                          marginLeft: "5px",
                        }}
                      >
                        {card.trend}
                      </span>
                      <span className="text-muted ms-2">
                        {card.description}
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
