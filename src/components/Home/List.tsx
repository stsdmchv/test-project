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
    <div style={{display: "flex", justifyContent: 'space-around', flexWrap:'wrap'}}>
      {filteredData.map((user, index) => (
        <NavLink key={index + user.id} to={`/${user.id}`} style={{width:'100%', marginTop:'20px'}}>
          <Card variant="outlined" sx={{minWidth: 275}}>
            <CardContent>
              <Typography style={{direction:'rtl'}} sx={{fontSize: 14}} color="text.secondary" gutterBottom>{user.id}</Typography>
              <Typography style={{textAlign:'center'}} variant="h5" component="div">{user.username}</Typography>
              <div style={{display:'flex', justifyContent:'center'}}>
                <Typography sx={{mb: 1.5}} color="text.secondary">{user.firstName}</Typography>
                <Typography style={{marginLeft:'15px'}} sx={{mb: 1.5}} color="text.secondary">{user.lastName}</Typography>
              </div>
            </CardContent>
          </Card>
        </NavLink>
      ))}
    </div>

  )
}

export default List