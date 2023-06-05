import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconReview = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--review", className, iconSize, "IconReview");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M12.375 1.219h-8.75A1.54 1.54 0 0 0 2.094 2.75v7.875a1.54 1.54 0 0 0 1.531 1.531h1.628L8 14.904l2.748-2.748h1.627a1.54 1.54 0 0 0 1.531-1.531V2.75a1.54 1.54 0 0 0-1.531-1.531Zm.219 9.406a.219.219 0 0 1-.219.219h-2.17L8 13.049l-2.205-2.205h-2.17a.219.219 0 0 1-.219-.219V2.75a.219.219 0 0 1 .219-.219h8.75a.219.219 0 0 1 .219.219v7.875ZM8.814 5.83l1.82.263L9.32 7.379l.306 1.811L8 8.341l-1.628.875.307-1.811-1.304-1.313 1.82-.262L8 4.185l.814 1.645Z" /></svg>;
};
export default IconReview;