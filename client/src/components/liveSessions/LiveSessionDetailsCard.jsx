import {
  CalendarDays,
  Clock3,
  User,
  Presentation,
} from "lucide-react";

import { Button } from "@/components/ui/button";

function LiveSessionDetailsCard({ session }) {
  const formattedDate = new Date(
    session.scheduledAt
  ).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = new Date(
    session.scheduledAt
  ).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">
      {/* Status */}
      <div className="mb-6 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
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
      <h1 className="text-3xl font-bold text-white">
        {session.title}
      </h1>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-400">
        {session.description}
      </p>

      {/* Session Information */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-indigo-400" />
          <div>
            <p className="text-sm text-slate-400">
              Instructor
            </p>
            <p className="font-medium text-white">
              {session.instructor}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-indigo-400" />
          <div>
            <p className="text-sm text-slate-400">
              Date
            </p>
            <p className="font-medium text-white">
              {formattedDate}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 className="h-5 w-5 text-indigo-400" />
          <div>
            <p className="text-sm text-slate-400">
              Time
            </p>
            <p className="font-medium text-white">
              {formattedTime}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 className="h-5 w-5 text-indigo-400" />
          <div>
            <p className="text-sm text-slate-400">
              Duration
            </p>
            <p className="font-medium text-white">
              {session.duration} mins
            </p>
          </div>
        </div>
      </div>

      <hr className="my-8 border-slate-800" />

      {/* CTA */}
      <div className="mt-10">
        {session.status === "upcoming" ? (
          <a
            href={session.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button
              size="lg"
              className="flex w-full items-center justify-center gap-2 bg-indigo-600 transition-colors hover:bg-indigo-500"
            >
              <Presentation className="h-4 w-4" />
              <span>Join Session</span>
            </Button>
          </a>
        ) : (
          <Button
            size="lg"
            disabled
            className="flex w-full items-center justify-center gap-2 bg-slate-700 text-slate-300"
          >
            <Presentation className="h-4 w-4" />
            <span>Session Ended</span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default LiveSessionDetailsCard;