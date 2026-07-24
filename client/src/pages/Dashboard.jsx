import { Card, CardContent } from "@/components/ui/card";

function Dashboard() {
  return (
    <Card className="border-slate-800 bg-slate-900 text-white">
      <CardContent className="p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <p className="mt-2 text-slate-400">
          Welcome to LearnSpace.
        </p>
      </CardContent>
    </Card>
  );
}

export default Dashboard;