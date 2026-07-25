import api from "@/lib/axios";

export const getPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

export const createPost = async (postData) => {
  const { data } = await api.post("/posts", postData);
  return data;
};

export const toggleLike = async (postId) => {
  const { data } = await api.patch(`/posts/${postId}/like`);
  return data;
};

export const addComment = async ({ postId, text }) => {
  const { data } = await api.post(
    `/posts/${postId}/comments`,
    { text }
  );

  return data;
};