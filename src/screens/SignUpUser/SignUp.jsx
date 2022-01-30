import {createUser} from "../../services/apiConfig";
import {useState} from "react";
import "./signUpUser.css";
import {useNavigate} from "react-router-dom";
import Layout from "../../Layout/Layout";
const default_User = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpUser = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(default_User);

  const handleTextInput = (e) => {
    const {name, value} = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await createUser(input);
    navigate("/allblogs");
  };

  return (
<<<<<<< HEAD
    <div>
      <Layout>
      <form
=======
    <Layout>
      <form className="signUpForm"

>>>>>>> b627279efbfeff8cc4a4297ccc5c6386dde5db8a
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="leftside"></div>
      <div className="rightside"></div>
        <label id="signUpLabel">user Name</label>
        <input
          name="userName"
          value={input.userName}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label id="signUpLabel">first Name</label>
        <input
          name="firstName"
          value={input.firstName}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label id="signUpLabel">last Name</label>
        <input
          name="lastName"
          value={input.lastName}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label id="signUpLabel">Email</label>
        <input
          name="email"
          value={input.email}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label id="signUpLabel">password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label id="signUpLabel">confirmPassword</label>
        <input 
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <button>Submit</button>
      </form>
      </Layout>
<<<<<<< HEAD
    </div>
=======
>>>>>>> b627279efbfeff8cc4a4297ccc5c6386dde5db8a
  );
};

export default SignUpUser;
