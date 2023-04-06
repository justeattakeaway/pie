import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconFries = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--fries", className, iconSize, "IconFries");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M12.769 5.725a.639.639 0 0 0-.648-.079l.674-2.152L11.5 3.1l-.875 3.036c-.297.07-.586.131-.875.175l.543-5.031-1.313-.149-.604 5.311H7.72L7.195 1.5l-1.313.14.508 4.69c-.306 0-.621-.105-.875-.175L4.5 2.619l-1.269.341.727 2.721h-.106a.647.647 0 0 0-.874.683l.778 6.238a1.531 1.531 0 0 0 1.514 1.34h5.46a1.531 1.531 0 0 0 1.514-1.34l.779-6.238a.63.63 0 0 0-.254-.639Zm-1.82 6.65a.227.227 0 0 1-.219.193H5.27a.227.227 0 0 1-.219-.193L4.412 7.23c2.336.735 4.84.735 7.176 0l-.64 5.145Z" /></svg>;
};
export default IconFries;