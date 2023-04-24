import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconChevronUp = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--chevron-up", className, iconSize, "IconChevronUp");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M13.18 10.97 8 5.615l-5.18 5.399-.962-.875 5.346-5.565a1.164 1.164 0 0 1 1.671 0l5.25 5.495-.945.901Z" /></svg>;
};
export default IconChevronUp;