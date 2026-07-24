import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "@/services/auth.service";

export function useLogoutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["currentUser"],
      });
    },
  });
}