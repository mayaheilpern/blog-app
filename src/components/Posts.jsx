import {getPosts} from "../../services/posts";
import {useState, useEffect} from "react";

const Posts = () => {
  const [posts, setPosts] = useState[{}];

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  const postInfo = posts.map();

  return <div></div>;
};

export default Posts;
