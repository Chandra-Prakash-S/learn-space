import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import CreatePostCard from "@/components/community/CreatePostCard";
import FeedSkeleton from "@/components/community/FeedSkeleton";
import EmptyFeed from "@/components/community/EmptyFeed";
import PostList from "@/components/community/PostList";

import { usePosts } from "@/hooks/community/usePosts";

function Community() {
  const { data, isLoading } = usePosts();

  const [searchTerm, setSearchTerm] = useState("");

  const posts = data?.data || [];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const query = searchTerm.toLowerCase();

      const matchesContent = post.content
        ?.toLowerCase()
        .includes(query);

      const matchesAuthor = post.author?.name
        ?.toLowerCase()
        .includes(query);

      return matchesContent || matchesAuthor;
    });
  }, [posts, searchTerm]);

  if (isLoading) {
    return <FeedSkeleton />;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <CreatePostCard />

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-indigo-500"
        />
      </div>

      {posts.length === 0 ? (
        <EmptyFeed />
      ) : filteredPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 py-16 text-center">
          <Search className="mb-4 h-12 w-12 text-slate-500" />

          <h3 className="text-xl font-semibold text-white">
            No matching posts
          </h3>

          <p className="mt-2 text-slate-400">
            Try adjusting your search.
          </p>
        </div>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}

export default Community;