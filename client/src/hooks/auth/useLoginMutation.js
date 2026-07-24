import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/services/auth.service";

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["currentUser"],
      });
    },
  });
}