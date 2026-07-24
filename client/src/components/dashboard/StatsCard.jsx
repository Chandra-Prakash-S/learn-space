import { Card, CardContent } from "@/components/ui/card";

function StatsCard({
  title,
  value,
  description,
  icon: Icon,
}) {
  return (
    <Card
      className="
        border-slate-800
        bg-slate-900
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-500
        hover:shadow-xl
        hover:shadow-indigo-500/10
      "
    >
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <div className="rounded-xl bg-indigo-500/10 p-4">
          <Icon className="h-6 w-6 text-indigo-400" />
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;