import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useCreatePost } from "@/hooks/community/useCreatePost";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { postSchema } from "@/schemas/postSchema";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function CreatePostCard() {
  const { data } = useCurrentUser();
  const createPostMutation = useCreatePost();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      content: "",
    },
  });

  const content = watch("content");

  const user = data?.user;

  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U";

  const onSubmit = async (formData) => {
    try {
      await createPostMutation.mutateAsync(formData);

      toast.success("Post created successfully!");

      reset();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to create post."
      );
    }
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <Textarea
            rows={4}
            placeholder={`What's on your mind, ${user?.name}?`}
            {...register("content")}
            className="resize-none border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
          />
        </div>

        {errors.content && (
          <p className="text-sm text-red-400">
            {errors.content.message}
          </p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span
            className={`text-sm ${
              content.length >= 1000
                ? "text-red-500"
                : content.length > 900
                ? "text-yellow-400"
                : "text-slate-400"
            }`}
          >
            {content.length}/1000
          </span>

          <Button
            type="submit"
            disabled={createPostMutation.isPending}
            className="w-full bg-indigo-600 hover:bg-indigo-500 sm:min-w-32 sm:w-auto"
          >
            {createPostMutation.isPending
              ? "Posting..."
              : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostCard;