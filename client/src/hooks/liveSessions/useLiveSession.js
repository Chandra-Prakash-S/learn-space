import { useQuery } from "@tanstack/react-query";

import { getLiveSession } from "@/services/liveSession.service";

export function useLiveSession(id) {
  return useQuery({
    queryKey: ["liveSession", id],
    queryFn: () => getLiveSession(id),
    enabled: !!id,
  });
}