import api from "@/lib/axios";

export const getCourses = async () => {
  const { data } = await api.get("/courses");
  return data;
};

export const getCourse = async (courseId) => {
  const { data } = await api.get(`/courses/${courseId}`);
  return data;
};

export const createCourse = async (courseData) => {
  const { data } = await api.post("/courses", courseData);
  return data;
};

export const updateCourse = async (courseId, courseData) => {
  const { data } = await api.put(
    `/courses/${courseId}`,
    courseData
  );

  return data;
};

export const deleteCourse = async (courseId) => {
  const { data } = await api.delete(
    `/courses/${courseId}`
  );

  return data;
};