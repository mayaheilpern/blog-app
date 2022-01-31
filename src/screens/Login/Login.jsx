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
  const [id,setId]=useState();
  
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
    console.log(res.data.token);
    localStorage.setItem("token", res.data.token);
    setId(res.data.user._id);
    localStorage.setItem("id", res.data.user._id);
    navigate(`/user/${res.data.user._id}/info`)

  }

  return(
    <div className="fullForm">
      <Layout id={id}>
      <form onSubmit={(e) => {handleSubmit(e)}} className="loginForm">
        <fieldset id="border">
          <legend id="legend"> Login</legend>
          <label>Email</label>
          <input 
          type="text" 
          onChange={(e) => {handleTextInput(e)}} 
          name="email"
          value={input.email}
          className="Inputs"
          />
          <br />
          <label>Password</label>
          <input 
          type="password"
           onChange={(e) => {handleTextInput(e)}}
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
