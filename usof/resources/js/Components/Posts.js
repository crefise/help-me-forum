import UserController from "../Controllers/UserController";
import PostCard from "./PostCard";
export default function Posts({posts}) {

    return (
        <>
            {posts.map((post) => {
                return (
                    <PostCard key={post.id} post={post}/>
                )
            })}
        </>
    )
}