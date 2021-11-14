import React, { useEffect, useState } from "react";

//Import controllers
import PostController from "../Controllers/PostController";

//Import components
import Posts from "../Components/Posts";


export default function PostsPage() {



    /*
        const showCurrentUser = async () => {
            UserController.showCurrentUser().then(data => {
                if (DebugController.debug === true) {
                    console.log("Took from server:")
                    console.log(data);
                }
                if (data.status === true) {
                    dataUserProfieObject = Object.assign({}, data.user);
                    loadUserDataStateFunction(true);
                }
            })
        }
    
        showCurrentUser();
    
    
        const [loadUserDataState, loadUserDataStateFunction] = useState(false);
    */

    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState([0]);

    const createNewPost = async (event) => {
        event.preventDefault();

        PostController.createNewPost({
            'label': document.querySelector("#formPostsCreateLabel").value,
            'text': document.querySelector("#formPostsCreateText").value,
        }).then(data => {
            console.log(data);
            if (data.status === true) {
                setUpdate(!update);
            }

        })


    }

    useEffect(() => {
        PostController.showAllPosts().then(data => {
            console.log(data);
            setPosts(data.posts.slice());
        })
    }, [update]);

    return (
        <>
            <h1>Welcome to posts</h1>
            <form method="POST" onSubmit={createNewPost}>
                <div style={{ border: "1px black solid", padding: '10px', margin: '10px' }}>
                    <pre>
                        <div>Create new post</div>
                        <div>
                            <span>Input post label: <input id='formPostsCreateLabel' required /></span>
                        </div>
                        <div>
                            <span>Input post text:  <input id='formPostsCreateText' required /></span>
                        </div>
                        <div>
                            <button>Create new post</button>
                        </div>
                    </pre>
                </div>
            </form>

            <Posts posts={posts} />
        </>
    );
}