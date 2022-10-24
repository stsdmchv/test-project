import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

function List(props) {
  const users = props.props.users;
  const search = props.props.search;
  const filteredData = users.filter((el) => {
    if (search === '') {
      return el;
    }
    else {
      return el.username.toLowerCase().includes(search)
    }
  })
  return (
    <ul>
      {filteredData.map((user, index) => (
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
      ))}
    </ul>
  )
}

export default List