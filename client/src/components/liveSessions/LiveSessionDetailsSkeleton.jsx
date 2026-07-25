import { Skeleton } from "@/components/ui/skeleton";

function LiveSessionDetailsSkeleton() {
  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Skeleton className="h-5 w-40" />

      {/* Page Heading */}
      <div className="space-y-3">
        <Skeleton className="h-9 w-72" />
        <Skeleton className="h-5 w-96 max-w-full" />
      </div>

      {/* Details Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">
        {/* Status Badge */}
        <Skeleton className="mb-6 h-7 w-28 rounded-full" />

        {/* Title */}
        <Skeleton className="h-10 w-2/3" />

        {/* Description */}
        <div className="mt-6 space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Session Information */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <Skeleton className="h-10 w-10 rounded-full" />

              <div className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-36" />
              </div>
            </div>
          ))}
        </div>

        {/* Join Button */}
        <Skeleton className="mt-10 h-11 w-full rounded-md" />
      </div>
    </div>
  );
}

export default LiveSessionDetailsSkeleton;