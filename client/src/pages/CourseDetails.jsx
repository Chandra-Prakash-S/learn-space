import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import CourseDetailsCard from "@/components/courses/CourseDetailsCard";
import LessonList from "@/components/courses/LessonList";
import VideoPlayer from "@/components/courses/VideoPlayer";
import CourseSkeleton from "@/components/courses/CourseSkeleton";

import { useCourse } from "@/hooks/courses/useCourse";

function CourseDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useCourse(id);

  const course = data?.data;

  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    if (course?.lessons?.length) {
      setSelectedLesson(course.lessons[0]);
    }
  }, [course]);

  if (isLoading) {
    return <CourseSkeleton />;
  }

  if (isError || !course) {
    return (
      <div className="rounded-xl border border-red-800 bg-red-950/30 p-6 text-red-300">
        Unable to load course.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Link
        to="/courses"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Course Library
      </Link>

      <CourseDetailsCard course={course} />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Current Lesson
            </h2>

            <p className="text-slate-400">
              Select a lesson below to view its learning resource.
            </p>
          </div>

          <VideoPlayer lesson={selectedLesson} />
        </div>

        <div className="lg:col-span-1">
          <LessonList
            lessons={course.lessons}
            selectedLesson={selectedLesson}
            onSelectLesson={setSelectedLesson}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;