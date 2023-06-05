import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronDoubleLeft = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--chevron-double-left", className, iconSize, "IconChevronDoubleLeft");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8.25 2.82 2.895 8l5.399 5.197-.875.963-5.565-5.364a1.164 1.164 0 0 1 0-1.671l5.495-5.25.901.945Z" /><path fill="#242E30" d="M13.22 2.82 7.865 8l5.399 5.197-.875.963-5.565-5.364a1.164 1.164 0 0 1 0-1.671l5.495-5.25.901.945Z" /></svg>;
};
export default IconChevronDoubleLeft;