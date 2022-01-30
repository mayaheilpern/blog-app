import Navbar from "../components/Navbar/Navbar";
import "./layout.css";

const Layout = (props) => {
  return (
    <div className="page-container">
      <Navbar className="nav-container" />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
