import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCourse } from "@/services/course.service";

export function useUpdateCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ courseId, courseData }) =>
      updateCourse(courseId, courseData),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });

      queryClient.invalidateQueries({
        queryKey: ["course", variables.courseId],
      });
    },
  });
}