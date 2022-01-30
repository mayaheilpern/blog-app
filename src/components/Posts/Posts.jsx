import {getPosts} from "../../services/apiConfig";
import {useState, useEffect} from "react";
import "./posts.css";
import { useParams } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const {id} = useParams
  console.log(id)
  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts;
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
