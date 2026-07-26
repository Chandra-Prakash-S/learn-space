import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import CourseForm from "@/components/courses/CourseForm";
import { useCourse } from "@/hooks/courses/useCourse";
import { useUpdateCourse } from "@/hooks/courses/useUpdateCourse";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useCourse(id);

  const { mutate, isPending } = useUpdateCourse();

  const course = data?.data;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !course) {
    return <p>Unable to load course.</p>;
  }

  const defaultValues = {
    title: course.title,
    description: course.description,
    thumbnail: course.thumbnail || "",
    category: course.category,
    level: course.level,
    duration: course.duration,
  };

  function handleSubmit(values) {
    mutate(
      {
        courseId: id,
        courseData: values,
      },
      {
        onSuccess: () => {
          toast.success("Course updated successfully.");
          navigate(`/courses/${id}`);
        },

        onError: (error) => {
          toast.error(
            error?.response?.data?.message ||
              "Failed to update course."
          );
        },
      }
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Edit Course
        </h1>

        <p className="text-slate-400">
          Update course information.
        </p>
      </div>

      <CourseForm
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        isPending={isPending}
        submitText="Update Course"
      />
    </div>
  );
}

export default EditCourse;