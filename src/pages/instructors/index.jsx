import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InstructorList } from "../../utils/constant";
import { Stack } from "react-bootstrap";
import PurchaseSteps from "../purchase-steps";
import { useNavigate } from "react-router-dom";

export default function Instructor() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Container style={{ background: "#f2f4f7" }} fluid>
        <Container class="container">
          <div
            style={{
              minHeight: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="display-6 mb-0">Filter Options</h3>
          </div>
        </Container>
      </Container> */}
      <Container class="container" style={{ width: "70%" }}>
        <div className="pt-5">
          <h3>3 Auto instructors available in the next 7 days</h3>
          <div class="text-muted py-2">From $63.00/hr</div>
        </div>

        <Row style={{ marginTop: "20px" }}>
          {InstructorList.map((item, index) => (
            <Col
              md={6}
              key={index}
              style={{
                padding: "10px",
              }}
            >
              <div
                style={{
                  boxShadow:
                    "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
                  borderRadius: "10px",
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
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={8}>
                    <div>
                      <div style={{ display: "flex", position: "relative" }}>
                        <div
                          style={{ flex: 1, color: "#012a41", fontWeight: 600 }}
                        >
                          {item.name}
                        </div>
                        <div
                          style={{ position: "absolute", top: -5, right: 0 }}
                        >
                          {item.is_verified == 1 ? (
                            <i
                              class="bi bi-patch-check-fill"
                              style={{
                                fontSize: "22px",
                                color: "#00a326",
                              }}
                            ></i>
                          ) : (
                            <i
                              class="bi bi-patch-exclamation-fill"
                              style={{
                                fontSize: "22px",
                                color: "#f70000",
                              }}
                            ></i>
                          )}
                        </div>
                      </div>
                      <div>
                        <span style={{ fontSize: "14px" }}>
                          $ {item.min_price_per_hour} - ${" "}
                          {item.max_price_per_hour} / hr
                        </span>
                      </div>
                      <div>
                        <span style={{ fontSize: "14px" }}>
                          {item.rating} Ratings
                        </span>
                      </div>
                      <div>
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
                          {item.availability == 1 ? (
                            <button
                              type="button"
                              class="btn btn-primary btn-sm"
                              style={{
                                padding: "0px 10px",
                                borderRadius: "10px",
                                fontSize: "13px",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Active
                            </button>
                          ) : (
                            <button
                              type="button"
                              class="btn btn-danger btn-sm"
                              style={{
                                padding: "0px 10px",
                                borderRadius: "10px",
                                fontSize: "13px",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Inactive
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Stack
                  direction="horizontal"
                  gap={2}
                  style={{ justifyContent: "end" }}
                >
                  <div>
                    <button type="button" class="btn btn-secondary btn-sm">
                      View Profile
                    </button>
                  </div>
                  <div>
                    {" "}
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      onClick={() => navigate("/purchase")}
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
  );
}
