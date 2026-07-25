import { CalendarX2 } from "lucide-react";

function EmptySessions() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900 px-6 py-16 text-center">
      <CalendarX2 className="mb-4 h-12 w-12 text-slate-500" />

      <h2 className="text-xl font-semibold text-white">
        No Live Sessions
      </h2>

      <p className="mt-2 max-w-md text-slate-400">
        There are no scheduled live sessions at the
        moment. Check back later for upcoming classes.
      </p>
    </div>
  );
}

export default EmptySessions;