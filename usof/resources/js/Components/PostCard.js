import RedirectController from "../Controllers/RedirectController";

export default function PostCard({ post }) {

    const openPostPage = () => {
        RedirectController.redirectTo(`/posts/${post.id}`);
    }

    return (
        <div key={post.id} style={{ border: '1px black solid', margin: '10px' }}>
            <div> Id: {post.id} </div>
            <div> Label: {post.label} </div>
            <div> Text: {post.text} </div>
            <button onClick={openPostPage}>Open post page</button>
        </div>
    )
}