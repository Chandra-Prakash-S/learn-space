import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  BookOpen,
  PlusCircle,
  Video,
} from "lucide-react";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-4">
      <Button
        onClick={() => navigate("/community")}
        className="w-full gap-2 bg-indigo-600 text-white hover:bg-indigo-600/90 lg:min-w-[170px] lg:w-auto"
      >
        <PlusCircle size={18} />
        Create Post
      </Button>

      <Button
        onClick={() => navigate("/courses")}
        className="w-full gap-2 border border-slate-700 bg-slate-800/60 text-slate-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 lg:min-w-[170px] lg:w-auto"
      >
        <BookOpen size={18} />
        Browse Courses
      </Button>

      <Button
        onClick={() => navigate("/live-sessions")}
        className="w-full gap-2 border border-slate-700 bg-slate-800/60 text-slate-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 lg:min-w-[170px] lg:w-auto"
      >
        <Video size={18} />
        Join Session
      </Button>
    </div>
  );
}

export default QuickActions;