import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addComment } from "@/services/community.service";

export function useCommentPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addComment,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}