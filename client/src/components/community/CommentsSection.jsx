import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function CommentsSection({ post }) {
  return (
    <div className="mt-5 border-t border-slate-800 pt-5">
      <CommentList comments={post.comments} />

      <CommentForm postId={post._id} />
    </div>
  );
}

export default CommentsSection;