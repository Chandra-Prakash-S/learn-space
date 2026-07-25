import { FileText } from "lucide-react";

function EmptyFeed() {
  return (
    <div className="rounded-xl border border-dashed border-slate-700 py-16 text-center">
      <FileText className="mx-auto mb-4 h-12 w-12 text-slate-500" />

      <h2 className="text-xl font-semibold text-white">
        No posts yet
      </h2>

      <p className="mt-2 text-slate-400">
        Be the first to share something with the community 🚀
      </p>
    </div>
  );
}

export default EmptyFeed;