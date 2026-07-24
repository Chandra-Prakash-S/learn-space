import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function DashboardCard({
  title,
  icon: Icon,
  children,
  className = "",
}) {
  return (
    <Card
      className={`border-slate-800 bg-slate-900 ${className}`}
    >
      {(title || Icon) && (
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            {Icon && (
              <Icon className="h-5 w-5 text-indigo-400" />
            )}
            {title}
          </CardTitle>
        </CardHeader>
      )}

      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default DashboardCard;