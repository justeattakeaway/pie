import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconAppOrder = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--app-order", className, iconSize, "IconAppOrder");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M3.406 2.75v10.5a.219.219 0 0 0 .219.219h1.75v1.312h-1.75a1.54 1.54 0 0 1-1.531-1.531V2.75a1.54 1.54 0 0 1 1.531-1.531h7a1.54 1.54 0 0 1 1.531 1.531V4.5h-1.312V2.75a.219.219 0 0 0-.219-.219h-1.75l-.402.954H5.777l-.402-.954h-1.75a.219.219 0 0 0-.219.219Zm10.5 10.5a1.54 1.54 0 0 1-.411 1.137 1.172 1.172 0 0 1-.875.386H7.746a1.171 1.171 0 0 1-.875-.386 1.532 1.532 0 0 1-.402-1.137l.324-5.049H8V6.906l1.304-1.303h1.75l1.321 1.303V8.22h1.207l.324 5.031ZM9.312 8.219h1.75V6.906h-1.75V8.22Zm3.282 5.101-.219-3.789H8l-.219 3.806a.263.263 0 0 0 0 .158h4.743a.457.457 0 0 0 .07-.175Z" /></svg>;
};
export default IconAppOrder;