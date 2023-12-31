"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import type { Post } from "~/lib/types";
import { PostCard } from "~/components/post-card";
import { PostTags } from "~/components/post-tags";
import { Stack } from "~/components/stack";

type Props = {
  posts: (Post | null)[];
  tags: Array<Tags>;
};

export const TAG_MAP = {
  all: "All",
  typescript: "TypeScript",
  generics: "Generics",
  "react-native": "React Native",
} as const;
export type Tags = keyof typeof TAG_MAP;

export function PostList({ posts, tags }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<Tags>("all");

  const updatedFilteredList = useMemo(() => {
    if (selectedFilter === "all") return posts;
    return posts.filter((post) => post?.tags.includes(selectedFilter));
  }, [posts, selectedFilter]);

  return (
    <Stack gutter="6px">
      <PostTags
        tags={tags}
        selectedFilter={selectedFilter}
        selectFilter={(tag: Tags) => setSelectedFilter(tag)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
        {updatedFilteredList.map((post) => (
          <motion.div
            key={post?.date}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>
    </Stack>
  );
}
