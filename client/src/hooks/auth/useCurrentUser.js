import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/auth.service";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 10,
  });
}