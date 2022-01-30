import { useState } from "react";
import './login.css'


const Login = () => {
  return(
    <div>
      <form>
        <fieldset>
          <legend> Login</legend>
          <label>Username</label>
          <input type="text" />
          <br />
          <label>Password</label>
          <input type="password" />
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </div>
  )
};

export default Login;
