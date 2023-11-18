"use client";

import { Badge } from "~/components/badge";
import { Text } from "~/components/text";

type Props = {
  tags: Array<string>;
  selectedFilter: string;
  selectFilter: (tag: string) => void;
};

const TAG_MAP: Record<string, string> = {
  typescript: "TypeScript",
  generics: "Generics",
  test: "Test",
};

export function PostTags({ tags, selectedFilter, selectFilter }: Props) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center pb-10">
        {tags?.map((tag, index) => {
          const isActive = tag === selectedFilter;
          return (
            <div key={index} className="mx-2">
              <Badge
                text={TAG_MAP[tag]}
                onClick={() => selectFilter(tag)}
                // TODO: Make this more a11y!
                tabIndex={index}
                index={index}
                isActive={isActive}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
