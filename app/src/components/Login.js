import React, { useContext } from "react";
import {UserContext} from "../App";

function Login(props) {
  const userContext = useContext(UserContext)

  return <div>Login Page
    <button onClick={()=>userContext.setUser({name:'Austin',isLoggedIn:true})}></button>
  </div>;
}

export default Login;




