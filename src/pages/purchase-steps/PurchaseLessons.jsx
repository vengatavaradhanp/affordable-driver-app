// import React, { useState } from "react";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Stack from "react-bootstrap/Stack";
// import Card from "react-bootstrap/Card";
// import UserData from "../../userData.json";
// import Date from "../../date.json";
// import Time from "../../time.json";
// import Button from "react-bootstrap/Button";
// import { Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
// import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";
// import { useNavigate } from "react-router-dom";

// export default function PurchaseLessons() {
//   const navigate = useNavigate();

//   const [selectedDate, setSelectedDate] = useState("");

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//     console.log("Selected Date:", e.target.value); // Log the selected date
//   };
//   const [selectedTime, setSelectedTime] = useState("");

//   const handleChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   const [isVisible, setIsVisible] = useState(false); // State to control visibility

//   const handleHideDiv = () => {
//     setIsVisible((prevState) => !prevState); // Hide the div
//   };

//   const user = [
//     {
//       name: "John Doe",
//       max_price_per_hour: "50",
//       image: "https://via.placeholder.com/100",
//       car_image: "https://via.placeholder.com/100",
//       car_model: "Toyota Camry",
//       car_rating: "4.5/5",
//     },
//   ];

//   const bookingDetails = {
//     totalAmount: 420.0,
//     discount: 21.0,
//     finalAmount: 399.0,
//   };

//   <PurchaseLessons user={user} bookingDetails={bookingDetails} />;

//   return (
//     <>
//       <div style={{ backgroundColor: "#f3f4f6" }}>
//         <Container fluid>
//           <Container class="container" style={{ width: "80%" }} fluid>
//             <div className="pt-5">
//               <h3>Book your lessons</h3>
//               <div class="text-muted py-2">
//                 Book now or later from your dashboard.
//               </div>
//             </div>
//           </Container>
//           <Container style={{ width: "80%" }}>
//             <Row>
//               <Col>
//                 <Row gap={3}>
//                   <Col
//                     xs={8}
//                     style={{
//                       height: "auto",
//                       width: "60%",
//                       //   border: "1px solid black",
//                       boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
//                       backgroundColor: "white",
//                       borderRadius: "10px",
//                       margin: "10px",
//                     }}
//                   >
//                     <Stack className="pt-4">
//                       <div>
//                         <h4>New Booking</h4>
//                       </div>
//                       <hr />
//                     </Stack>
//                     <Stack className="py-2">
//                       <label htmlFor="">Lesson Duration</label>
//                       <ToggleButtonGroup
//                         className="py-2"
//                         type="radio"
//                         name="options"
//                         defaultValue={1}
//                       >
//                         <ToggleButton
//                           style={{
//                             backgroundColor: "white",
//                             border: "1px solid rgb(211, 212, 214)",
//                             borderTopLeftRadius: "10px",
//                             borderBottomLeftRadius: "10px",
//                           }}
//                           id="tbg-radio-2"
//                           value={1}
//                         >
//                           <span>
//                             <i
//                               style={{ marginRight: "5px" }}
//                               class="bi bi-check-lg"
//                             ></i>
//                             1-Hour Lesson
//                           </span>
//                         </ToggleButton>
//                         <ToggleButton
//                           style={{
//                             backgroundColor: "white",
//                             border: "1px solid rgb(211, 212, 214)",
//                             borderTopRightRadius: "10px",
//                             borderBottomRightRadius: "10px",
//                           }}
//                           id="tbg-radio-3"
//                           value={2}
//                         >
//                           <span>
//                             <i
//                               style={{ marginRight: "5px" }}
//                               class="bi bi-check-lg"
//                             ></i>
//                             2-Hour Lesson
//                           </span>
//                         </ToggleButton>
//                       </ToggleButtonGroup>
//                     </Stack>
//                     <Stack direction="horizontal" className="py-2">
//                       <Form.Group
//                         style={{ width: "50%" }}
//                         controlId="dateSelect"
//                       >
//                         <Form.Label className="py-2">
//                           Available Dates
//                         </Form.Label>
//                         <Form.Select
//                           value={selectedDate}
//                           onChange={handleDateChange}
//                           aria-label="Date Selector"
//                           style={{
//                             borderTopLeftRadius: "10px",
//                             borderBottomLeftRadius: "10px",
//                           }}
//                         >
//                           <option value="">
//                             <i class="bi bi-calendar"></i>
//                             Select a date{" "}
//                           </option>
//                           {Date.map((option) => (
//                             <option key={option.id} value={option.date}>
//                               {option.date}
//                             </option>
//                           ))}
//                         </Form.Select>
//                       </Form.Group>

