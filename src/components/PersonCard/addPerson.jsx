import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import './personCard.scss';
import {putValuesLS} from "../../controllers/localStorageController";
import {useNavigate} from "react-router-dom";

// @desc    Add person
// @route   GET /addNew
// @access  Public
export const AddPerson = () => {
  const id = Object.keys(localStorage).length + 1

  const [values, setValues] = useState({
    id: id,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  })

  const changeHandler = e => {
    const requiredFields = ['username', 'password', 'firstName']
    // need render errors
    if (e.target.name === 'username' && e.target.value.length > 2) setValues({...values, [e.target.name]: e.target.value})
    if (e.target.name === 'password' && e.target.value.length > 3) setValues({...values, [e.target.name]: e.target.value})
    if (e.target.name === 'firstName' && e.target.value.length > 1) setValues({...values, [e.target.name]: e.target.value})
    if (!requiredFields.entries(e.target.name)) setValues({...values, [e.target.name]: e.target.value})
      }
  let navigate = useNavigate();

  // TODO: Need refactor on Redux
  const onClick = () => {
    setValues({...values, id: id+1}) // TODO: Need auto-redirect on "/"
    putValuesLS(id, values)
    navigate('/')
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
      <Button
        variant="secondary"
        onClick={()=>{navigate('/', {replace:true})}}>
          Back
      </Button>
    </Form>
  )
}