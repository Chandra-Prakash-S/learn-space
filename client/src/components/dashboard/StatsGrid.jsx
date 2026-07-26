import {
  BookOpen,
  Users,
  Video,
  Trophy,
} from "lucide-react";

import StatsCard from "./StatsCard";

import { useCourses } from "@/hooks/courses/useCourses";
import { usePosts } from "@/hooks/community/usePosts";
import { useLiveSessions } from "@/hooks/liveSessions/useLiveSessions";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

import { getOverallProgress } from "@/utils/courseProgress";

function StatsGrid() {
  const { data: coursesData } = useCourses();
  const { data: postsData } = usePosts();
  const { data: sessionsData } = useLiveSessions();
  const { data: currentUser } = useCurrentUser();

  const courses = coursesData?.data || [];
  const posts = postsData?.data || [];
  const sessions = sessionsData?.data || [];

  const userId = currentUser?.user?._id;

  const upcomingSessions = sessions.filter(
    (session) => session.status === "upcoming"
  ).length;

  const overallProgress = getOverallProgress(
    userId,
    courses
  );

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Courses"
        value={courses.length}
        description="Available courses"
        icon={BookOpen}
      />

      <StatsCard
        title="Community Posts"
        value={posts.length}
        description="Latest discussions"
        icon={Users}
      />

      <StatsCard
        title="Live Sessions"
        value={sessions.length}
        description="Available sessions"
        icon={Video}
      />

      <StatsCard
        title="Learning Progress"
        value={`${overallProgress}%`}
        description="Overall learning progress"
        icon={Trophy}
      />
    </section>
  );
}

export default StatsGrid;

