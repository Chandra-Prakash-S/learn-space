import { BookOpen } from "lucide-react";

import CourseGrid from "@/components/courses/CourseGrid";
import CourseSkeleton from "@/components/courses/CourseSkeleton";
import EmptyCourses from "@/components/courses/EmptyCourses";

import { useCourses } from "@/hooks/courses/useCourses";

function Courses() {
  const { data, isLoading } = useCourses();

  if (isLoading) {
    return <CourseSkeleton />;
  }

  const courses = data?.data || [];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <BookOpen className="h-7 w-7 text-indigo-400" />

          <h1 className="text-3xl font-bold text-white">
            Course Library
          </h1>
        </div>

        <p className="text-slate-400">
          Browse and continue your learning journey.
        </p>

        <div>
          <span className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
            {courses.length}{" "}
            {courses.length === 1 ? "Course" : "Courses"} Available
          </span>
        </div>
      </div>

      {courses.length ? (
        <CourseGrid courses={courses} />
      ) : (
        <EmptyCourses />
      )}
    </div>
  );
}

export default Courses;