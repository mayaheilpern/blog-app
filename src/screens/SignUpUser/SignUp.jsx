import {createUser} from "../../services/apiConfig";
import {useState} from "react";
import "../Login/login.css";
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

      <div className="fullForm">
    <Layout>
       {/* <div className="fullForm"></div> */}
      <form className="loginForm"

        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <fieldset id="border">
        <legend id="legend">Signup</legend>
        <br />
        <label>Username</label>
        <input className="Inputs"
          name="userName"
          value={input.userName}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <br/>
        <label >First Name</label>
        <input className="Inputs"
          name="firstName"
          value={input.firstName}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <br />
        <label >Last Name</label>
        <input className="Inputs"
          name="lastName"
          value={input.lastName}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <br />
        <label>Email</label>
        <input className="Inputs"
          name="email"
          value={input.email}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <br />
        <label >Password</label>
        <input className="Inputs"
          type="password"
          name="password"
          value={input.password}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <br />
        <label >Confirm Password</label>
        <input className="Inputs"
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={(e) => {
            handleTextInput(e);
          }}
        ></input>
        <br />
        </fieldset>
        <button id="button">Submit</button>
      </form>
      </Layout>
      </div>

  );
};

export default SignUpUser;
