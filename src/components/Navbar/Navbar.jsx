import {NavLink,useNavigate} from "react-router-dom";
import "./navbar.css";
const Navbar = (props) => {
  
  let navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/");
  }
  return (
    <div className="navbar">
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/displayall">All Blogs</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/" onClick={(e) => { handleLogout(e) }}>Logout</NavLink>
      <NavLink to="/addblog">Add Blog</NavLink>
      <NavLink to={`/user/${localStorage.getItem("id")}/info`}>User Information</NavLink>
    </div>
  );
};



export default Navbar;
