import { useQuery } from "@tanstack/react-query";
import { getCourse } from "@/services/course.service";

export function useCourse(courseId) {
  return useQuery({
    queryKey: ["course", courseId],
    queryFn: () => getCourse(courseId),
    enabled: !!courseId,
  });
}