import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconThumbsUpFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--thumbs-up-filled", className, iconSize, "IconThumbsUpFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M4.867 13.906H1.875V7.344h3.063a12.058 12.058 0 0 0-.534 3.64c-.027.994.13 1.985.463 2.922Zm9.206-6.028a1.53 1.53 0 0 0-.998-.753l-2.45-.507.473-2.39a1.75 1.75 0 0 0-1.75-2.134h-.473L6.372 7.239a9.984 9.984 0 0 0-.647 3.736 6.685 6.685 0 0 0 .525 2.931h4.655a2.407 2.407 0 0 0 2.275-1.531l1.024-3.272a1.558 1.558 0 0 0-.132-1.225Z" /></svg>;
};
export default IconThumbsUpFilled;