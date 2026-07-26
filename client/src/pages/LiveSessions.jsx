import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import LiveSessionGrid from "@/components/liveSessions/LiveSessionGrid";
import LiveSessionSkeleton from "@/components/liveSessions/LiveSessionSkeleton";
import EmptySessions from "@/components/liveSessions/EmptySessions";

import { useLiveSessions } from "@/hooks/liveSessions/useLiveSessions";

function LiveSessions() {
  const { data, isLoading, isError } = useLiveSessions();

  const [searchTerm, setSearchTerm] = useState("");

  const sessions = data?.data ?? [];

  const filteredSessions = useMemo(() => {
    const query = searchTerm.toLowerCase();

    return sessions.filter((session) => {
      const matchesTitle = session.title
        ?.toLowerCase()
        .includes(query);

      const matchesInstructor = session.instructor
        ?.toLowerCase()
        .includes(query);

      return matchesTitle || matchesInstructor;
    });
  }, [sessions, searchTerm]);

  if (isLoading) {
    return <LiveSessionSkeleton />;
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-800 bg-red-950/30 p-6 text-red-300">
        Unable to load live sessions.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">
          Upcoming Live Sessions
        </h1>

        <p className="text-slate-400">
          Join scheduled classes, interact with instructors, and learn in real time.
        </p>
      </div>

      {sessions.length === 0 ? (
        <EmptySessions />
      ) : (
        <>
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search live sessions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-indigo-500"
            />
          </div>

          {filteredSessions.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 py-16 text-center">
              <Search className="mb-4 h-12 w-12 text-slate-500" />

              <h3 className="text-xl font-semibold text-white">
                No matching sessions
              </h3>

              <p className="mt-2 text-slate-400">
                Try adjusting your search.
              </p>
            </div>
          ) : (
            <LiveSessionGrid sessions={filteredSessions} />
          )}
        </>
      )}
    </div>
  );
}

export default LiveSessions;