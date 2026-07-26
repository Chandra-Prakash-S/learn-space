import { ExternalLink } from "lucide-react";

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
      {/* Video Player */}
      <div className="aspect-video w-full bg-black">
        <iframe
          src={lesson.videoUrl}
          title={lesson.title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Lesson Details */}
      <div className="space-y-5 p-6">
        <div>
          <span className="inline-flex rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-400">
            Now Playing
          </span>

          <h2 className="mt-4 text-2xl font-bold text-white">
            {lesson.title}
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Duration: {lesson.duration}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-300">
            Lesson Resource
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Watch the selected recorded lesson above or open it in a new tab.
          </p>
        </div>

        <a
          href={lesson.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-indigo-600 transition-colors hover:bg-indigo-500">
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in YouTube
          </Button>
        </a>
      </div>
    </div>
  );
}

export default VideoPlayer;