"use client";

import { useMemo, useState } from "react";

import type { Post } from "~/lib/types";
import { PostCard } from "~/components/post-card";
import { PostTags } from "~/components/post-tags";
import { Stack } from "~/components/stack";

type Props = {
  posts: (Post | null)[];
  tags: Array<string>;
};

export function PostList({ posts, tags }: Props) {
  const [selectedFilter, setSelectedFilter] = useState("");

  const selectFilter = (tag: string) => setSelectedFilter(tag);

  const updatedFilteredList = useMemo(() => {
    if (selectedFilter === "") return posts;
    return posts.filter((post) => post?.tags.includes(selectedFilter));
  }, [posts, selectedFilter]);

  return (
    <Stack gutter="6px">
      <PostTags tags={tags} selectFilter={selectFilter} />
      {updatedFilteredList.map((post) => (
        <PostCard key={post?.date} post={post} />
      ))}
    </Stack>
  );
}
