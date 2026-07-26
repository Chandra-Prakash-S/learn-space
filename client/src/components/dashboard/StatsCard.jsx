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
      <CardContent className="flex items-center justify-between gap-4 p-5 sm:p-6">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl text-white">
            {value}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <div className="rounded-xl bg-indigo-500/10 p-3 sm:p-4">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-400" />
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;