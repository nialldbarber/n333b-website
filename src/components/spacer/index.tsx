import type { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "~/lib/style/cn";
import { space, type Space } from "~/styles/space";

const orientationVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "w-full",
      vertical: "h-auto w-1",
    },
  },
  defaultVariants: {},
});

interface OrientationProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof orientationVariants> {
  paddingVertical?: Space;
  paddingHorizontal?: Space;
}

export function Spacer({
  orientation,
  paddingVertical,
  paddingHorizontal,
  className,
}: OrientationProps) {
  return (
    <div
      style={{
        paddingTop: paddingVertical ? space[paddingVertical] : 0,
        paddingBottom: paddingVertical ? space[paddingVertical] : 0,
        paddingLeft: paddingHorizontal ? space[paddingHorizontal] : 0,
        paddingRight: paddingHorizontal ? space[paddingHorizontal] : 0,
      }}
      className={cn(orientationVariants({ orientation, className }))}
    />
  );
}
