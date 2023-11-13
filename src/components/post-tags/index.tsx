"use client";

import { Badge } from "~/components/badge";
import { Text } from "~/components/text";

type Props = {
  tags: Array<string>;
  selectedFilter: string;
  selectFilter: (tag: string) => void;
};

export function PostTags({ tags, selectedFilter, selectFilter }: Props) {
  return (
    <div className="text-center">
      <Text level="2" weight="fontSemibold">
        Categories
      </Text>
      <div className="flex items-center justify-center py-6">
        {tags?.map((tag, index) => {
          const isActive = tag === selectedFilter;
          return (
            <div key={index} className="mx-2">
              <Badge
                text={tag}
                onClick={() => selectFilter(tag)}
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
