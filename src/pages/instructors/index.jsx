import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import UserData from "../../userData.json";
// import Verify from "../../assets/images/award-fill.svg";
// import Unverify from "../../assets/images/award-red.svg";
// import VerifyOne from "../../assets/images/award.svg";
// import UnverifyOne from "../../assets/images/award2.svg";
import VerifyTwo from "../../assets/images/patch.svg";
import UnverifyTwo from "../../assets/images/patch2.svg";
import Dollar from "../../assets/images/svgviewer-dollar.svg";
import Star from "../../assets/images/svgviewer-star.svg";
// import Car from "../../assets/images/svgviewer-car.svg";
import Lessons from "../../assets/images/svgviewer-lessons.svg";
// import { useNavigate } from "react-router-dom";

export default function Instructors() {
  return (

    <>
      <div>
        <Container style={{ background: "#f2f4f7" }} fluid>
          <Container class="container">
            <div style={{ minHeight: "150px" }}></div>
          </Container>
        </Container>
        <Container class="container" style={{ width: "60%" }}>
          <div className="pt-5">
            <h3>2 Auto instructors available in the next 7 days</h3>
            <div class="text-muted py-2">From $63.00/hr</div>
          </div>

          <Row
            style={{
              marginTop: "20px",
            }}
          >
            {UserData.map((item, index) => (
              <Col
                md={6}
                key={index}
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <div
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                    margin: "10px",
                    padding: "15px",
                    // border: "1px solid rgba(99, 99, 99, 0.2)",
                    cursor: "pointer",
                  }}
                >
                  <Row>
                    <Col md={4}>
                      <div>
                        <img
                          src={item.image}
                          alt="no_image"
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",

                            boxShadow:
                              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                          }}
                        />
                      </div>
                    </Col>
                    <Col md={8}>
                      <div>
                        <div style={{ display: "flex", position: "relative" }}>
                          <div
                            style={{
                              flex: 1,
                              color: "#012a41",
                              fontWeight: 600,
                              marginBottom: "4px",
                            }}
                          >
                            {item.name}
                            <span
                              className="position-absolute ms-1"
                              // style={{ position: "absolute", marginLeft: "4px" }}
                            >
                              {item.is_verified === 1 ? (
                                <img src={VerifyTwo} alt="yes"></img>
                              ) : (
                                <img
                                  className="d-none"
                                  src={UnverifyTwo}
                                  alt="no"
                                ></img>
                              )}
                            </span>
                          </div>
                          <div
                            style={{ position: "absolute", top: -10, right: 0 }}
                          >
                            <i
                              class="bi bi-circle-fill"
                              style={{
                                fontSize: "10px",
                                color: index % 2 !== 0 ? "#f70000" : "#00a326",
                              }}
                            ></i>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            columnGap: "10px",
                            marginBottom: "4px",
                          }}
                        >
                          <img
                            // className="custom-w-25 custom-h-25 bg-success p-1"
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: "#2b9348",
                              padding: "4px",
                              borderRadius: "30%",
                            }}
                            src={Dollar}
                            alt=""
                          />
                          <span style={{ fontSize: "14px" }}>
                            $ {item.min_price_per_hour} - ${" "}
                            {item.max_price_per_hour} / hr
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            columnGap: "10px",
                            marginBottom: "4px",
                          }}
                        >
                          <img
                            // className="custom-w-25 custom-h-25 bg-success p-1"
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: "#2b9348",
                              padding: "4px",
                              borderRadius: "30%",
                            }}
                            src={Star}
                            alt=""
                          />
                          <span style={{ fontSize: "14px" }}>
                            {item.rating} Ratings
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            columnGap: "10px",
                          }}
                        >
                          <img
                            // className="custom-w-25 custom-h-25 bg-success p-1 "
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: "#2b9348",
                              padding: "4px",
                              borderRadius: "30%",
                            }}
                            src={Lessons}
                            alt=""
                          />
                          <span style={{ fontSize: "14px" }}>
                            {item.lessons_completed} Completed Lessons
                          </span>
                        </div>
                        <div
                          style={{
                            marginTop: "20px",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#2b9348",
                              flex: 1,
                            }}
                            className="link-button"
                          >
                            Check Availability
                            <span
                              style={{
                                position: "relative",
                                top: "0px",
                                fontSize: "12px",
                                left: "5px",
                              }}
                            >
                              <i class="bi bi-caret-right-fill"></i>
                            </span>
                          </div>
                          <div>
                            {item.is_verified === 1 ? (
                              <button
                                type="button"
                                class="btn btn-primary btn-sm"
                                style={{
                                  padding: "0px 10px",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                  letterSpacing: "1px",
                                  display: "none",
                                }}
                              >
                                Verified
                              </button>
                            ) : (
                              <button
                                type="button"
                                class="btn btn-danger btn-sm"
                                style={{
                                  padding: "0px 10px",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                  letterSpacing: "1px",
                                }}
                              >
                                verify?
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Stack direction="horizontal" gap={2}>
                    <div>
                      <button
                        style={{ borderRadius: "5px" }}
                        type="button"
                        class="btn btn-secondary btn-sm"
                      >
                        View Profile
                      </button>
                    </div>
                    <div>
                      {" "}
                      <button
                        style={{ borderRadius: "5px" }}
                        type="button"
                        class="btn btn-primary btn-sm"
                      >
                        Book Online
                      </button>
                    </div>
                  </Stack>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
