"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

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

type Props = { post: Post | null };

export function PostCard({ post }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href={`/posts/${post?.slug}`} className="my-2 bg-black min-h-[200px]">
      <motion.div
        variants={variants}
        className="relative flex flex-col items-center h-full p-6 rounded-lg border border-accents2 transition-all hover:border-accents3 hover:bg-hoverColor group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="absolute -inset-px pointer-events-none rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.10), transparent 80%)`,
          }}
        />
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
