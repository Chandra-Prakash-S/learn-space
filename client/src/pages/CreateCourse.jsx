import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import CourseForm from "@/components/courses/CourseForm";
import { useCreateCourse } from "@/hooks/courses/useCreateCourse";

function CreateCourse() {
  const navigate = useNavigate();

  const { mutate, isPending } = useCreateCourse();

  const handleSubmit = (values) => {
    mutate(values, {
      onSuccess: (response) => {
        toast.success(
          response?.message || "Course created successfully!"
        );

        navigate("/courses");
      },

      onError: (error) => {
        toast.error(
          error?.response?.data?.message ||
            "Failed to create course."
        );
      },
    });
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Create Course
        </h1>

        <p className="mt-2 text-slate-400">
          Fill in the details below to create a new course.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <CourseForm
          onSubmit={handleSubmit}
          isSubmitting={isPending}
          submitText="Create Course"
        />
      </div>
    </div>
  );
}

export default CreateCourse;