import {Routes, Route} from "react-router-dom";
import DisplayBlog from "./screens/DisplayBlog/DisplayBlog";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import SignUp from "./screens/SIgnup/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/:id" element={<DisplayBlog />} />
      </Routes>
    </div>
  );
}

export default App;
