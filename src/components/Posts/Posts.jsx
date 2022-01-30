import {getPosts} from "../../services/apiConfig";
import {useState, useEffect} from "react";
import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

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
            return (
              <div key={a._id} className="post-cards">
                <h3>{`${post.userName}`}</h3>
                <p>{a.content}</p>
              </div>
            );
          });
        }
      })}
    </div>
  );
};

export default Posts;
