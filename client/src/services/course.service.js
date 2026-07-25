import api from "@/lib/axios";

export const getCourses = async () => {
  const { data } = await api.get("/courses");
  return data;
};

export const getCourse = async (courseId) => {
  const { data } = await api.get(`/courses/${courseId}`);
  return data;
};