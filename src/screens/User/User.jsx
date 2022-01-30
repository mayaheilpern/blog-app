import { useParams } from "react-router-dom";
// import Posts from "../../components/Posts/Posts";
import { UserLayout } from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { getUserPosts } from "../../services/apiConfig";


export default function User() {

    const [posts, setPosts] = useState([])
    const { id } = useParams()
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
        <UserLayout id={id}>
            <div>
                {posts?.posts?.posts.map((post) => {
                        return (
                            <div key={post._id}>
                                <h3>{`${posts.posts.userName}`}</h3>
                                <p>{post.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </UserLayout>
    </div> 
    );
}
