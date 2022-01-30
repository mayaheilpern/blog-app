import { useState } from "react";
import './login.css'
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/apiConfig";

const defaultUser = {
  email: "",
  password: ""
}


const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState(defaultUser);
  
    const handleTextInput = (e) => {
      const {name, value} = e.target;
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await loginUser(input)
    console.log(res)
    navigate(`/${res.data.user._id}`)

  }

  return(
    <div className="fullForm">
      <Layout>
      <form onSubmit={handleSubmit} className="loginForm">
        <fieldset id="border">
          <legend id="legend"> Login</legend>
          <label>Email</label>
          <input 
          type="email" 
          onChange={handleTextInput} 
          name="email"
          value={input.email}
          className="Inputs"
          />
          <br />
          <label>Password</label>
          <input 
          type="password"
           onChange={handleTextInput}
          name="password"
          value={input.password}
          className="Inputs"
          />
        </fieldset>
        <button type="submit" id="button">Login</button>
      </form>
      </Layout>
    </div>
  )
};


export default Login;
