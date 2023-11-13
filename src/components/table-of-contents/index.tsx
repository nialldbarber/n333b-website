"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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
      className="sticky pl-6 top-32 p-6 ml-5 rounded-lg border border-accents2 bg-hoverColor"
      style={{ height }}
    >
      <Text level="3">Table of contents</Text>
      <div className="flex flex-col pt-4">
        {links?.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="group flex items-center py-2 pl-1 focus:outline focus:outline-1 focus:outline-accents3 rounded-md"
          >
            <ArrowRightIcon className="transition-all mr-2 group-hover:mr-3 duration-200 ease-in-out" />
            <Text className="capitalize">{link}</Text>
          </a>
        ))}
      </div>
    </aside>
  );
}
