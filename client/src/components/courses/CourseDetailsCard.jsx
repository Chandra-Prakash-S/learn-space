import { Clock } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function CourseDetailsCard({ course }) {
  const levelClasses = {
    Beginner: "bg-emerald-500/20 text-emerald-400",
    Intermediate: "bg-yellow-500/20 text-yellow-400",
    Advanced: "bg-red-500/20 text-red-400",
  };

  const initials =
    course.instructor
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <img
        src={
          course.thumbnail ||
          "https://placehold.co/1200x500?text=Course"
        }
        alt={course.title}
        className="h-72 w-full object-cover"
      />

      <div className="space-y-6 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              levelClasses[course.level]
            }`}
          >
            {course.level}
          </span>

          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
            {course.category}
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            {course.title}
          </h1>

          <p className="mt-3 text-slate-400 leading-7">
            {course.description}
          </p>
        </div>

        <hr className="border-slate-800" />

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarFallback>
                {initials}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="font-medium text-white">
                {course.instructor}
              </p>

              <p className="text-xs text-slate-500">
                Instructor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-indigo-400" />

            <span>
              {course.duration
                .replace("Hours", "hrs")
                .replace("Hour", "hr")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsCard;