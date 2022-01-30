import { useParams } from "react-router-dom";
// import Posts from "../../components/Posts/Posts";
import Layout from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { getUserPosts } from "../../services/apiConfig";


export default function User() {

    const [posts, setPosts] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const fetchPosts = () => {
            const allPosts = getUserPosts(id);
            setPosts(allPosts.data)
            console.log(allPosts)
        }
        fetchPosts()
    }, [id])
    console.log(posts)

    return( 
    <div> 
        <Layout>
            <div>
                {posts?.map((post) => {
                    return post?.posts.map((a) => {
                        return (
                            <div key={a._id}>
                                <h3>{`${post.username}`}</h3>
                                <p>{a.content}</p>
                            </div>
                        )
                    })
                })}
            </div>
        </Layout>
    </div> 
    );
}
