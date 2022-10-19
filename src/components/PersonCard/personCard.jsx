import {useParams} from "react-router-dom";
import React from "react";

// @desc    Show card
// @route   GET /
// @access  Public
export const PersonCard = (props) => {
  const { id } = useParams()
  const cardToShow = props.persons
    .find(item => item.id === Number(id))
  return (
    <div>
      <h2>Person card:</h2>
      <h3>{cardToShow.username}</h3>
      <label>{cardToShow.firstName}</label>
      <label>{cardToShow.lastName}</label>
      <label>{cardToShow.password}</label>
    </div>
  )
}