import {getPosts} from "../../services/apiConfig";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

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
    <div>
      {posts.map((post) => {
        return;
        <h3>{post.userName}</h3>;
        if (post?.posts.length > 1) {
          return post?.posts.map((a) => {
            console.log(a);
            return (
              <div key={a._id}>
                {/* <h3>{`${post.firstName} ${post.lastName}`}</h3> */}
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
