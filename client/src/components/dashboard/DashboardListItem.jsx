import { Button } from "@/components/ui/button";

function DashboardListItem({
  title,
  subtitle,
  buttonText,
  buttonClassName = "",
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-800 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-slate-800/40">
      <div>
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-slate-400">{subtitle}</p>
      </div>

      <Button size="default" className={buttonClassName}>
        {buttonText}
      </Button>
    </div>
  );
}

export default DashboardListItem;