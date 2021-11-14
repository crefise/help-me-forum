import React, { useState, useEffect } from "react";
import PostController from "../Controllers/PostController";
import CommentController from "../Controllers/CommentController";
import CommentsList from "../Components/CommentsList";
import RatingController from "../Controllers/RatingController";

export default function PostPage() {


    const [postData, setPostData] = useState({});
    const [commentsData, setcommentsData] = useState([]);
    const [loadPostData, setloadPostData] = useState(false);
    const [loadComments, setloadComments] = useState(false);
    const [updateComments, setupdateComments] = useState(0);
    const [rating, setRating] = useState(0);
    const [updateRating, setupdateRating] = useState(0);


    const createNewComment = async (event) => {
        event.preventDefault();

        CommentController.createNewComment({
            'text': document.querySelector("#formCommentCreateText").value,
            'post_id': location.pathname.split('/').pop()
        }).then(data => {
            console.log(data);
            if (data.status === true) {
                setupdateComments(!updateComments);
            }
        })
    }

    const createNewLike = async () => {
        RatingController.updateRating({
            'post_id': location.pathname.split('/').pop(),
            'type': 'like',
            'belong': 'post'
        }).then(data=>{
            console.log(data);
            if (data.status === true) {
                setupdateRating(!updateRating);
            }
        })
    }
    const createNewDislike = async () => {
        RatingController.updateRating({
            'post_id': location.pathname.split('/').pop(),
            'type': 'dislike',
            'belong': 'post'
        }).then(data=>{
            console.log(data);
            if (data.status === true) {
                setupdateRating(!updateRating);
            }
        })
    }

    // Download post info
    useEffect(() => {
        PostController.showCurrentPost({
            'id': location.pathname.split('/').pop()
        }).then(data => {
            console.log(data);

            if (data.status === true) {
                setPostData(data.post);
                setloadPostData(true);
            }

        })
    }, [])

    // Download comments
    useEffect(() => {
        CommentController.loadCurrentPostComments({
            'post_id': location.pathname.split('/').pop()
        }).then(data => {
            console.log(data);
            if (data.status === true) {
                setcommentsData(data.comments);
                setloadComments(true);
            }
        })
    }, [updateComments])

    useEffect(()=>{
        RatingController.getCalculatedRating({
            'post_id': location.pathname.split('/').pop()
        }).then(data=>{
            console.log(data);
            if (data.status === true) {
                setRating(data.rating)
            }

        })
    }, [updateRating])
    return (
        <>
            {loadPostData ||
                <>
                    <h1>Post data loading...</h1>
                </>
            }
            {loadPostData &&
                <>
                    <h1>Post data loaded!</h1>
                    <div style={{ border: '1px black solid', margin: '10px' }}>
                        <div> Label: {postData.label} </div>
                        <div> Text: {postData.text} </div>
                        <div> Post Id: {postData.post_id} </div>
                        <div> Created at: {postData.created_at} </div>
                        <div> Owner: {postData.user_name}[{postData.user_id}]</div>
                    </div>

                    <div style={{ border: '1px black solid', margin: '10px' }}>
                        <div>
                            <span>Rating: {rating} </span>
                            <button onClick={createNewLike}>Like</button>
                            <button onClick= {createNewDislike}>Dislike</button>
                        </div>
                    </div>
                </>
            }

            {loadComments ||
                <>
                    <h1>Comments data loading...</h1>
                </>
            }
            {loadComments &&
                <>
                    <h1>Comments data loaded</h1>
                    <form method="POST" onSubmit={createNewComment}>
                        <div style={{ border: '1px black solid', margin: '10px' }}>
                            <div>Create new comment</div>
                            <div>
                                <div >Text <input id='formCommentCreateText' required /></div>
                                <button>Create</button>
                            </div>
                        </div>
                    </form>

                    <CommentsList comments={commentsData} />
                </>
            }
        </>
    )
}