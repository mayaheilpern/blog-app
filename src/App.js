import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import DisplayBlog from "./screens/DisplayBlog/DisplayBlog";
import Login from "./screens/Login/Login";
// import Home from "./screens/Home/Home";
import SignUpUser from "./screens/SignUpUser/SignUp";
import User from "./screens/User/User";
import AddBlog from "./screens/AddBlog/AddBlog";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = (await user) ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <h1>A new Blogger has Appeared</h1>
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpUser setUser={setUser} />} />
        <Route path="/user/:id/info" element={<User user={user} />} />
        <Route path="/displayall" element={<DisplayBlog />} />
        <Route path="/addblog" element={<AddBlog />} />
      </Routes>
    </div>
  );
}

export default App;
