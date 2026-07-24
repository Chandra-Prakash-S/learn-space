import { Button } from "@/components/ui/button";
import {
  BookOpen,
  PlusCircle,
  Video,
} from "lucide-react";

function QuickActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button className="min-w-[170px] gap-2 bg-indigo-600 text-white hover:bg-indigo-600/90">
        <PlusCircle size={18} />
        Create Post
      </Button>

      <Button className="min-w-[170px] gap-2 border border-slate-700 bg-slate-800/60 text-slate-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300">
        <BookOpen size={18} />
        Browse Courses
      </Button>

      <Button
        className="min-w-[170px] gap-2 border border-slate-700 bg-slate-800/60 text-slate-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
      >
        <Video size={18} />
        Join Session
      </Button>
    </div>
  );
}

export default QuickActions;