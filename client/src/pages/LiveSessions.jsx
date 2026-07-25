import LiveSessionGrid from "@/components/liveSessions/LiveSessionGrid";
import LiveSessionSkeleton from "@/components/liveSessions/LiveSessionSkeleton";
import EmptySessions from "@/components/liveSessions/EmptySessions";

import { useLiveSessions } from "@/hooks/liveSessions/useLiveSessions";

function LiveSessions() {
  const { data, isLoading, isError } = useLiveSessions();

  const sessions = data?.data ?? [];

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
          Live Sessions
        </h1>

        <p className="text-slate-400">
          Join upcoming live classes and interact with instructors in real time.
        </p>
      </div>

      {sessions.length === 0 ? (
        <EmptySessions />
      ) : (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">
              {sessions.length}{" "}
              {sessions.length === 1 ? "Session" : "Sessions"} Available
            </p>
          </div>

          <LiveSessionGrid sessions={sessions} />
        </>
      )}
    </div>
  );
}

export default LiveSessions;