//                       <Form style={{ width: "50%" }}>
//                         <FormGroup>
//                           <FormLabel className="py-2">
//                             Available Times
//                           </FormLabel>
//                           <FormSelect
//                             value={selectedTime}
//                             onChange={handleChange}
//                             style={{
//                               borderTopRightRadius: "10px",
//                               borderBottomRightRadius: "10px",
//                             }}
//                           >
//                             <option value="" disabled>
//                               <i class="bi bi-clock"></i>
//                               Select a time
//                             </option>
//                             {Time.map((option) => (
//                               <option key={option.id} value={option.time}>
//                                 {option.time}
//                               </option>
//                             ))}
//                           </FormSelect>
//                         </FormGroup>
//                         {selectedTime && (
//                           <p className="mt-3">Selected Time: {selectedTime}</p>
//                         )}
//                       </Form>
//                     </Stack>
//                     <Stack className="py-2" style={{ borderRadius: "10px" }}>
//                       <label className="py-2" htmlFor="">
//                         Lesson Pick Up Location
//                       </label>
//                       <ToggleButtonGroup name="select" onClick={handleHideDiv}>
//                         <ToggleButton
//                           onClick={handleHideDiv}
//                           style={{
//                             backgroundColor: "white",
//                             border: "1px solid rgb(211, 212, 214)",
//                             width: "80%",
//                             justifyContent: "start",
//                             borderTopLeftRadius: "10px",
//                             borderBottomLeftRadius: "10px",
//                             borderRight: "none",
//                             color: "rgb(211, 212, 214)",
//                           }}
//                           id="tbg-radio"
//                           value={2}
//                         >
//                           placeholder
//                         </ToggleButton>
//                         <ToggleButton
//                           style={{
//                             width: "20%",
//                             borderTopRightRadius: "10px",
//                             borderBottomRightRadius: "10px",
//                           }}
//                         >
//                           <span>
//                             <i
//                               style={{
//                                 marginRight: "5px",
//                               }}
//                               class="bi bi-pencil"
//                             ></i>
//                             Edit
//                           </span>
//                         </ToggleButton>
//                       </ToggleButtonGroup>
//                       {isVisible && (
//                         <Stack>
//                           <div className="py-4">
//                             <label htmlFor="">Pick up address</label>
//                             <input
//                               style={{
//                                 width: "100%",
//                                 height: "40px",
//                                 borderRadius: "10px",
//                                 border: "1px solid rgb(211, 212, 214)",
//                               }}
//                               type="text"
//                             />
//                           </div>
//                           <Stack direction="horizontal">
//                             <Col className="d-flex justify-content-center row">
//                               <label htmlFor="">Suburb</label>
//                               <Dropdown>
//                                 <Dropdown.Toggle
//                                   style={{
//                                     width: "100%",
//                                     backgroundColor: "white",
//                                     color: "black",
//                                     border: "1px solid rgb(211, 212, 214)",
//                                     borderTopLeftRadius: "10px",
//                                     borderBottomLeftRadius: "10px",
//                                   }}
//                                   id="dropdown-basic"
//                                 >
//                                   Glebe, 7000
//                                 </Dropdown.Toggle>

//                                 <Dropdown.Menu style={{ width: "90%" }}>
//                                   <Dropdown.Item href="#/action-1">
//                                     Action
//                                   </Dropdown.Item>
//                                   <Dropdown.Item href="#/action-2">
//                                     Another action
//                                   </Dropdown.Item>
//                                   <Dropdown.Item href="#/action-3">
//                                     Something else
//                                   </Dropdown.Item>
//                                 </Dropdown.Menu>
//                               </Dropdown>
//                             </Col>
//                             <Col className="d-flex justify-content-center row">
//                               <label htmlFor="">State</label>
//                               <Dropdown>
//                                 <Dropdown.Toggle
//                                   variant="success"
//                                   id="dropdown-basic"
//                                   style={{
//                                     width: "100%",
//                                     backgroundColor: "white",
//                                     color: "black",
//                                     border: "1px solid rgb(211, 212, 214)",
//                                     borderLeft: "none",
//                                     borderTopRightRadius: "10px",
//                                     borderBottomRightRadius: "10px",
//                                   }}
//                                 >
//                                   Tasmania
//                                 </Dropdown.Toggle>

