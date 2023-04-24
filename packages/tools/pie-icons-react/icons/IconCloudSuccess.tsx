import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconCloudSuccess = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--cloud-success", className, iconSize, "IconCloudSuccess");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_15_608)"><path fill="#242E30" d="M12.016 13.189H4.378A3.378 3.378 0 0 1 1 9.81 3.342 3.342 0 0 1 2.969 6.75a5.18 5.18 0 0 1 10.176.682 2.992 2.992 0 0 1-1.129 5.758ZM8 4.124a3.859 3.859 0 0 0-3.815 3.22l-.061.394-.385.113a2.039 2.039 0 0 0-1.426 1.96 2.065 2.065 0 0 0 2.065 2.065h7.638a1.68 1.68 0 0 0 .359-3.316l-.499-.114V7.93A3.885 3.885 0 0 0 8 4.124Zm-.289 5.985 2.826-3.054-.962-.875L7.02 8.875 6.189 8l-.989.875 1.129 1.269a.947.947 0 0 0 .691.297.92.92 0 0 0 .691-.332Z" /></g><defs><clipPath id="prefix__clip0_15_608"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconCloudSuccess;