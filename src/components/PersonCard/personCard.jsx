import React from "react";
import {Button, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";
import './personCard.scss';

// @desc    Show card
// @route   GET /
// @access  Public
export const PersonCard = (props) => {
  const { id } = useParams()
  const cardToShow = props.persons
    .find(item => item.id === Number(id))

  return (
    <Form>
      <Form.Label><h2>{cardToShow.username}</h2></Form.Label>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type="firstName" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="lastName" placeholder="Your surname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}