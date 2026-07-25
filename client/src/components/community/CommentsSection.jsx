import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function CommentsSection({ post }) {
  return (
    <div className="mt-4 border-t border-slate-800 pt-4">
      <CommentList comments={post.comments} />

      <CommentForm postId={post._id} />
    </div>
  );
}

export default CommentsSection;