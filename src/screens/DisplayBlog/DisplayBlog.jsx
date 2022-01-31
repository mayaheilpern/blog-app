// import {useState} from "react";
import Layout from "../../Layout/Layout";
import Posts from "../../components/Posts/Posts";

export const DisplayBlog = () => {
  // const [data, setData] = useState({});
  return (
    <Layout>
      <div>
        <Posts />
      </div>
    </Layout>
  );
};


export default DisplayBlog;
