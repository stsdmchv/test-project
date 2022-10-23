import React from "react";
import {getValuesLS} from "../../controllers/localStorageController";
import {NavLink} from "react-router-dom";
import {FirstName, LastName, Username} from "../PersonCard/CreateCard/fields/Fields";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import schema from "../PersonCard/CreateCard/fields/schema.jsx";
import {Button} from "@material-ui/core";
import styles from '../../styles.scss'

export const AllCards = () => {
  const users = getValuesLS().map(item => JSON.parse(item))
  const methods = useForm({resolver: yupResolver(schema)})

  return (
    <div>
      <h1>User cards</h1>
      <Button className={styles.AddButton} variant={"contained"} href={'/addNewUser'}>Add new user</Button>
      {users.map((user, index) => (
        <NavLink key={index + user.id} to={`/${user.id}`}>
          <FormProvider value={index} {...methods}>
            <form>
              <Username userName={user.username}/>
              <FirstName firstName={user.firstName}/>
              <LastName lastName={user.lastName}/>
            </form>
          </FormProvider>
        </NavLink>
      ))}
    </div>

  )
}
