import {apiPost} from "../../../src/services/apiConfig.js"
import { useState } from "react"
import "./signUpUser.css"
const default_User = {
  userName: "",
  firstName: "",
  lastName:"",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpUser = () => {
  const [input, setInput] = useState(default_User);


  const handleTextInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = input;
    const res = await apiPost("/", fields);
    console.log(res);
    setInput(default_User);
  }
  return <div>
    <div className="leftside"></div>
    <div className="rightside"></div>
    <form onSubmit={handleSubmit}>
    <label>user Name</label>
    <input name="userName" value={input.userName} onChange={e => { handleTextInput() }}></input>
    <label>first Name</label>
      <input name="firstName" value={input.firstName} onChange={e => { handleTextInput() }}></input>
    <label>last Name</label>
      <input  name="lastName" value={input.lastName} onChange={e => { handleTextInput() }}></input>
    <label>Email</label>
      <input  name="email" value={input.email} onChange={e => { handleTextInput() }}></input>
    <label>password</label>
      <input name="password" value={input.password} onChange={e => { handleTextInput() }}></input>
    <label>confirmPassword</label>
    <input name="confirmPassword" value={input.confirmPassword} onChange={e => { handleTextInput() }}></input>
  </form>
  </div>;
};

export default SignUpUser;
