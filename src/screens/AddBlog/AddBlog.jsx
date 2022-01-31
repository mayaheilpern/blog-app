import {useState} from "react";
import {createPost} from "../../services/apiConfig";
import {useParams} from "react-router-dom";
import "./addBlog.css";
import Layout from "../../Layout/Layout";

const defaultBlog = {
  content: "",
};

const AddBlog = () => {
  const [blog, setBlog] = useState(defaultBlog);
  const {id} = useParams();

  const handleTextInput = (e) => {
    const {name, value} = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await createPost(id);
  };

  return (
    <Layout>
      <div className="form-container">
        <h1 className="formH1">Create a new blog post</h1>
        <form>
          <textarea className="form" rows="20" cols="75"></textarea>
        </form>
      </div>
    </Layout>
  );
};

export default AddBlog;
