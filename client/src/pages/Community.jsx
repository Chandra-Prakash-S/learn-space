import CreatePostCard from "@/components/community/CreatePostCard";
import FeedSkeleton from "@/components/community/FeedSkeleton";
import EmptyFeed from "@/components/community/EmptyFeed";
import PostList from "@/components/community/PostList";

import { usePosts } from "@/hooks/community/usePosts";

function Community() {
  const { data, isLoading } = usePosts();

  if (isLoading) {
    return <FeedSkeleton />;
  }

  const posts = data?.data || [];

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <CreatePostCard />

      {posts.length === 0 ? (
        <EmptyFeed />
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Community;