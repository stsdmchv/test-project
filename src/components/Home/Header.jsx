import React from "react";
import {Button} from "react-bootstrap";
import './Header.scss'

export const Header = () => (
  <div>
    <h1>User cards</h1>
    <Button className="button" variant="primary" href={'/addNewUser'}>Add new user</Button>{' '}
  </div>
)