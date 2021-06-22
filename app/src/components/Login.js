import React, { useContext } from "react";
import {UserContext} from "../App";

function Login(props) {
  const {setUser} = useContext(UserContext)

  return <div>Login Page
    <button onClick={()=>setUser({name:'Austin',isLoggedIn:true})}></button>
  </div>;
}

export default Login;




