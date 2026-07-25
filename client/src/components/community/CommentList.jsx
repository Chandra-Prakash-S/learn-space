import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function CommentList({ comments }) {
  if (!comments.length) {
    return (
      <p className="py-2 text-sm text-slate-500">
        Be the first to comment.
      </p>
    );
  }

  return (
    <div className="mt-4 space-y-4">
      {comments.map((comment) => {
        const initials =
          comment.user?.name
            ?.split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase() || "U";

        return (
          <div
            key={comment._id}
            className="flex gap-3"
          >
            <Avatar className="h-8 w-8">
              <AvatarFallback>
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="rounded-lg bg-slate-800 p-3 flex-1">
              <p className="font-medium text-sm text-white">
                {comment.user?.name}
              </p>

              <p className="mt-1 text-sm text-slate-300">
                {comment.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;