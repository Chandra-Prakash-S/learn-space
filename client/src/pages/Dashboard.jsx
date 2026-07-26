import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentCourses from "@/components/dashboard/RecentCourses";
import UpcomingSessions from "@/components/dashboard/UpcomingSessions";
import QuickActions from "@/components/dashboard/QuickActions";

function Dashboard() {
  return (
    <div className="space-y-8 md:space-y-10">
      <section>
        <StatsGrid />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentCourses />
        <UpcomingSessions />
      </section>

      <section>
        <QuickActions />
      </section>
    </div>
  );
}

export default Dashboard;