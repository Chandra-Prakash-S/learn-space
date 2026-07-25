import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import LiveSessionDetailsCard from "@/components/liveSessions/LiveSessionDetailsCard";
import LiveSessionDetailsSkeleton from "@/components/liveSessions/LiveSessionDetailsSkeleton";

import { useLiveSession } from "@/hooks/liveSessions/useLiveSession";

function LiveSessionDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useLiveSession(id);

  const session = data?.data;

  // Loading State
  if (isLoading) {
    return <LiveSessionDetailsSkeleton />;
  }

  // Error State
  if (isError || !session) {
    return (
      <div className="rounded-xl border border-red-800 bg-red-950/30 p-6 text-red-300">
        Unable to load live session.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back Navigation */}
      <Link
        to="/live-sessions"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Live Sessions
      </Link>

      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">
          Live Session Details
        </h1>

        <p className="text-slate-400">
          Review the session information and join the live class when it's time.
        </p>
      </div>

      {/* Session Details */}
      <LiveSessionDetailsCard session={session} />
    </div>
  );
}

export default LiveSessionDetails;