//                                 <Dropdown.Menu style={{ width: "90%" }}>
//                                   <Dropdown.Item href="#/action-1">
//                                     Action
//                                   </Dropdown.Item>
//                                   <Dropdown.Item href="#/action-2">
//                                     Another action
//                                   </Dropdown.Item>
//                                   <Dropdown.Item href="#/action-3">
//                                     Something else
//                                   </Dropdown.Item>
//                                 </Dropdown.Menu>
//                               </Dropdown>
//                             </Col>
//                           </Stack>
//                         </Stack>
//                       )}
//                     </Stack>
//                     <Stack
//                       direction="horizontal"
//                       className="d-flex justify-content-between py-4"
//                     >
//                       <Button
//                         style={{
//                           width: "20%",
//                           backgroundColor: "rgb(211, 212, 214)",
//                           borderRadius: "10px",
//                           border: "none",
//                         }}
//                       >
//                         Cancel
//                       </Button>
//                       <Button style={{ width: "20%", borderRadius: "10px" }}>
//                         Save
//                       </Button>
//                     </Stack>
//                   </Col>
//                   <Col
//                     xs={4}
//                     style={{
//                       height: "350px",
//                       margin: "10px",
//                       borderRadius: "10px",
//                       boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
//                       backgroundColor: "white",
//                     }}
//                   >
//                     <Container className="mt-4">
//                       <Row>
//                         <Col xs={12} md={12}>
//                           <h3>Order Summary</h3>
//                           <hr />
//                           <Stack className=" border-0">
//                             <Card.Body>
//                               <div className="d-flex justify-content-between">
//                                 <span>
//                                   <i class="bi bi-ticket-perforated"></i>
//                                 </span>
//                                 <span
//                                   style={{
//                                     position: "relative",
//                                     right: "65px",
//                                   }}
//                                 >
//                                   6 hrs Booking Credit
//                                 </span>
//                                 <span>${bookingDetails.totalAmount}</span>
//                               </div>
//                               <div className="d-flex justify-content-between mt-3">
//                                 <span>
//                                   Credit Discount{" "}
//                                   <span className="badge bg-light text-dark">
//                                     5% OFF
//                                   </span>
//                                 </span>
//                                 <span className="text-success">
//                                   - ${bookingDetails.discount}
//                                 </span>
//                               </div>
//                               <hr />
//                               <div className="d-flex justify-content-between fw-bold">
//                                 <span>Total Payment Due</span>
//                                 <span>${bookingDetails.finalAmount}</span>
//                               </div>
//                               <div
//                                 className="text-muted mt-3"
//                                 style={{ fontSize: "12px" }}
//                               >
//                                 Or 4 payments of $
//                                 {bookingDetails.finalAmount / 4}
//                               </div>
//                               <Button
//                                 className=" mt-4 w-100 justify-content-center rounded-4"
//                                 style={{
//                                   backgroundColor: "#d3d4d6",
//                                   border: "none",
//                                 }}
//                                 onClick={() =>
//                                   navigate("/learner-registration")
//                                 }
//                               >
//                                 Continue
//                                 <span className="ms-1">
//                                   <i class="bi bi-chevron-right"></i>
//                                 </span>
//                               </Button>
//                             </Card.Body>
//                           </Stack>
//                         </Col>
//                       </Row>
//
//                     </Container>
//                   </Col>
//                 </Row>
//               </Col>
//             </Row>
//           </Container>
//         </Container>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Card,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormSelect,
  ToggleButtonGroup,
  ToggleButton,
  Dropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserData from "../../userData.json";
import { API_URL, DateList } from "../../utils/constant";

