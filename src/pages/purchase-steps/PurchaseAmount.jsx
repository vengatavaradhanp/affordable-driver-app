import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row, Image } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Dropdown from 'react-bootstrap/Dropdown';
import User from "../../userData.json";
import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Card, Button } from "react-bootstrap"

export default function PurchaseAmount() {
  const navigate = useNavigate();

  const handlepercentage = (params) => {
    console.log("params", params);
  };
  const user = [
    {
      name: "John Doe",
      max_price_per_hour: "50",
      image: "https://via.placeholder.com/100",
      car_image: "https://via.placeholder.com/100",
      car_model: "Toyota Camry",
      car_rating: "4.5/5",
    },
  ];

  const bookingDetails = {
    totalAmount: 420.0,
    discount: 21.0,
    finalAmount: 399.0,
  };

  <PurchaseAmount user={user} bookingDetails={bookingDetails} />;

  const instructor = {
    name: "John Doe",
    rate: "$70",
    offer: "Offers 1 & 2hr lessons",
    image: "https://reqres.in/img/faces/8-image.jpg",
    carImage:
      "https://behindthemanibelaph.wordpress.com/wp-content/uploads/2017/06/dsf2204-edit.jpg  ",
    carModel: "Suzuki Swift 2016 (Auto)",
    carRating: "5-star ANCAP rating",
    carDetails: "Dual controls fitted",
  };

  <PurchaseAmount instructor={instructor} />;

  return (
    <>
      <Row>
        <Container fluid>
          <Row style={{ margin: "10px 0" }}>
            <Col xs={12} md={6} xl={8} style={{}}>
              <div>
                <h4>Choose lesson amount</h4>
                <span className="text-muted">Buy more and save!</span>
                <hr />
                <div
                  style={{
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",

                    borderRadius: "10px",
                  }}
                >
                  <div className="bg-white">
                    <div
                      className="d-flex"
                      style={{
                        alignItems: "center",
                        padding: "15px 20px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                      }}
                    >
                      <div>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="hours"
                        />
                      </div>
                      <div style={{ flex: 2 }}>
                        <div style={{ marginLeft: "30px" }}>
                          <div style={{ fontWeight: 600 }}>10 hours</div>
                          <div style={{ color: "grey", fontSize: "14px" }}>
                            Perfect for new learners starting their driving
                            journey from scratch
                          </div>
                        </div>
                      </div>
                      <div style={{ marginLeft: "10px" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#fff",
                            background: "#00a326",
                            padding: "5px 10px",
                          }}
                        >
                          10% OFF
                        </span>
                      </div>
                    </div>
                    <div
                      className="d-flex"
                      style={{
                        alignItems: "center",
                        padding: "15px 20px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        margin: "10px 0px",
                      }}
                    >
                      <div>
                        <Form.Check
                          type="radio"
                          aria-label="radio 2"
                          name="hours"
                        />
                      </div>
                      <div style={{ flex: 2 }}>
                        <div style={{ marginLeft: "30px" }}>
                          <div style={{ fontWeight: 600 }}>6 hours</div>
                          <div style={{ color: "grey", fontSize: "14px" }}>
                            Ideal for new learners, overseas license holders, or
                            anyone needing a driving skill refresh
                          </div>
                        </div>
                      </div>
                      <div style={{ marginLeft: "10px" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#fff",
                            background: "#ffc107",
                            padding: "5px 10px",
                          }}
                        >
                          5% OFF
                        </span>
                      </div>
                    </div>
                    {/* <label
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      padding: "15px",
                      marginBottom: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      background: "white",
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        name="hours"
                      />
                    </div>
                    <div
                      className="text-start"
                      style={{ marginLeft: "15px", flexGrow: 1 }}
                    >
                      <span style={{ fontWeight: "600", fontSize: "16px" }}>
                        10 hours
                      </span>
                      <br />
                      <span style={{ fontSize: "14px", color: "#666" }}>
                        Perfect for new learners starting their driving journey
                        from scratch
                      </span>
                    </div>
                    <div
                      className="rounded text-center"
                      style={{
                        color: "white",
                        background: "#28a745",
                        padding: "5px 10px",
                        fontSize: "12px",
                        borderRadius: "5px",
                      }}
                    >
                      {handlepercentage("10% OFF")}
                      10% OFF
                    </div>
                  </label> */}

                    {/* Option 3 */}
                    <label
                      className="d-flex align-items-center"
                      style={{
                        padding: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        background: "white",
                        cursor: "pointer",
                      }}
                    >
                      <div>
                        {/* <Form.Check type="radio" aria-label="radio 3" name="hours" /> */}
                      </div>
                      <div
                        className="text-start w-100"
                        style={{ marginLeft: "15px" }}
                      >
                        <select
                          className="w-100 border-0"
                          style={{
                            outline: "none",
                            fontSize: "14px",
                            background: "transparent",
                          }}
                        >
                          <option value="">Select Custom Hours</option>
                          <option value="10">10 hours</option>
                          <option value="20">20 hours</option>
                        </select>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <Row className=" border-0">
                {/* //end card// */}

                <Container>
                  <Container className="mt-4">
                    <Row>
                      <Col xs={12}>
                        <Card
                          className=" border-0"
                          style={{ borderRadius: "10px" }}
                        >
                          <Row className="align-items-center">
                            <h4>Instructor Details</h4>
                            <hr></hr>

                            {/* Driver image*/}

                            <Col
                              xs={12}
                              md={5}
                              className="d-flex align-items-center"
                            >
                              <Image
                                src={instructor.image}
                                roundedCircle
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  marginRight: "15px",
                                }}
                                alt="Instructor"
                              />
                              <div>
                                <h6 className="mb-1">{instructor.name}</h6>
                                <p className="mb-0 text-muted">
                                  {instructor.rate}/hr
                                </p>
                                <p className="mb-0 text-muted">
                                  {instructor.offer}
                                </p>
                              </div>
                            </Col>

                            {/* car image*/}

                            <Col
                              xs={12}
                              md={7}
                              className="d-flex align-items-center justify-content-md-end my-3"
                            >
                              <Image
                                src={instructor.carImage}
                                roundedCircle
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  marginRight: "15px",
                                }}
                                alt="Car"
                              />
                              <div>
                                <h6 className="mb-1">{instructor.carModel}</h6>
                                <p className="mb-0 text-muted">
                                  {instructor.carRating}
                                </p>
                                <p className="mb-0 text-muted">
                                  {instructor.carDetails}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Container>
              </Row>
            </Col>
            <Col xs={12} md={6} xl={4} style={{}}>
              <Row
                style={
                  {
                    // border: "1px solid black",
                    // height: "300px",
                  }
                }
              >
                <Col>
                  <div
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <div
                        className="d-flex"
                        style={{
                          borderBottom: "1px solid #ddd",
                          padding: "15px 20px ",
                        }}
                      >
                        <div
                          className="h5 m-0"
                          //   style={{ padding: "15px 20px " }}
                        >
                          Order Summary
                        </div>
                      </div>

                      <div
                        className="d-flex"
                        style={{
                          borderBottom: "1px solid #ddd",
                          padding: "15px 20px ",
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <i class="bi bi-ticket-perforated"></i> &nbsp; 6 hrs
                          Booking Credit
                        </div>
                        <div style={{ fontWeight: 600 }}>
                          ${bookingDetails.totalAmount.toFixed(2)}
                        </div>
                      </div>

                      <div
                        className="d-flex"
                        style={{
                          borderBottom: "1px solid #ddd",
                          padding: "15px 20px ",
                        }}
                      >
                        <div style={{ flex: 1 }}>Credit Discount</div>
                        <div style={{ fontWeight: 600, color: "#00a326" }}>
                          - ${bookingDetails.discount.toFixed(2)}
                        </div>
                      </div>

                      <div
                        className="d-flex justify-content-between"
                        style={{
                          padding: "15px 20px ",
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div className=" fw-bold">Total Payment Due </div>
                          <div
                            className="text-muted mt-2 "
                            style={{ fontSize: "12px" }}
                          >
                            Or 4 payments of ${bookingDetails.finalAmount / 4}
                          </div>
                        </div>
                        <div style={{ fontWeight: 600 }}>
                          <span>${bookingDetails.finalAmount.toFixed(2)}</span>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: "15px 20px ",
                        }}
                      >
                        <Button
                          className=" w-100 justify-content-center"
                          onClick={() => navigate("/bookyourlesson")}
                        >
                          Continue
                          <span className="ms-1">
                            <i class="bi bi-chevron-right"></i>
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}

/* <Col xs={12} md={6}>
    <h3>Instructor Details</h3>
    <hr />
    {user.map((item, index) => (
        <Card key={index} className="mb-3">
            <Row className="g-0">
                <Col xs={4}>
                    <Card.Img
                        src={item.image}
                        alt="Instructor"
                        className="rounded-start"
                        style={{ objectFit: "cover", height: "100%" }}
                    />
                </Col>
                <Col xs={8}>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <strong>Price/Hour: </strong>${item.max_price_per_hour}
                            <br />
                            Offers 1 & 2 lessons
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    ))}
</Col> */

/* //end_card with datajson// */

/* <Row xs={12}>
    <h1>Instructor Details </h1>

    <hr></hr>
    <Col xs={6}>
        {User.map((item, index) => (
            <Col style={{ display: "flex", border: "1px solid black", margin: "10px" }} key={index}>
                <div style={{ padding: "10px" }}>
                    <img src={item.image} alt="" style={{ width: "100%" }} />
                </div>

                <div style={{ padding: "10px" }}>
                    <h6>{item.name}</h6>
                    <h6>{item.max_price_per_hour}</h6>
                    <h6>Offers 1 & 2 lessons</h6>
                </div>
            </Col>

          
        )


        )}
    </Col>
    <Col xs={6} style={{}}>
        {User.map((item, index) => (
            <Col style={{ display: "flex", border: "1px solid black", margin: "10px" }} key={index}>
                <div style={{ padding: "10px" }}>
                    <img src={item.car_image} alt="" style={{ width: "100%" }} />
                </div>

                <div style={{ padding: "10px" }}>
                    <h6>{item.car_model}</h6>
                    <h6>{item.car_rating}</h6>
                    <h6>Dual controls fitters</h6>
                </div>
            </Col>

        )


        )}
    </Col>
</Row> */
