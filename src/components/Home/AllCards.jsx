import React, {useState} from "react";
import {getValuesLS} from "../../controllers/localStorageController";
import {NavLink} from "react-router-dom";
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
      <div style={{display: "flex", justifyContent: 'space-around'}}>
        <NavLink className={styles.AddButton} variant={"contained"} to={'/addNewUser'}>
          <Button type="button">Add new card</Button>
        </NavLink>
        <TextField id="outlined-basic" label="Search by username" variant="standard" onChange={inputHandler}/>
      </div>
      <div style={{display: "flex", justifyContent: 'space-around', flexWrap:'wrap',}}>
        {search === '' ?
          users.map((user, index) => {
            return (
              <NavLink key={index + user.id} to={`/${user.id}`} style={{width:'35%', marginTop:'20px'}}>
                <Card variant="outlined" sx={{minWidth: 275}}>
                  <CardContent>
                    <Typography style={{direction:'rtl'}} sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                      {user.id}
                    </Typography>
                    <Typography style={{textAlign:'center'}} variant="h5" component="div">
                      {user.username}
                    </Typography>
                    <div style={{display:'flex', justifyContent:'center'}}>
                      <Typography sx={{mb: 1.5}} color="text.secondary">
                        {user.firstName}
                      </Typography>
                      <Typography style={{marginLeft:'15px'}} sx={{mb: 1.5}} color="text.secondary">
                        {user.lastName}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            )
          }) :
          <List props={{search, users}}/>}
      </div>
    </div>

  )
}