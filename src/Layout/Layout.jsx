import {Navbar, UserNavbar} from "../components/Navbar/Navbar";
import "./layout.css";

export const Layout = (props) => {
  const id = props.id
  return (
    <div className="page-container">
      <Navbar className="nav-container" id={id}/>
      <div>{props.children}</div>
    </div>
  );
};


export const UserLayout = (props) => {
  const id = props.id
  return (
    <div className="page-container">
      <UserNavbar className="nav-container" id={id} />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
