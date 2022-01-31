import {getPosts} from "../../services/apiConfig";
import {useState, useEffect} from "react";
import "./posts.css";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const {id} = useParams
  // console.log();
  useEffect(() => {
    const token=localStorage.getItem("token");
    const fetchPosts = async () => {
      const allPosts = await getPosts(token);
      setPosts(allPosts.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="card-container">
      {posts.map((post) => {
        if (post?.posts.length > 0) {
          return post?.posts.map((a) => {
            if (id !== a._id) { 
            return (
              <div key={a._id} className="post-cards">
                <h3>{`${post.userName}`}</h3>
                <p>{a.content}</p>
              </div>
            )} else {
              return <h2>No Posts</h2>
            }
          });
        
        }
      })}
      </div>
  );
};

export default Posts;