export default function PurchaseLessons() {
  const [timedata, setTimeDate] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/timeslots`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setTimeDate(json);
        console.log("json", json);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleHideDiv = () => {
    setIsVisible((prevState) => !prevState);
  };

  const bookingDetails = {
    totalAmount: 420.0,
    discount: 21.0,
    finalAmount: 399.0,
  };

  return (
    <div style={{ backgroundColor: "#f3f4f6" }}>
      <Container fluid className="py-5">
        <Container className="pb-4">
          <h3>Book your lessons</h3>
          <p className="text-muted">Book now or later from your dashboard.</p>
        </Container>

        <Container>
          <Row className="g-4">
            <Col xs={12} md={8}>
              <Card className="shadow-sm p-4 rounded-4">
                <h4>New Booking</h4>
                <hr />
                <Stack gap={3}>
                  <div>
                    <Form.Label>Lesson Duration</Form.Label>
                    <ToggleButtonGroup
                      type="radio"
                      name="lessonDuration"
                      defaultValue={1}
                      className="w-100"
                    >
                      <ToggleButton
                        id="tbg-radio-1"
                        value={1}
                        // className="btn-outline-secondary"
                        style={{
                          backgroundColor: "white",
                          border: "1px solid rgb(211, 212, 214)",
                          borderTopLeftRadius: "10px",
                          borderBottomLeftRadius: "10px",
                        }}
                      >
                        <span>
                          <i
                            style={{ marginRight: "5px" }}
                            class="bi bi-check-lg"
                          ></i>
                          1-Hour Lesson
                        </span>
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-radio-2"
                        value={2}
                        // className="btn-outline-secondary"
                        style={{
                          backgroundColor: "white",
                          border: "1px solid rgb(211, 212, 214)",
                          borderTopRightRadius: "10px",
                          borderBottomRightRadius: "10px",
                        }}
                      >
                        <span>
                          <i
                            style={{ marginRight: "5px" }}
                            class="bi bi-check-lg"
                          ></i>
                          2-Hour Lesson
                        </span>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <div className="d-flex flex-column flex-md-row gap-3">
                    <FormGroup className="flex-fill">
                      <FormLabel>Available Dates</FormLabel>
                      <FormSelect
                        style={{ borderRadius: "10px" }}
                        value={selectedDate}
                        onChange={handleDateChange}
                      >
                        <option value="">Select a date</option>
                        {DateList.map((option) => (
                          <option key={option.id} value={option.date}>
                            {option.date}
                          </option>
                        ))}
                      </FormSelect>
                    </FormGroup>

                    <FormGroup className="flex-fill">
                      <FormLabel>Available Times</FormLabel>
                      <FormSelect
                        style={{ borderRadius: "10px" }}
                        value={selectedTime}
                        onChange={handleTimeChange}
                      >
                        <option value="" disabled>
                          Select a time
                        </option>
                        {timedata?.data?.map((option) => (
                          <option key={option.id} value={option.start_hour}>
                            {option.start_hour}
                          </option>
                        ))}
                      </FormSelect>
                    </FormGroup>
                  </div>

                  <div>
                    <FormLabel>Lesson Pick-Up Location</FormLabel>
                    <div>
                      <ToggleButtonGroup
                        style={{ width: "100%" }}
                        name="select"
                        onClick={handleHideDiv}
                      >
                        <ToggleButton
                          xs={12}
                          md={12}
                          onClick={handleHideDiv}
                          style={{
                            backgroundColor: "white",
                            border: "1px solid rgb(211, 212, 214)",
                            width: "80%",
                            justifyContent: "start",
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                            borderRight: "none",
                            color: "rgb(211, 212, 214)",
                          }}
                          id="tbg-radio"
                          value={2}
                        >
                          placeholder
                        </ToggleButton>
                        <ToggleButton
                          style={{
                            width: "20%",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                            border: "none",
                          }}
                        >
                          <span>
                            <i
                              style={{
                                marginRight: "5px",
                              }}
                              class="bi bi-pencil"
                            ></i>
                            Edit
                          </span>
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                    {isVisible && (
                      <Stack>
                        <div className="py-4">
                          <label htmlFor="">Pick up address</label>
                          <input
                            style={{
                              width: "100%",
                              height: "40px",
                              borderRadius: "10px",
                              border: "1px solid rgb(211, 212, 214)",
                            }}
                            type="text"
                          />
                        </div>
                        <Stack direction="horizontal">
                          <Col className="d-flex justify-content-center row">
                            <label htmlFor="">Suburb</label>
                            <Dropdown>
                              <Dropdown.Toggle
                                style={{
                                  width: "100%",
                                  backgroundColor: "white",
                                  color: "black",
                                  border: "1px solid rgb(211, 212, 214)",
                                  borderTopLeftRadius: "10px",
                                  borderBottomLeftRadius: "10px",
                                }}
                                id="dropdown-basic"
                              >
                                Glebe, 7000
                              </Dropdown.Toggle>

                              <Dropdown.Menu style={{ width: "90%" }}>
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                          <Col className="d-flex justify-content-center row">
                            <label htmlFor="">State</label>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                                style={{
                                  width: "100%",
                                  backgroundColor: "white",
                                  color: "black",
                                  border: "1px solid rgb(211, 212, 214)",
                                  borderLeft: "none",
                                  borderTopRightRadius: "10px",
                                  borderBottomRightRadius: "10px",
                                }}
                              >
                                Tasmania
                              </Dropdown.Toggle>

                              <Dropdown.Menu style={{ width: "90%" }}>
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </Stack>
                      </Stack>
                    )}
                  </div>

                  <div className="d-flex justify-content-between">
                    <Button
                      style={{ borderRadius: "10px" }}
                      variant="secondary"
                    >
                      Cancel
                    </Button>
                    <Button style={{ borderRadius: "10px" }} variant="primary">
                      Save
                    </Button>
                  </div>
                </Stack>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="shadow-sm p-4 rounded-4">
                <h3>Order Summary</h3>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>6 hrs Booking Credit</span>
                  <span>${bookingDetails.totalAmount}</span>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <span>
                    Credit Discount{" "}
                    <span className="badge bg-light text-dark">5% OFF</span>
                  </span>
                  <span className="text-success">
                    - ${bookingDetails.discount}
                  </span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total Payment Due</span>
                  <span>${bookingDetails.finalAmount}</span>
                </div>
                <div className="text-muted mt-3" style={{ fontSize: "12px" }}>
                  Or 4 payments of ${bookingDetails.finalAmount / 4}
                </div>
                <Button
                  style={{ borderRadius: "10px" }}
                  className="w-100 mt-3"
                  onClick={() => navigate("/learnerregistration")}
                >
                  Continue
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
