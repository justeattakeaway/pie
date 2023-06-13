import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFoundations = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--foundations", className, iconSize, "IconFoundations");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_7066_3748)"><path d="M10.739 1.945H5.252v5.486h5.487V1.945ZM9.426 6.119H6.565V3.258h2.861v2.86Z" /><path d="M1.875 14.169h5.486V8.683H1.875v5.486Zm1.313-4.174h2.86v2.861h-2.86V9.995Z" /><path d="M8.621 8.674v5.486h5.486V8.674H8.622Zm4.174 4.174H9.934V9.986h2.861v2.861Z" /></g><defs><clipPath id="prefix__clip0_7066_3748"><rect width={14} height={14} transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconFoundations;