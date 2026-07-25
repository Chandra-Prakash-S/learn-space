import { useQuery } from "@tanstack/react-query";

import { getPosts } from "@/services/community.service";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 1000 * 60 * 5,
  });
}