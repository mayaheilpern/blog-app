import {NavLink} from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home Page</NavLink>
      {/* <NavLink to="/displayall">All Blogs</NavLink> */}
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/logout">Logout</NavLink>
      <NavLink to="/addblog">Add Blog</NavLink>
      <NavLink to="/user/:id/info">User Information</NavLink>
    </div>
  );
};

export const UserNavbar = (props) => {
  const id = props.id
  return (
    <div className="navbar">
      <NavLink to="/">Home Page</NavLink>
      {/* <NavLink to="/displayall">All Blogs</NavLink> */}
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/logout">Logout</NavLink>
      <NavLink to="/addblog">Add Blog</NavLink>
      <NavLink to="/user/:id/info">{id}</NavLink>
    </div>
  );
};

// export default Navbar;
