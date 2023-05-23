import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconComponents = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--components", className, iconSize, "IconComponents");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_7066_3730)"><path d="M11.903 5.025 8.928 8l2.975 2.975L14.878 8l-2.975-2.975ZM10.783 8l1.12-1.12L13.023 8l-1.12 1.12L10.783 8Z" /><path d="M10.975 4.098 8 1.123 5.025 4.098 8 7.073l2.975-2.975ZM8 2.978l1.12 1.12L8 5.218l-1.12-1.12L8 2.978Z" /><path d="M5.025 11.903 8 14.878l2.975-2.975L8 8.928l-2.975 2.975ZM8 13.023l-1.12-1.12L8 10.783l1.12 1.12L8 13.023Z" /><path d="M4.098 5.025 1.123 8l2.975 2.975L7.073 8 4.098 5.025ZM2.978 8l1.12-1.12L5.218 8l-1.12 1.12L2.978 8Z" /></g><defs><clipPath id="prefix__clip0_7066_3730"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconComponents;