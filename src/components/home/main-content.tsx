import PostList from "./post-list";
import StorysFeed from "./storys-feed";

export default function MainContent() {
  return (
    <div className="space-y-4">
      <StorysFeed />
      <PostList />
    </div>
  );
}
