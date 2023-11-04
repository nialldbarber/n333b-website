import { Children } from "react";
import flattenChildren from "react-flatten-children";

import type { Space } from "~/styles/space";

type Props = {
  margin?: Space;
  gutter?: Space;
  children: React.ReactNode;
};

export default function Stack({
  margin = "0px",
  gutter = "0px",
  children: childProp,
  ...rest
}: Props) {
  const children = flattenChildren(childProp);

  return (
    <div style={{ margin }} {...rest}>
      {Children.map(children, (child, index) => {
        const first = index === 0;
        const last = index === children.length - 1;

        return (
          <div
            style={{
              paddingTop: first ? "0px" : gutter,
              paddingBottom: last ? "0px" : gutter,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
