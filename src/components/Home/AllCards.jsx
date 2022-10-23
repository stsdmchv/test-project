import React from "react";
import { getValuesLS } from "../../controllers/localStorageController";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from '../../styles.scss'

export const AllCards = () => {
  const users = getValuesLS().map(item => JSON.parse(item))

  return (
    <div>
      <h1>User cards</h1>
      <Button className={styles.AddButton} variant={"contained"} href={'/addNewUser'}>Add new user</Button>
      {users.map((user, index) => {
        return (
        <NavLink key={index + user.id} to={`/${user.id}`}>
            <div>
              <title className={styles.Card}>{user.username}</title>
              <title className={styles.Card}>{user.firstName}</title>
              <title className={styles.Card}>{user.lastName}</title>
            </div>
        </NavLink>
      )})}}
    </div>

  )
}