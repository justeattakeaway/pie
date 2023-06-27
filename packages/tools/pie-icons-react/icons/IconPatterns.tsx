import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPatterns = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--patterns", className, size, "IconPatterns");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_7066_3739)"><path d="M1.551 14.589h5.662V8.936H1.55v5.653Zm1.313-4.34H5.89v3.027H2.864V10.25Z" /><path d="M6.128 7.624a3.085 3.085 0 0 0 3.08-3.08 3.085 3.085 0 0 0-3.08-3.08 3.085 3.085 0 0 0-3.08 3.08 3.085 3.085 0 0 0 3.08 3.08Zm0-4.848c.97 0 1.767.796 1.767 1.768 0 .971-.796 1.767-1.767 1.767A1.774 1.774 0 0 1 4.36 4.544c0-.971.796-1.768 1.768-1.768Z" /><path d="m11.203 4.544-3.334 6.343h6.676l-3.334-6.343h-.008Zm0 2.817 1.163 2.214H10.04l1.164-2.214Z" /></g><defs><clipPath id="prefix__clip0_7066_3739"><rect width={14} height={14} transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconPatterns;