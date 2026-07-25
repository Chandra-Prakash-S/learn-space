import api from "@/lib/axios";

export const getLiveSessions = async () => {
  const { data } = await api.get("/live-sessions");
  return data;
};

export const getLiveSession = async (id) => {
  const { data } = await api.get(`/live-sessions/${id}`);
  return data;
};