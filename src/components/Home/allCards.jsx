import React from "react";


export const AllCards = (props) => {
  const persons = props.persons
  console.log(persons.id)
  const cards = persons.map(person => {
    <div>${person.id}</div>
    console.log(person.id)
  })
  return {cards}
  }
