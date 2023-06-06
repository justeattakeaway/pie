import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronRight = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chevron-right", className, iconSize, "IconChevronRight");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M5.044 13.18 10.399 8 5 2.82l.875-.962 5.539 5.346a1.164 1.164 0 0 1 0 1.636l-5.469 5.285-.901-.945Z" /></svg>;
};
export default IconChevronRight;