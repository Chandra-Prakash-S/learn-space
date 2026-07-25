import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { commentSchema } from "@/schemas/commentSchema";
import { useCommentPost } from "@/hooks/community/useCommentPost";

function CommentForm({ postId }) {
  const commentMutation = useCommentPost();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      text: "",
    },
  });

  const text = watch("text");

  const onSubmit = async (formData) => {
    try {
      await commentMutation.mutateAsync({
        postId,
        text: formData.text,
      });

      toast.success("Comment added successfully.");

      reset();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to add comment."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-5 space-y-2"
    >
      <div className="flex gap-3">
        <Input
          className="flex-1"
          placeholder="Write a comment..."
          {...register("text")}
        />

        <Button
          type="submit"
          disabled={commentMutation.isPending}
          className="min-w-24"
        >
          {commentMutation.isPending
            ? "Posting..."
            : "Post"}
        </Button>
      </div>

      {errors.text && (
        <p className="text-sm text-red-400">
          {errors.text.message}
        </p>
      )}

      <p className="text-xs text-slate-500">
        {text.length}/500
      </p>
    </form>
  );
}

export default CommentForm;