import { collectTags, getPosts } from "~/lib/posts";
import { PostList } from "~/components/post-list";

export default async function Posts() {
  const [posts, tags] = await Promise.all([getPosts(), collectTags()]);
  return (
    <div>
      <PostList posts={posts} tags={tags} />
    </div>
  );
}
