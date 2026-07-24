import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BookOpen } from "lucide-react";

import DashboardListItem from "./DashboardListItem";

const recentCourses = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "John Doe",
  },
  {
    id: 2,
    title: "Node.js Essentials",
    instructor: "Jane Smith",
  },
  {
    id: 3,
    title: "MongoDB Basics",
    instructor: "Alex Johnson",
  },
];

function RecentCourses() {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <BookOpen className="h-5 w-5 text-indigo-400" />
          Recent Courses
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {recentCourses.map((course) => (
          <DashboardListItem
            key={course.id}
            title={course.title}
            subtitle={course.instructor}
            buttonText="View"
            buttonClassName="border border-slate-700 bg-slate-800/60 text-slate-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default RecentCourses;