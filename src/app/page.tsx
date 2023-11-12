import { MotionDiv } from "~/lib/framer";
import { getPosts } from "~/lib/posts";
import { PostCard } from "~/components/post-card";
import { Row } from "~/components/row";
import { Spacer } from "~/components/spacer";
import { Stack } from "~/components/stack";
import { Text } from "~/components/text";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <Stack gutter="4px">
      <Text level="large">Niall Barber</Text>
      <Text level="1">Frontend engineer</Text>
      <Spacer paddingVertical="20px" />
      <Row>
        <Text level="3">Latest posts</Text>
        <Spacer paddingHorizontal="4px" />
        <Text level="4" className="text-accents5">
          Check out some of the latest and greatest!
        </Text>
      </Row>
      {posts && (
        <MotionDiv
          variants={variants}
          initial="closed"
          animate="open"
          className="grid grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <PostCard key={post?.date} post={post} />
          ))}
        </MotionDiv>
      )}
    </Stack>
  );
}
