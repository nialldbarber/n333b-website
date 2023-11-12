import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "~/lib/style/cn";

const skeletonVariants = cva("bg-gray-200 dark:bg-gray-700", {
  variants: {
    type: {
      line: "",
      circle: "",
    },
    height: {
      xsmall: "h-1 mb-4",
      small: "h-3 mb-4",
      medium: "h-5 mb-4",
      large: "h-7 mb-4",
      xlarge: "h-10 mb-4",
    },
    radius: {
      full: "rounded-full",
      none: "rounded-none",
    },
  },
  defaultVariants: {
    type: "line",
    height: "medium",
    radius: "full",
  },
});

interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  block?: number;
  width?: string;
}

export function Skeleton({
  block = 1,
  width = "100%",
  height,
  radius,
  className,
}: SkeletonProps) {
  return (
    <div role="status" className="animate-pulse w-full">
      {[...Array(block)].map((_, index) => (
        <div key={index}>
          <div
            className={cn(skeletonVariants({ height, radius, className }))}
            style={{ width }}
          />
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}
