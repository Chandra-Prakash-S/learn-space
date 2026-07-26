import { BookOpen } from "lucide-react";

function EmptyCourses() {
  return (
    <div className="rounded-xl border border-dashed border-slate-700 px-6 py-12 sm:py-16 text-center">
      <BookOpen className="mx-auto mb-4 h-12 w-12 text-slate-500" />

      <h2 className="text-lg font-semibold text-white">
        No courses available
      </h2>

      <p className="mt-2 text-slate-400">
        New courses will appear here soon.
      </p>
    </div>
  );
}

export default EmptyCourses;