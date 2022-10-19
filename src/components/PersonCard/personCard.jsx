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
      <h2>Person card - {cardToShow.username}</h2>
      <label>Username</label>
      <input value={cardToShow.username}/>

      <label>First name</label>
      <input value={cardToShow.firstName}/>

      <label>Last name</label>
      <input value={cardToShow.lastName}/>

      <label>Password</label>
      <input value={cardToShow.password}/>
    </div>
  )
}