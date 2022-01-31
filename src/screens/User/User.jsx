import {useParams,useNavigate} from "react-router-dom";
// import Posts from "../../components/Posts/Posts";
import Layout from "../../Layout/Layout";
import {useEffect, useState} from "react";
import {apiDelete, getUserPosts} from "../../services/apiConfig";
import "./User.css";

export default function User() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const navigate=useNavigate();
  console.log(localStorage.getItem("id"));


  useEffect(() => {
    const fetchPosts = async () => {
      // console.log(id)
      const allPosts = await getUserPosts(`/${id}/posts`);
      setPosts(allPosts.data);
      console.log(allPosts.data);
    };
    fetchPosts();
  }, [id]);
  // console.log(posts)
  const handleEdit = (e) => {
    e.preventDefault();
    navigate("/user/addblog");
  }
  const handleDelete = (e,post) => {
    e.preventDefault();
    console.log(post);
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const Delete =async () => {
      let res = await apiDelete(id,token,post);
      console.log(res);
    }
    Delete();
    navigate("/displayall");
  }
  return (
    <div>
      <Layout id={id}>
        <div className="card-container2">
          {posts?.posts?.posts.map((post) => {
            return (
              <div key={post._id} className="post-cards">
                <h3>{`${posts.posts.userName}`}</h3>
                <p>{post.content}</p>
                <div className="buttonContainer">
                <button onClick={(e) => { handleEdit(e) }} className="blogButton">Edit</button>
                <button onClick={(e) => { handleDelete(e,post._id) }} className="blogButton">Delete</button>
                </div>
              </div>
            );
          })}
        </div>
        
      </Layout>
    </div>
  );
}
