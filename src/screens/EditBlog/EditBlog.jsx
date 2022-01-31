import React from 'react';
import { useState } from 'react/cjs/react.development';
import { apiPut } from "../../services/apiConfig";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
const default_Edit = {
  content: "",
};
export default function EditBlog() {
  const [blog, setBlog] = useState(default_Edit);
  const navigate = useNavigate();

  const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const postid = localStorage.getItem("pid");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const Edit = async () => {
       await apiPut(id,postid,token,blog);
      navigate(`/user/${id}/info`);
    }
    Edit();
   }
    const handleTextInput = (e) => {
      const {name, value} = e.target;
      setBlog((prevBlog) => ({
        ...prevBlog,
        [name]: value,
      }));
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
            <br />
            <button type="submit" id="blogButton">Submit</button>
          </form>
        </div>
      </Layout>
    );
};
