import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

import CourseDetailsCard from "@/components/courses/CourseDetailsCard";
import LessonList from "@/components/courses/LessonList";
import VideoPlayer from "@/components/courses/VideoPlayer";
import CourseSkeleton from "@/components/courses/CourseSkeleton";

import { useCourse } from "@/hooks/courses/useCourse";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

import {
  getCompletedLessons,
  getProgressPercentage,
  toggleLessonCompletion,
} from "@/utils/courseProgress";

function CourseDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useCourse(id);
  const { data: currentUser } = useCurrentUser();

  const course = data?.data;

  const userId = currentUser?.user?._id;

  const [selectedLesson, setSelectedLesson] =
    useState(null);

  const [completedLessons, setCompletedLessons] =
    useState([]);

  useEffect(() => {
    if (
      course?.lessons?.length &&
      userId
    ) {
      setSelectedLesson(course.lessons[0]);

      setCompletedLessons(
        getCompletedLessons(userId, course._id)
      );
    }
  }, [course, userId]);

  function handleToggleLesson(lessonTitle) {
    const before = completedLessons.length;

    const updated = toggleLessonCompletion(
      userId,
      course._id,
      lessonTitle
    );

    setCompletedLessons(updated);

    if (
      before !== course.lessons.length &&
      updated.length === course.lessons.length
    ) {
      toast.success(
        "🎉 Congratulations! You completed this course."
      );
    }
  }

  const progress =
    course && userId
      ? getProgressPercentage(
          userId,
          course._id,
          course.lessons.length
        )
      : 0;

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
              Select a lesson below to view its
              learning resource.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Learning Progress
              </h3>

              <span
                className={`font-semibold ${
                  progress === 100
                    ? "text-emerald-400"
                    : "text-indigo-400"
                }`}
              >
                {progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-indigo-500 transition-all duration-500 ease-in-out"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p className="mt-3 text-sm">
              <span className="font-semibold text-emerald-400">
                {completedLessons.length}
              </span>

              <span className="text-slate-400">
                {" "}
                of{" "}
                {course.lessons.length} lessons
                completed
              </span>
            </p>
          </div>

          <VideoPlayer lesson={selectedLesson} />
        </div>

        <div className="lg:col-span-1">
          <LessonList
            lessons={course.lessons}
            selectedLesson={selectedLesson}
            onSelectLesson={
              setSelectedLesson
            }
            completedLessons={
              completedLessons
            }
            onToggleComplete={
              handleToggleLesson
            }
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;