import {
  CheckCircle2,
  Circle,
  PlayCircle,
} from "lucide-react";

function LessonItem({
  lesson,
  isSelected,
  isCompleted,
  onToggleComplete,
  onSelect,
}) {
  const handleSelect = () => onSelect(lesson);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleSelect();
        }
      }}
      className={`group cursor-pointer rounded-lg border p-4 transition-all duration-300 ${
        isSelected
          ? "border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/10"
          : "border-slate-800 bg-slate-900 hover:-translate-y-0.5 hover:border-slate-700"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-4">
          {isCompleted ? (
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-400" />
          ) : (
            <PlayCircle className="h-6 w-6 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-400" />
          )}

          <div className="flex-1">
            <h3
              className={`font-medium transition-colors ${
                isSelected
                  ? "text-indigo-400"
                  : "text-white"
              }`}
            >
              {lesson.title}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {lesson.duration}
            </p>
          </div>
        </div>

        {/* Fixed-width action column */}
        <div className="w-full sm:w-32">
          {isCompleted ? (
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white">
              ✓ Completed
            </span>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleComplete(lesson.title);
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-white"
            >
              <Circle className="h-3 w-3" />
              Mark Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LessonItem;