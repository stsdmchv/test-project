import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import './personCard.scss';

// @desc    Add person
// @route   GET /addNew
// @access  Public
export const AddPerson = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  })

  const onClick = (username, password, firstName, lastName) => {
    setTimeout(() => {
      setState(
        username,
        password,
        firstName,
        lastName,
      )
      localStorage.setItem(state)
    }, 1000)
  }



  return (
    <Form>
      <Form.Label><h2>Add new user</h2></Form.Label>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type="firstName" id="UN" placeholder="Your name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="lastName" placeholder="Your surname"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat password</Form.Label>
        <Form.Control type="password" placeholder="Repeat password"/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onClick}>
        Create card
      </Button>
    </Form>
  )
}