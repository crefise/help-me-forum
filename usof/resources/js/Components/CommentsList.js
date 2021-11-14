import CommentCard from "./CommentCard";
export default function CommentsList({ comments }) {
    return (
        <>
            {comments.map((comment) => {
                return (
                    <CommentCard key={comment.id} comment={comment} />
                )
            })}
        </>
    )
}