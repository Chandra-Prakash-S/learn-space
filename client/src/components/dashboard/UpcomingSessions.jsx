import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Video } from "lucide-react";

import DashboardListItem from "./DashboardListItem";

import { useUpcomingLiveSessions } from "@/hooks/liveSessions/useUpcomingLiveSessions";

function UpcomingSessions() {
  const navigate = useNavigate();

  const { data, isLoading } = useUpcomingLiveSessions();

  const sessions = data?.data || [];

  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg text-white sm:text-xl">
          <Video className="h-5 w-5 shrink-0 text-indigo-400" />
          <span className="truncate">Upcoming Sessions</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {isLoading ? (
          <p className="text-sm text-slate-400">
            Loading sessions...
          </p>
        ) : sessions.length === 0 ? (
          <p className="text-sm text-slate-400">
            No upcoming sessions.
          </p>
        ) : (
          sessions.map((session) => (
            <DashboardListItem
              key={session._id}
              title={session.title}
              subtitle={`${session.instructor} • ${new Date(
                session.scheduledAt
              ).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
              })}`}
              buttonText="Join"
              buttonClassName="w-full bg-green-600 text-white hover:bg-green-500 sm:w-auto"
              onButtonClick={() =>
                navigate(`/live-sessions/${session._id}`)
              }
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}

export default UpcomingSessions;