import Navbar from "../components/Navbar/Navbar";
import "./layout.css";

const Layout = (props) => {
  const id = props.id
  return (
    <div className="page-container">
      <Navbar className="nav-container" id={id}/>
      <div>{props.children}</div>
    </div>
  );
};


export default Layout;
