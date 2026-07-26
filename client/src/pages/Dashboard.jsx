import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentCourses from "@/components/dashboard/RecentCourses";
import UpcomingSessions from "@/components/dashboard/UpcomingSessions";
import QuickActions from "@/components/dashboard/QuickActions";

function Dashboard() {
  return (
    <div className="space-y-6">
  <StatsGrid />

  <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
    <RecentCourses />
    <UpcomingSessions />
  </section>

  <QuickActions />
</div>
  );
}

export default Dashboard;