"use client";

import { motion } from "framer-motion";

import Main from "~/components/layouts/main";

const variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Main>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.div>
    </Main>
  );
}
