import RedirectController from "../Controllers/RedirectController";

export default function CommentCard({ comment }) {


    return (
        <div key={comment.id} style={{ border: '1px black solid', margin: '10px' }}>
            <div>
                Owner id: {comment.user_id}
            </div>
            <div>
                Text: {comment.text}
            </div>
            <div>
                date {comment.created_at}
            </div>

            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
    )
}