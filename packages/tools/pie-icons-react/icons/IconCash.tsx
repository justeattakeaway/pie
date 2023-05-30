import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCash = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--cash", className, iconSize, "IconCash");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M14.781 2.969H3.844v2.625H1.219v6.562h10.937V9.531h2.625V2.97Zm-3.937 7.875H2.53V6.906h1.313v2.625h7v1.313Zm2.625-2.625H5.156V4.28h8.313V8.22ZM8.219 6.25a1.094 1.094 0 1 1 2.187 0 1.094 1.094 0 0 1-2.187 0Z" /></svg>;
};
export default IconCash;