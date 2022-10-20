import React from "react";
import {getValuesLS} from "../../controllers/localStorageController";
import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const AllCards = () => {
  const users = getValuesLS().map(item => JSON.parse(item))

  return (
    users.map((user, index) => (
      <NavLink to={`/${user.id}`}>
        <Card key={index}>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>{user.firstName} {user.lastName}</Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    ))
  )
}
