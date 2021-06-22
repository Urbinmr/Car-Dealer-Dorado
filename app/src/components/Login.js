import React, { useState, useContext } from "react";
import {UserContext} from "../App";
import {Button, Input, FormControl, FormHelperText, InputLabel} from "@material-ui/core"


function Login(props) {
  const {user, setUser} = useContext(UserContext)
  const [loginMessage, setLoginMessage] = useState('');
  const [formUserName, setFormUserName] = useState('');
 
  const formSubmit = () => {
    if(formUserName==='admin') {
      setUser({name:formUserName, isLoggedIn:true})
    } else {
      setUser({name:formUserName, isLoggedIn:false})
      setLoginMessage('Authentication failed')
    }
  }

  return (<>
  {!user.isLoggedIn && 
  <form>
    <FormControl>
      <InputLabel htmlFor="my-input">Username</InputLabel>
      <Input id="Username" aria-describedby="username" onChange={(e) => setFormUserName(e.target.value) } value={formUserName}/>
      <FormHelperText id="username"></FormHelperText>
    </FormControl>
    <FormControl>
      <InputLabel htmlFor="my-input">Password</InputLabel>
      <Input id="password" aria-describedby="my-helper-text" />
      <FormHelperText id="password"></FormHelperText>
    </FormControl>
    <Button variant="contained" color="primary" onClick={formSubmit}>Log In</Button>
    <div>{loginMessage}</div>
  </form>
}
{user.isLoggedIn && 
  <div>Welcome {user.name}!</div>
}

</>)

}

export default Login;




