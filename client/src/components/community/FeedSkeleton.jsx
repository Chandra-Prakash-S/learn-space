function FeedSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-700" />

            <div className="space-y-2">
              <div className="h-4 w-32 rounded bg-slate-700" />
              <div className="h-3 w-20 rounded bg-slate-800" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-4 rounded bg-slate-700" />
            <div className="h-4 w-3/4 rounded bg-slate-700" />
          </div>

          <div className="mt-5 flex justify-between gap-4">
            <div className="h-4 w-14 rounded bg-slate-700" />
            <div className="h-4 w-14 rounded bg-slate-700" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedSkeleton;