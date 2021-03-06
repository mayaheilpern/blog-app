import {Routes, Route} from "react-router-dom";
import DisplayBlog from "./screens/DisplayBlog/DisplayBlog";
import EditBlog from "./screens/EditBlog/EditBlog";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Logout from "./screens/Logout/Logout";
import SignUpUser from "./screens/SignUpUser/SignUp";
import User from "./screens/User/User";
import AddBlog from "./screens/AddBlog/AddBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/user/:id/info" element={<User />} />
        <Route path="/displayall" element={<DisplayBlog />}/>
        <Route path="/addblog" element={<AddBlog />} />          
        <Route path="/user/addblog" element={<AddBlog />} /> 
        <Route path="/user/editblog" element={<EditBlog/>}/>

      </Routes>
    </div>
  );
}

export default App;
