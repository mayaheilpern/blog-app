import {NavLink} from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/displayall">All Blogs</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/logout">Logout</NavLink>
      <NavLink to="/addblog">Add Blog</NavLink>
      <NavLink to="/userinfo">User Information</NavLink>
    </div>
  );
};

export default Navbar;
