"use client";

import { Badge } from "~/components/badge";

type Props = {
  tags: Array<string>;
  selectedFilter: string;
  selectFilter: (tag: string) => void;
};

const TAG_MAP: Record<string, string> = {
  all: "All",
  typescript: "TypeScript",
  generics: "Generics",
  "react-native": "React Native",
};

export function PostTags({ tags, selectedFilter, selectFilter }: Props) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center pb-10">
        {tags?.map((tag, index) => {
          const isActive = () => {
            return tag === selectedFilter;
          };

          return (
            <div key={index} className="mx-2">
              <Badge
                text={TAG_MAP[tag]}
                onClick={() => selectFilter(tag)}
                // TODO: Make this more a11y!
                // @ts-ignore
                tabIndex={index}
                index={index}
                isActive={isActive()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
