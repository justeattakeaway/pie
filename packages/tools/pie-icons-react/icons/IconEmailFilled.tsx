import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconEmailFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--email-filled", className, iconSize, "IconEmailFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_1597_534)"><path d="m9.392 8.971-.945.875a.647.647 0 0 1-.884 0l-.98-.875-4.559 4.13c.168.064.346.097.525.096h10.903c.116.014.233.014.35 0l-4.41-4.226Z" /><path d="M14.852 12.375c.108-.214.165-.451.166-.691V4.36a1.671 1.671 0 0 0-.114-.595l-4.55 4.314 4.498 4.296Z" /><path d="M1.088 3.809A1.47 1.47 0 0 0 1 4.36v7.28c0 .224.052.445.15.647L5.602 8.08l-4.515-4.27Z" /><path d="m8 8.472 5.915-5.6a1.61 1.61 0 0 0-.463-.07H2.549c-.176.002-.35.031-.516.088L8 8.472Z" /></g><defs><clipPath id="prefix__clip0_1597_534"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconEmailFilled;