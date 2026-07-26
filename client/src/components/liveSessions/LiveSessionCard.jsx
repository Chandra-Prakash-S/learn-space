import {
  CalendarDays,
  Clock3,
  User,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function LiveSessionCard({ session }) {
  const formattedDate = new Date(
    session.scheduledAt
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedTime = new Date(
    session.scheduledAt
  ).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10">
      {/* Status */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            session.status === "upcoming"
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-slate-700 text-slate-300"
          }`}
        >
          {session.status.charAt(0).toUpperCase() +
            session.status.slice(1)}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold sm:text-xl font-bold text-white transition-colors group-hover:text-indigo-400">
        {session.title}
      </h2>

      {/* Description */}
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
        {session.description}
      </p>

      {/* Meta */}
      <div className="mt-6 space-y-3 text-sm text-slate-300">
        <div className="flex items-start gap-2">
          <User className="h-4 w-4 text-indigo-400" />
          <span className="break-words">
            {session.instructor}
          </span>
        </div>

        <div className="flex items-start gap-2">
          <CalendarDays className="h-4 w-4 text-indigo-400" />
          {formattedDate}
        </div>

        <div className="flex items-start gap-2">
          <Clock3 className="h-4 w-4 text-indigo-400" />
          {formattedTime} • {session.duration} mins
        </div>
      </div>

      <div className="mt-auto pt-6">
        <Link to={`/live-sessions/${session._id}`}>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-500">
            View Session
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LiveSessionCard;