import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "@/services/auth.service";

export function useRegisterMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["currentUser"],
      });
    },
  });
}