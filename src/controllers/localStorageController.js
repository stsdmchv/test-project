import React from "react";

//@desc   Get values from localStorage
export const getValuesLS = () => {
  const values = [],
    keys = Object.keys(localStorage)
  let iterator = keys.length

  while (iterator--){
    values.push(localStorage.getItem(keys[iterator]))
  }
  return values
}

//@desc   Put values from localStorage
export const putValuesLS = (id, values) => {
  localStorage.setItem(id, JSON.stringify(values))
}