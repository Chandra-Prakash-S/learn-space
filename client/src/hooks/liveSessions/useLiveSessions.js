import { useQuery } from "@tanstack/react-query";

import { getLiveSessions } from "@/services/liveSession.service";

export function useLiveSessions() {
  return useQuery({
    queryKey: ["liveSessions"],
    queryFn: getLiveSessions,
  });
}