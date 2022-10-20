import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import './personCard.scss';
import {putValuesLS} from "../../controllers/localStorageController";
import { Formik, Form as FForm, Field } from 'formik';
import * as Yup from 'yup';

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
    setValues({...values, [e.target.name]: e.target.value})
      }

  // TODO: Need refactor on Redux
  const onClick = () => {
    setValues({...values, id: id+1}) // TODO: Need auto-redirect on "/"
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

// @desc    Add person
// @route   GET /addNew
// @access  Public
// TODO     Add roles, workBorders
const AddUserSchema = Yup.object().shape({
  id: Number(),
  firstName: Yup.string()
    .min(2, 'Too short')
    .required('You must type name!'),
  lastName: Yup.string(),
  userName: Yup.string()
    .min(3, 'Too shirt')
    .required('Required!'),
  password: Yup.string(),
  repeatPassword: Yup.string()
    //.optional().equal(Yup.ref("password"), "Must be a identical!") // TODO how equal?
})

export const ValidationSchema = () => (
  <div>
    <h1>Add new user</h1>
    <Formik
      initialValues={{
      id:0,
      firstName:'',
      lastName:'',
      userName:'',
      Password:'',
      repeatPassword:'',
    }}
      validationSchema={AddUserSchema}
      onSubmit={values => {
      console.log(values)}}>
      {({errors, touched,}) => (
        <FForm>
          <Field name='id' />
          {errors.id && touched.id ? (<div>{errors.id}</div> ): null}
          <Field name='firstName' />
          {errors.firstName && touched.firstName ? (<div>{errors.firstName}</div> ): null}
          <Field name='lastName' />
          {errors.lastName && touched.lastName ? (<div>{errors.Lastname}</div> ): null}
          <Field name='userName' />
          {errors.userName && touched.userName ? (<div>{errors.userName}</div> ): null}
          <Field name='password' />
          {errors.password && touched.password ? (<div>{errors.password}</div> ): null}
          <Field name='repeatPassword' />
          {errors.repeatPassword && touched.repeatPassword ? (<div>{errors.repeatPassword}</div> ): null}
          <button type="submit">Create card</button>
        </FForm>
      )}
    </Formik>
  </div>
)