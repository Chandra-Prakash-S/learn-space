import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";

const getUpcomingLiveSessions = async () => {
  const { data } = await axios.get("/live-sessions/upcoming");
  return data;
};

export function useUpcomingLiveSessions() {
  return useQuery({
    queryKey: ["upcoming-live-sessions"],
    queryFn: getUpcomingLiveSessions,
  });
}