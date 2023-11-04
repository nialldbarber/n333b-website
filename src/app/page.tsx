import { getPosts } from "~/lib/posts";
import { PostCard } from "~/components/post-card";
import Stack from "~/components/stack";
import { Text } from "~/components/text";

export default async function Home() {
  const posts = await getPosts();

  return (
    <Stack gutter="4px">
      <Text level="large">{"Hi, I'm Niall."}</Text>
      <Text>I am a frontend engineer</Text>
      <Text level="3">Check out my latest posts</Text>
      {posts.map((post) => (
        <PostCard key={post?.date} post={post} />
      ))}
    </Stack>
  );
}

type Keys = "a" | "b" | "c";
type MappedKeys = { [K in Keys]: K };
type ReversedMappedKeys = keyof MappedKeys;
