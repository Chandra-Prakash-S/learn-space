import LessonItem from "./LessonItem";

function LessonList({
  lessons,
  selectedLesson,
  onSelectLesson,
  completedLessons,
  onToggleComplete,
}) {
  if (!lessons?.length) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
        <h2 className="text-xl font-semibold text-white">
          Course Lessons
        </h2>

        <p className="mt-4 text-slate-400">
          No lessons available for this course.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Course Lessons ({lessons.length})
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Select a lesson to view its learning resource.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => (
          <LessonItem
            key={lesson.title}
            lesson={lesson}
            isSelected={
              selectedLesson?.title === lesson.title
            }
            isCompleted={completedLessons.includes(
              lesson.title
            )}
            onToggleComplete={onToggleComplete}
            onSelect={onSelectLesson}
          />
        ))}
      </div>
    </div>
  );
}

export default LessonList;