import {createUser} from "../../services/apiConfig";
import {useState} from "react";
import "./signUpUser.css";
import {useNavigate} from "react-router-dom";
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
    <div>
      
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="leftside"></div>
      <div className="rightside"></div>
        <label>user Name</label>
        <input
          name="userName"
          value={input.userName}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label>first Name</label>
        <input
          name="firstName"
          value={input.firstName}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label>last Name</label>
        <input
          name="lastName"
          value={input.lastName}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label>Email</label>
        <input
          name="email"
          value={input.email}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label>password</label>
        <input
          name="password"
          value={input.password}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <label>confirmPassword</label>
        <input
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpUser;
