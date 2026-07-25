import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function CourseCard({ course }) {
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
    <Link
      to={`/courses/${course._id}`}
      className="group block cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10">
        <img
          src={
            course.thumbnail ||
            "https://placehold.co/600x340?text=Course"
          }
          alt={course.title}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="space-y-4 p-5">
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
            <h3 className="line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-indigo-400">
              {course.title}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
              {course.description}
            </p>
          </div>

          <hr className="my-2 border-slate-800" />

          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="text-xs">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <span>{course.instructor}</span>
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

          <Button
            tabIndex={-1}
            className="pointer-events-none mt-2 w-full bg-indigo-600 transition-colors hover:bg-indigo-500"
          >
            View Course
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;