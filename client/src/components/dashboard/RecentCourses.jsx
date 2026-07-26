import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BookOpen } from "lucide-react";

import DashboardListItem from "./DashboardListItem";

import { useCourses } from "@/hooks/courses/useCourses";

function RecentCourses() {
  const navigate = useNavigate();

  const { data, isLoading } = useCourses();

  const courses = data?.data?.slice(0, 3) || [];

  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg text-white sm:text-xl">
          <BookOpen className="h-5 w-5 shrink-0 text-indigo-400" />
          <span className="truncate">Recent Courses</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {isLoading ? (
          <p className="text-sm text-slate-400">
            Loading courses...
          </p>
        ) : courses.length === 0 ? (
          <p className="text-sm text-slate-400">
            No courses available.
          </p>
        ) : (
          courses.map((course) => (
            <DashboardListItem
              key={course._id}
              title={course.title}
              subtitle={course.instructor}
              buttonText="View"
              buttonClassName="w-full border border-slate-700 bg-slate-800/60 text-slate-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 sm:w-auto"
              onButtonClick={() =>
                navigate(`/courses/${course._id}`)
              }
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}

export default RecentCourses;