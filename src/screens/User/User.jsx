import { useParams } from "react-router-dom";
// import Posts from "../../components/Posts/Posts";
import Layout from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { getUserPosts } from "../../services/apiConfig";
import './User.css'


export default function User() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  console.log(localStorage.getItem("id"));
    useEffect(() => {
        const fetchPosts = async () => {
            // console.log(id)
            const allPosts = await getUserPosts(`/${id}/posts`);
            setPosts(allPosts.data)
            console.log(allPosts.data)
        }
        fetchPosts()
    }, [id])
    // console.log(posts)

    return( 
    <div> 
        <Layout id={id}>
            <div className="card-container">
                {posts?.posts?.posts.map((post) => {
                        return (
                            <div key={post._id} className="post-cards">
                                <h3>{`${posts.posts.userName}`}</h3>
                                <p>{post.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    </div> 
    );
}
