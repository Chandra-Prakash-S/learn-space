function CourseSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border border-slate-800 bg-slate-900 p-5"
        >
          <div className="mb-5 h-48 rounded-lg bg-slate-800" />

          <div className="mb-3 h-6 w-3/4 rounded bg-slate-800" />

          <div className="mb-2 h-4 rounded bg-slate-800" />
          <div className="mb-6 h-4 w-5/6 rounded bg-slate-800" />

          <div className="mb-2 h-4 w-1/2 rounded bg-slate-800" />
          <div className="mb-2 h-4 w-2/3 rounded bg-slate-800" />
          <div className="h-10 rounded bg-slate-800" />
        </div>
      ))}
    </div>
  );
}

export default CourseSkeleton;