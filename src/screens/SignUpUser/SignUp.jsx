import {apiPost} from "../../../src/services/apiConfig.js"
import { useState } from "react"

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
  const [firstName, setFirstName]=useState("");
  const [lastName, setLastName]=useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleTextInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }
  const handleInput = async (e) => {
    e.preventDefault();
    const fields = input;
    const res = await apiPost("/", fields);
    console.log(res);
    setInput(default_User);
  }
  return <form onSubmit={handleInput}>
    <label>user Name</label>
    <input name={"userName"} value={userName} onChange={e => { handleTextInput }}></input>
    <label>first Name</label>
      <input name={"firstName"} value={firstName} onChange={e => { handleTextInput }}></input>
    <label>last Name</label>
      <input  name={"lastName"} value={lastName} onChange={e => { handleTextInput }}></input>
    <label>Email</label>
      <input  name={"email"} value={email} onChange={e => { handleTextInput }}></input>
    <label>password</label>
      <input name={"password"} value={password} onChange={e => { handleTextInput }}></input>
    <label>confirmPassword</label>
      <input  name={"confirmPassword"} onChange={e => { handleTextInput }}></input>
  </form>;
};

export default SignUpUser;
