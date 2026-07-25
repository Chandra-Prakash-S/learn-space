import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toggleLike } from "@/services/community.service";

export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleLike,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}