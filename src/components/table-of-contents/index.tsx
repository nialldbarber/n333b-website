"use client";

import { useLayoutEffect, useRef, useState } from "react";

import { cn } from "~/lib/style/cn";
import { Text } from "~/components/text";

type Props = {
  links: Array<string>;
};

export default function TableOfContents({ links }: Props) {
  const [height, setHeight] = useState(0);
  const containerHeight = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (containerHeight.current) {
      setHeight(containerHeight.current.offsetWidth);
    }
  }, []);

  return (
    <aside
      ref={containerHeight}
      className={cn("sticky pl-6 top-20")}
      style={{ height }}
    >
      <Text level="3">Table of contents</Text>
      <div className={cn("flex flex-col")}>
        {links?.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="py-2 pl-1 focus:outline focus:outline-1"
          >
            <Text className="capitalize">
              {"->"} {link}
            </Text>
          </a>
        ))}
      </div>
    </aside>
  );
}
