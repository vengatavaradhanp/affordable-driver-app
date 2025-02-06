import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Calendar from "../calendar";

export default function MyProfile() {
  return (
    <>
      <>
        {/* Page Header Start */}
        <div
          className="container-fluid page-header py-6 my-5 mt-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div
            className="container"
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h3 className="display-5 text-light mb-0">My Profile</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Facts Start */}
        <div className="container-fluid facts py-5 pt-lg-0 contactFacts">
          <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
              <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-white shadow d-flex align-items-center h-100 p-4">
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Row>
                        <Col
                          sm={2}
                          lg={2}
                          style={{ borderRight: "1px solid #e4e5e7" }}
                        >
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Edit Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">My Calendar</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={10} lg={10} style={{ minHeight: "700px" }}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <div style={{ margin: "0px 15px 15px 15px" }}>
                                {" "}
                                <div
                                  style={{
                                    fontSize: "26px",
                                    fontWeight: 600,
                                    color: "#012a41",
                                  }}
                                >
                                  {" "}
                                  Edit Profile
                                </div>
                                <hr />
                              </div>
                              <form>
                                <Row style={{ paddingBottom: "40px" }}>
                                  <Col sm={6}>
                                    <div
                                      className="form-floating"
                                      style={{ margin: "0px 15px" }}
                                    >
                                      <input
                                        type="text"
                                        className="form-control border-0 bg-light"
                                        id="name"
                                        placeholder="First Name"
                                      />
                                      <label htmlFor="name">First Name</label>
                                    </div>
                                  </Col>
                                  <Col sm={6}>
                                    <div
                                      className="form-floating"
                                      style={{ margin: "0px 15px" }}
                                    >
                                      <input
                                        type="text"
                                        className="form-control border-0 bg-light"
                                        id="lastName"
                                        placeholder="Last Name"
                                      />
                                      <label htmlFor="lastName">
                                        Last Name
                                      </label>
                                    </div>
                                  </Col>
                                  <Col sm={6}>
                                    <div
                                      className="form-floating"
                                      style={{ margin: " 15px" }}
                                    >
                                      <input
                                        type="email"
                                        className="form-control border-0 bg-light"
                                        id="email"
                                        placeholder="Email Address"
                                      />
                                      <label htmlFor="email">
                                        Email Address
                                      </label>
                                    </div>
                                  </Col>
                                  <Col sm={6}>
                                    <div
                                      className="form-floating"
                                      style={{ margin: " 15px" }}
                                    >
                                      <input
                                        type="text"
                                        className="form-control border-0 bg-light"
                                        id="contactNumber"
                                        placeholder="Contact Number"
                                      />
                                      <label htmlFor="contactNumber">
                                        Contact Number
                                      </label>
                                    </div>
                                  </Col>
                                  <Col sm={6}>
                                    <div
                                      className="form-floating"
                                      style={{ margin: "0px 15px" }}
                                    >
                                      <select
                                        className="form-select"
                                        id="floatingSelect"
                                        aria-label="Inquiring About"
                                      >
                                        <option selected="">
                                          Inquiring About
                                        </option>
                                        <option value={1}>
                                          {" "}
                                          Single Lesson
                                        </option>
                                        <option value={2}>
                                          {" "}
                                          3 x 50 Minute Lesson Package
                                        </option>
                                        <option value={3}>
                                          5 x 50 Minute Lesson Package
                                        </option>
                                      </select>
                                      <label htmlFor="floatingSelect">
                                        Inquiring About
                                      </label>
                                    </div>
                                  </Col>
                                  <Col sm={6}>
                                    <div
                                      className="form-floating"
                                      style={{ margin: "0px 15px" }}
                                    >
                                      <textarea
                                        className="form-control border-0 bg-light"
                                        placeholder="Message"
                                        id="message"
                                        style={{ height: 100 }}
                                        defaultValue={""}
                                      />
                                      <label htmlFor="message">Message</label>
                                    </div>
                                  </Col>
                                </Row>

                                <Row
                                  style={{
                                    borderTop: "1px solid #e4e5e7",
                                    margin: "0px 0px",
                                    paddingTop: "40px",
                                  }}
                                >
                                  <Col lg={3}>
                                    <button
                                      className="btn btn-primary py-3 px-5"
                                      type="submit"
                                      // style={{ margin: "0px 25px" }}
                                    >
                                      Update Profile
                                    </button>
                                  </Col>
                                </Row>
                              </form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <div style={{ margin: "0px 15px 15px 15px" }}>
                                {" "}
                                <div
                                  style={{
                                    fontSize: "26px",
                                    fontWeight: 600,
                                    color: "#012a41",
                                  }}
                                >
                                  {" "}
                                  Calendar Schedules
                                </div>
                                <hr />
                              </div>
                              <Calendar />
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
