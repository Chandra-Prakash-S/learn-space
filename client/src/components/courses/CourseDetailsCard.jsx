import {
  Clock,
  Pencil,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function CourseDetailsCard({
  course,
  isAdmin = false,
  onDelete,
}) {
  const BACKEND_URL =
    import.meta.env.VITE_API_URL.replace("/api", "");

  const thumbnailSrc = course.thumbnail
    ? course.thumbnail.startsWith("http")
      ? course.thumbnail
      : `${BACKEND_URL}${course.thumbnail}`
    : "https://placehold.co/1200x675?text=Course";

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
      <div className="aspect-video overflow-hidden border-b border-slate-800 bg-slate-950 md:aspect-[16/6]">
        <img
          src={thumbnailSrc}
          alt={course.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="space-y-6 p-5 sm:p-6">
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
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            {course.title}
          </h1>

          <p className="mt-3 leading-7 text-slate-400">
            {course.description}
          </p>
        </div>

        <hr className="border-slate-800" />

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 sm:gap-6">
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

          {isAdmin && (
            <div className="flex items-center gap-2">
              <Link to={`/courses/${course._id}/edit`}>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-900 text-white hover:bg-slate-800"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </Link>

              <Button
                variant="destructive"
                onClick={onDelete}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsCard;