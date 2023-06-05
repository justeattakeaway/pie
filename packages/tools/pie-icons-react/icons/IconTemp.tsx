import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconTemp = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--temp", className, iconSize, "IconTemp");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M10.992 8V4.124A2.957 2.957 0 0 0 8 1.219a2.958 2.958 0 0 0-2.992 2.905V8a3.964 3.964 0 0 0-1.164 2.783A4.104 4.104 0 0 0 8 14.78a4.104 4.104 0 0 0 4.156-4.034A3.963 3.963 0 0 0 10.992 8ZM8 13.469a2.78 2.78 0 0 1-2.844-2.721 2.625 2.625 0 0 1 .937-2.004l.227-.193V4.124A1.645 1.645 0 0 1 8 2.53a1.645 1.645 0 0 1 1.68 1.593V8.55l.228.193a2.626 2.626 0 0 1 .936 2.004A2.784 2.784 0 0 1 8 13.468Zm1.313-2.406a1.312 1.312 0 1 1-1.97-1.13V6.25h1.313v3.684a1.304 1.304 0 0 1 .656 1.129Z" /></svg>;
};
export default IconTemp;