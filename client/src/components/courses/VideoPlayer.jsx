import { ExternalLink, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

function VideoPlayer({ lesson }) {
  if (!lesson) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400">
        No lesson selected.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <div className="flex h-64 items-center justify-center bg-slate-950">
        <div className="space-y-3 text-center">
          <span className="inline-flex rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-400">
            Playing
          </span>

          <PlayCircle className="mx-auto h-16 w-16 text-indigo-500" />

          <h2 className="text-3xl font-bold text-white">
            {lesson.title}
          </h2>

          <p className="text-sm text-slate-400">
            Duration: {lesson.duration}
          </p>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <p className="text-sm font-medium text-slate-300">
            Lesson Resource
          </p>

          <p className="mt-2 break-all text-sm text-slate-500">
            {lesson.videoUrl}
          </p>
        </div>

        <a
          href={lesson.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-indigo-600 transition-colors hover:bg-indigo-500">
            <ExternalLink className="mr-2 h-4 w-4" />
            Open Resource
          </Button>
        </a>
      </div>
    </div>
  );
}

export default VideoPlayer;