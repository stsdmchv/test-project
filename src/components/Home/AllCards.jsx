import React, {useState} from "react";
import { getValuesLS } from "../../controllers/localStorageController";
import { NavLink } from "react-router-dom";
import {Button, Card, CardContent, TextField, Typography} from "@material-ui/core";
import styles from '../../styles.scss'
import List from "./List";

export const AllCards = () => {
  const users = getValuesLS().map(item => JSON.parse(item))

  const [search, setSearch] = useState('')
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  }

  return (
    <div>
      <h1>User cards</h1>
      <Button className={styles.AddButton} variant={"contained"} href={'/addNewUser'}>Add new user</Button>
      <TextField id="outlined-basic" label="Search by username" variant="standard" onChange={inputHandler}/>
      { search === '' ?
        users.map((user, index) => {
        return (
        <NavLink key={index + user.id} to={`/${user.id}`}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{user.id}</Typography>
              <Typography variant="h5" component="div">{user.username}</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">{user.firstName}</Typography>
              <Typography variant="body2">{user.lastName}</Typography>
            </CardContent>
          </Card>
        </NavLink>
      )}) :
      <List props={{search, users}} /> }
    </div>

  )
}