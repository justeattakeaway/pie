import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconSend = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--send", className, iconSize, "IconSend");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M14.457 1.525a.937.937 0 0 0-.665-.271.665.665 0 0 0-.297.052L1.814 5.13a.936.936 0 0 0 0 1.75l2.047.875v4.454h4.305L9.13 14.3a.936.936 0 0 0 .83.516h.045a.945.945 0 0 0 .83-.621L14.65 2.558a.936.936 0 0 0 .061-.342.918.918 0 0 0-.254-.691ZM3.257 6.04l8.322-2.73-4.585 4.27-3.737-1.54Zm1.9 4.804V8.219l.778.324.726.332.263.578.638 1.4-2.406-.01Zm4.75 1.96L7.94 8.499l4.873-4.541-2.905 8.846Z" /></svg>;
};
export default IconSend;