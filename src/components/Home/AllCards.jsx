import React from "react";
import {getValuesLS} from "../../controllers/localStorageController";
import {NavLink} from "react-router-dom";
import {FirstName, LastName, Username} from "../PersonCard/CreateCard/fields/Fields";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import schema from "../PersonCard/CreateCard/fields/schema.jsx";

export const AllCards = () => {
  const users = getValuesLS().map(item => JSON.parse(item))

  const methods = useForm({resolver: yupResolver(schema)})

  return (
    users.map((user,index) => (
        <NavLink to={`/${user.id}`}>
          <FormProvider key={index.toString()} value={index} {...methods}>
            <form>
              <Username userName={user.username}/>
              <br/>
              <FirstName firstName={user.firstName}/>
              <br/>
              <LastName lastName={user.lastName}/>
              <br/>
            </form>
          </FormProvider>
        </NavLink>
    ))
  )
}
