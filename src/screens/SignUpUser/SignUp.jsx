const SignUpUser = () => {
  const default_User ={
    userName: "",
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [input, setInput] = useState(default_User);
  
  const handleTextInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }
  const handleInput = (e) => {
    e.preventDefault();
    const fields = input;
    const res = await apiPost("/", { fields } );
    console.log(res);
    setInput(default_User);
    // navigate("/characters");
  }
  return <form onSubmit={props.handleInput}>
    <label>user Name</label>
      <input type={string} value={userName} onChange={props.handleTextInput}></input>
    <label>first Name</label>
      <input type={string} value={firtName}></input>
    <label>last Name</label>
      <input type={string} value={lastName}></input>
    <label>Email</label>
      <input type={email} value={email}></input>
    <label>password</label>
      <input type={string} value={password}></input>
    <label>confirmPassword</label>
      <input type={string} value={confirmPassword}></input>
  </form>;
};

export default SignUpUser;
