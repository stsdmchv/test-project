import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import './personCard.scss';
import {getValuesLS, putValuesLS} from "../../controllers/localStorageController";

// @desc    Add person
// @route   GET /addNew
// @access  Public
export const AddPerson = (props) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  })
  const id = Math.max(...(props.persons.map(item => item.id))) + 1
  const idLS = JSON.parse(getValuesLS())
  console.log(idLS)

  const changeHandler = e => {
    setValues({...values, [e.target.name]: e.target.value})
      }

  // TODO: Need refactor on Redux
  const onClick = () => {
    putValuesLS(id, values)
  }

  return (
    <Form>
      <Form.Label><h2>Add new user</h2></Form.Label>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>ID</Form.Label>
        <Form.Control
          disabled
          name="id"
          value={id}
          onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>First name</Form.Label>
        <Form.Control
          required
          name="firstName"
          placeholder="Your name"
          onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          name="lastName"
          placeholder="Your surname"
          onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Username</Form.Label>
        <Form.Control
          required
          name="username"
          placeholder="Username"
          onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}/>
        <Form.Text
          id="passwordHelpBlock"
          muted>
            Your password must be 4+ characters long.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Label>Repeat password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Repeat password"/>
      </Form.Group>
      <Button
        variant="primary"
        onClick={onClick}>
          Create card
      </Button>
    </Form>
  )
}