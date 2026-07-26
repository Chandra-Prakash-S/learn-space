import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { toast } from "sonner";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLikePost } from "@/hooks/community/useLikePost";

import CommentsSection from "./CommentsSection";

function PostActions({ post }) {
  const [showComments, setShowComments] = useState(false);

  const { data } = useCurrentUser();
  const likeMutation = useLikePost();

  const currentUserId = data?.user?._id;

  const hasLiked = post.likes.some(
    (id) => id === currentUserId
  );

  const handleLike = async () => {
    try {
      await likeMutation.mutateAsync(post._id);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update like."
      );
    }
  };

  return (
    <>
      <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4 sm:justify-start sm:gap-6">
        <button
          type="button"
          onClick={handleLike}
          disabled={likeMutation.isPending}
          className="flex items-center gap-2 text-slate-400 transition-colors hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              hasLiked
                ? "fill-red-500 text-red-500"
                : ""
            }`}
          />

          <span>{post.likes.length}</span>
        </button>

        <button
          type="button"
          onClick={() =>
            setShowComments((prev) => !prev)
          }
          className="flex items-center gap-2 text-slate-400 transition-colors hover:text-indigo-400"
        >
          <MessageCircle className="h-5 w-5" />

          <span>{post.comments.length}</span>
        </button>
      </div>

      {showComments && (
        <CommentsSection post={post} />
      )}
    </>
  );
}

export default PostActions;