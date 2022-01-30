import {useState, useEffect} from "react";
import Layout from "../../Layout/Layout";
import Posts from "../../components/Posts/Posts";

const Displayblog = () => {
  const [data, setData] = useState({});

  return (
    <Layout>
      <div>
        <Posts />
      </div>
    </Layout>
  );
};

export default Displayblog;
