import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Video } from "lucide-react";

import DashboardListItem from "./DashboardListItem";

const sessions = [
  {
    id: 1,
    title: "React Hooks Deep Dive",
    time: "Today • 6:00 PM",
  },
  {
    id: 2,
    title: "JWT Authentication",
    time: "Tomorrow • 5:00 PM",
  },
  {
    id: 3,
    title: "MongoDB Q&A",
    time: "Friday • 7:00 PM",
  },
];

function UpcomingSessions() {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Video className="h-5 w-5 text-indigo-400" />
          Upcoming Sessions
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {sessions.map((session) => (
          <DashboardListItem
            key={session.id}
            title={session.title}
            subtitle={session.time}
            buttonText="Join"
            buttonClassName="bg-green-600 hover:bg-green-500 text-white"
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default UpcomingSessions;