import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconGridViewFilled = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--grid-view-filled", className, size, "IconGridViewFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M2.094 6.906h4.812V2.094H2.094v4.812Z" /><path d="M9.094 6.906h4.812V2.094H9.094v4.812Z" /><path d="M2.094 13.906h4.812V9.094H2.094v4.812Z" /><path d="M9.094 13.906h4.812V9.094H9.094v4.812Z" /></svg>;
};
export default IconGridViewFilled;