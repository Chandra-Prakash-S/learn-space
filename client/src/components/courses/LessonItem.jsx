import { CheckCircle2, PlayCircle } from "lucide-react";

function LessonItem({
  lesson,
  isSelected,
  onSelect,
}) {
  return (
    <button
      onClick={() => onSelect(lesson)}
      className={`flex w-full cursor-pointer items-center justify-between rounded-lg border p-4 text-left transition-all duration-300 ${
        isSelected
          ? "border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/10"
          : "border-slate-800 bg-slate-900 hover:-translate-y-0.5 hover:border-slate-700"
      }`}
    >
      <div className="flex items-center gap-4">
        {isSelected ? (
          <CheckCircle2 className="h-6 w-6 text-indigo-400" />
        ) : (
          <PlayCircle className="h-6 w-6 text-slate-400" />
        )}

        <div>
          <p
            className={`font-medium transition-colors ${
              isSelected
                ? "text-indigo-400"
                : "text-white"
            }`}
          >
            {lesson.title}
          </p>

          <p className="mt-1 text-sm text-slate-400">
            {lesson.duration}
          </p>
        </div>
      </div>
    </button>
  );
}

export default LessonItem;