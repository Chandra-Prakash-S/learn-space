import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

import PostActions from "./PostActions";

function PostCard({ post }) {
  const initials =
    post.author?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div className="min-w-0">
          <h3 className="truncate font-semibold text-white">
            {post.author?.name}
          </h3>

          <p className="text-xs text-slate-400">
            {formatDistanceToNow(
              new Date(post.createdAt),
              {
                addSuffix: true,
              }
            )}
          </p>
        </div>
      </div>

      <p className="break-words whitespace-pre-wrap text-slate-200">
        {post.content}
      </p>

      <PostActions post={post} />
    </div>
  );
}

export default PostCard;