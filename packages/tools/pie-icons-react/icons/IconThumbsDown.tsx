import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconThumbsDown = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--thumbs-down", className, iconSize, "IconThumbsDown");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M14.204 6.906 13.18 3.625a2.406 2.406 0 0 0-2.24-1.54H1.875v1.312H4.5a9.082 9.082 0 0 0-.131 1.61c-.003.781.067 1.56.21 2.328H1.875v1.312h4.314a.21.21 0 0 1 .183.105l2.503 5.154h.989a1.793 1.793 0 0 0 1.75-2.135l-.464-2.415 1.96-.481a1.514 1.514 0 0 0 .963-.726 1.557 1.557 0 0 0 .13-1.243Zm-1.269.569a.236.236 0 0 1-.14.105l-3.176.814.726 3.64a.473.473 0 0 1-.455.56h-.14L7.562 8.13a1.575 1.575 0 0 0-1.338-.787h-.272a10.99 10.99 0 0 1-.236-2.328 8.05 8.05 0 0 1 .14-1.61h5.084a1.076 1.076 0 0 1 1.006.674l1.007 3.22a.218.218 0 0 1-.018.175Z" /></svg>;
};
export default IconThumbsDown;