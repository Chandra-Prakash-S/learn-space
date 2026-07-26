import { Button } from "@/components/ui/button";

function DashboardListItem({
  title,
  subtitle,
  buttonText,
  buttonClassName = "",
  onButtonClick,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-800 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-slate-800/40 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h3 className="font-medium text-white">
          {title}
        </h3>

        <p className="mt-1 break-words text-sm text-slate-400">
          {subtitle}
        </p>
      </div>

      <Button
        size="default"
        className={`w-full sm:w-auto ${buttonClassName}`}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default DashboardListItem;