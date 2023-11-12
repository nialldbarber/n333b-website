"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Post } from "~/lib/types";
import { Spacer } from "~/components/spacer";
import { Text } from "~/components/text";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export function PostCard({ post }: { post: Post | null }) {
  return (
    <Link href={`/posts/${post?.slug}`} className="my-2 bg-black min-h-[200px]">
      <motion.div
        variants={variants}
        className="flex flex-col items-center h-full p-6 rounded-lg border border-accents2 transition-all hover:border-accents3 hover:bg-hoverColor"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
      >
        {post?.image && (
          <Image
            src={post?.image}
            alt="something"
            width={200}
            height={200}
            className="opacity-60"
          />
        )}
        <Spacer paddingVertical="10px" />
        <Text level="4" weight="fontBold">
          {post?.title}
        </Text>
        <Spacer paddingVertical="5px" />
        <Text className="text-accents5">{post?.preview}</Text>
      </motion.div>
    </Link>
  );
}
