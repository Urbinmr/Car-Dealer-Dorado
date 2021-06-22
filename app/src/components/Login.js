import React, { useContext } from "react";
import {UserContext} from "../App";
import {Button} from "@material-ui/core"

function Login(props) {
  const {setUser} = useContext(UserContext)

  return <div>Login Page
    <Button variant="contained" color="primary" onClick={()=>setUser({name:'Austin',isLoggedIn:true})}>Log In</Button>
  </div>;
}

export default Login;




