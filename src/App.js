import {Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import DisplayBlog from "./screens/DisplayBlog/DisplayBlog";
import Login from "./screens/Login/Login";
// import Home from "./screens/Home/Home";
import SignUpUser from "./screens/SignUpUser/SignUp";
import User from "./screens/User/User";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout ><h1>A new Blogger has Appeared</h1></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpUser  />} />
        <Route path="/user/:id/info" element={<User />} />
        <Route path="/displayall" element={<DisplayBlog />}/>
      </Routes>
    </div>
  );
}

export default App;