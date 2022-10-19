import React from "react";
import {getValuesLS} from "../../controllers/localStorageController";

export const AllCards = () => {
  const users = getValuesLS()

  console.log(users.toString())
  }
