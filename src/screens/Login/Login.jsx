// import { useState } from "react";
import './login.css'
import Layout from "../../Layout/Layout";


const Login = () => {
  return(
    <div>
      <Layout>
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
      </Layout>
    </div>
  )
};

export default Login;
