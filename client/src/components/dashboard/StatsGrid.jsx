import {
  BookOpen,
  Users,
  Video,
  Trophy,
} from "lucide-react";

import StatsCard from "./StatsCard";

function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Courses"
        value="12"
        description="Available courses"
        icon={BookOpen}
      />

      <StatsCard
        title="Community Posts"
        value="48"
        description="Latest discussions"
        icon={Users}
      />

      <StatsCard
        title="Live Sessions"
        value="6"
        description="Scheduled this week"
        icon={Video}
      />

      <StatsCard
        title="Learning Progress"
        value="78%"
        description="Completed"
        icon={Trophy}
      />
    </section>
  );
}

export default StatsGrid;