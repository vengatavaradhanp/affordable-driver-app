import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Container, InputGroup } from "react-bootstrap";
import { GenderList, RoleList, StateList, SuburbList } from '../../../utils/constant';
import { toast } from "react-toastify";
import UserService from '../../../services/user.service';
import { useLocation } from 'react-router-dom';

export default function UserForm2() {
    const location = useLocation();

    const [fields, setFields] = useState({
        id: location?.state?.id,
        fname: "",
        lname: "",
        email: "",
        password: "",
        phone: "",
        suburbs: "",
        address: "",
        state: "",
        gender: "",
        role: "",
        status: 1,
    })
    const [validated, setValidated] = useState(false);

    const [isEdit, setIsEdit] = useState(location?.state?.id ? true : false);

    useEffect(() => {
        if (isEdit) {

            getUserDetails();
        }
        // getUserDetails()
    }, [])

    const getUserDetails = () => {

        UserService.getAllUsersById(location?.state?.id)

            .then((response) => {
                const data = { ...fields };
                data["id"] = response.data.id;
                data["fname"] = response.data.fname;
                data["lname"] = response.data.lname;
                data["email"] = response.data.email;
                data["gender"] = response.data.gender;
                data["address"] = response.data.address;
                data["phone"] = response.data.phone;
                data["suburbs"] = response.data.suburbs;
                data["role"] = response.data.role;
                data["state"] = response.data.state;
                data["status"] = response.data.status;
                setFields(data)
            })
            .catch((error) => {
                toast.error("Failed to edit user");
            })
    }


    const handleFieldChange = (event) => {
        const { name, value, checked, type } = event.target
        const data = { ...fields };
        if (type === "radio") {
            data[name] = data.status == 0 ? 1 : 0;
        } else {
            data[name] = value;
        }

        setFields(data)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container fluid>
            <h4>Users Form </h4>
            <hr />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01" className='mb-3'>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name="fname"
                            value={fields.fname}
                            onChange={handleFieldChange}
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02" className='mb-3'>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            name="lname"
                            value={fields.lname}
                            onChange={handleFieldChange}
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02" className='mb-3'>
                        <Form.Label>Gender</Form.Label>
                        <Form.Select aria-label="Default select example">
                            {GenderList.map((item, index) => <option value={item.value} key={index}>{item.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername" className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                                name="email"
                                value={fields.email}
                                onChange={handleFieldChange}
                            />
                            {/* <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback> */}
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02" className='mb-3'>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Mobile Number"
                            name="phone"
                            value={fields.phone}
                            onChange={handleFieldChange}
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02" className='mb-3'>
                        <Form.Label>Role</Form.Label>
                        <Form.Select aria-label="Default select example">
                            {RoleList.map((item, index) => <option value={item.value} key={index}>{item.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationCustom02" className='mb-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            required
                            as="textarea" rows={4}
                            placeholder="Address"
                            name="address"
                            value={fields.address}
                            onChange={handleFieldChange}
                        />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02" className='mb-3'>
                        <Form.Label>State</Form.Label>
                        <Form.Select aria-label="Default select example">
                            {StateList.map((item, index) => <option value={item.value} key={index}>{item.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02" className='mb-3'>
                        <Form.Label>Suburbs</Form.Label>
                        <Form.Select aria-label="Default select example">
                            {SuburbList.map((item, index) => <option value={item.value} key={index}>{item.name}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02" className='mb-3'>
                        <Form.Label>Status</Form.Label>
                        <div key={`inline-radio`} className="mt-2">
                            <Form.Check
                                inline
                                label="Active"
                                name="status"
                                type="radio"
                                id={`inline-radio-1`}
                                checked={fields.status == 1}
                                onChange={handleFieldChange}
                            />
                            <Form.Check
                                inline
                                label="Inactive"
                                name="status"
                                type="radio"
                                id={`inline-radio-2`}
                                checked={fields.status == 0}
                                onChange={handleFieldChange}
                            />

                        </div>
                        {/* ))} */}
                    </Form.Group>

                </Row>

                <hr />
                <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
                    <Button type="submit" className="me-2" variant="primary" style={{ width: '100px' }}>
                        Submit
                    </Button>
                    <Button type="button" variant="secondary" style={{ width: '100px' }}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Container>
    )
}
