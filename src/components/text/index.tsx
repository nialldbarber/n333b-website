import { createElement } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { isNumber } from "~/lib/isNumber";

export const textVariants = cva("leading-7", {
  variants: {
    variant: {},
    level: {
      "1": "capsize text-2xl lg:text-5xl",
      "2": "capsize text-3xl",
      "3": "capsize text-2xl",
      "4": "capsize text-xl",
      "5": "capsize",
      "6": "capsize text-sm",
      p: "capsize",
      span: "text-base inline",
      b: "text-base",
      strong: "text-base",
      em: "text-base",
      code: "text-base",
      large: "capsize text-9xl",
      highlight: "border border-dashed border-red-500",
    },
    weight: {
      fontThin: "font-thin",
      fontExtralight: "font-extralight",
      fontLight: "font-light",
      fontNormal: "font-normal",
      fontMedium: "font-medium",
      fontSemibold: "font-semibold",
      fontBold: "font-bold",
      fontExtrabold: "font-extrabold",
      fontBlack: "font-black",
    },
  },
  defaultVariants: {
    level: "p",
    weight: "fontNormal",
  },
});

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export function Text({
  variant,
  className,
  level = "p",
  weight,
  children,
  ...rest
}: TextProps) {
  if (level === "highlight") {
    return (
      <span className="relative inline-block">
        <span className="text-black before:content-[' '] before:block before:absolute before:w-full before:h-[95%] before:bg-yellow before:rounded-[20%_25%_20%_24%] before:top-0 before:left-0 before:p-[10px_3px_3px_10px] before:transform-rotate-[2deg] before:ml-[-3px] before:mr-[-3px] before:-z-10">
          {children}
        </span>
      </span>
    );
  }

  const T = level && isNumber(level) ? `h${level}` : level;

  if (!T) {
    return (
      <p className={textVariants({ variant, level, weight, className })}>
        {children}
      </p>
    );
  }

  return createElement(
    T,
    { ...rest, className: textVariants({ variant, level, weight, className }) },
    children
  );
}
