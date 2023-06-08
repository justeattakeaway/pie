import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconThumbsDownFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--thumbs-down-filled", className, iconSize, "IconThumbsDownFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M4.404 5.016c-.01 1.234.17 2.461.534 3.64H1.874V2.094h2.992a8.085 8.085 0 0 0-.463 2.922Zm9.8 1.89L13.18 3.625a2.406 2.406 0 0 0-2.24-1.54H6.25a6.685 6.685 0 0 0-.569 2.922 9.984 9.984 0 0 0 .648 3.737l2.546 5.162h.402a1.75 1.75 0 0 0 1.75-2.135l-.402-2.389 2.45-.507a1.531 1.531 0 0 0 1.191-1.338 1.558 1.558 0 0 0-.062-.63Z" /></svg>;
};
export default IconThumbsDownFilled;