import React from "react";

//@desc   Get values from localStorage
export const getValuesLS = (key = 0) => {
  if (key === 0) {
    const values = [],
      keys = Object.keys(localStorage)
    let iterator = keys.length

    while (iterator--) {
      values.push(localStorage.getItem(keys[iterator]))
    }
    return values
  }

  return localStorage.getItem(key)
}

//@desc   Put values from localStorage
export const putValuesLS = (id, values) => {
  localStorage.setItem(id, JSON.stringify(values))
}

export const deleteCard = id => {
  localStorage.removeItem(id)
}