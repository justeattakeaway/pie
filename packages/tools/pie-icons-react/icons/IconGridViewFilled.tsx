import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconGridViewFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--grid-view-filled", className, iconSize, "IconGridViewFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M2.094 6.906h4.812V2.094H2.094v4.812Z" /><path fill="#242E30" d="M9.094 6.906h4.812V2.094H9.094v4.812Z" /><path fill="#242E30" d="M2.094 13.906h4.812V9.094H2.094v4.812Z" /><path fill="#242E30" d="M9.094 13.906h4.812V9.094H9.094v4.812Z" /></svg>;
};
export default IconGridViewFilled;