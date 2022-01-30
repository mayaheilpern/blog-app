import {Routes, Route} from "react-router-dom";
import DisplayBlog from "./screens/DisplayBlog/DisplayBlog";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import SignUpUser from "./screens/SignUpUser/SignUp";
import User from "./screens/User/User";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisplayBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
