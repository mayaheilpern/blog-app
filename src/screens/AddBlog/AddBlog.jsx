import {useState} from "react";
import {createPost} from "../../services/apiConfig";
import {useNavigate} from "react-router-dom";
import "./addBlog.css";
import Layout from "../../Layout/Layout";

const defaultBlog = {
  content: "",
};

const AddBlog = () => {
  const [blog, setBlog] = useState(defaultBlog);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleTextInput = (e) => {
    const {name, value} = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(id, blog, token);
    navigate("/displayall");
  };

  return (
    <Layout>
      <div className="form-container">
        <h1 className="formH1">Create a new blog post</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <textarea
            className="form"
            name="content"
            value={blog.content}
            rows="20"
            cols="75"
            onChange={(e) => {
              handleTextInput(e);
            }}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddBlog;
