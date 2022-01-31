import Layout from "../../Layout/Layout";
import './home.css'
const Home = () => {
  return (
    <Layout>
      <div className="homeDiv">
      <h1 id="welcome">A new Blogger has Appeared!</h1>
      <img src="https://media3.giphy.com/media/4c0sdgYcz9mpO/giphy.gif?cid=ecf05e472fxiu8209dp4r4i971767rvmxlore0kqh1q4090l&rid=giphy.gif&ct=g" alt="Welcome" id="helloThere" />
      </div>
    </Layout>
  );
};

export default Home;
