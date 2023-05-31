import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconSocialAppleCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--apple-circle-filled", className, iconSize, "IconSocialAppleCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g clipPath="url(#prefix__clip0_1611_720)"><path fill="#242E30" d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 4.541a1.671 1.671 0 0 1 1.312-1.409h.158c.032.267-.013.538-.131.78a1.479 1.479 0 0 1-1.06.874c-.34.088-.332.096-.28-.245Zm3.019 4.034a.47.47 0 0 0 0 .096 4.261 4.261 0 0 1-.954 1.558 1.024 1.024 0 0 1-1.234.175 1.286 1.286 0 0 0-1.312 0c-.193.095-.407.14-.622.131a.875.875 0 0 1-.656-.368 4.541 4.541 0 0 1-1.26-3.167c.005-.328.074-.652.201-.954a1.75 1.75 0 0 1 2.407-.919.928.928 0 0 0 .927 0c.15-.07.305-.13.464-.175a1.943 1.943 0 0 1 1.155.123c.287.108.528.312.682.577-.105.097-.21.175-.306.272a2.014 2.014 0 0 0-.289.323 1.636 1.636 0 0 0 .228 1.917c.15.178.347.311.569.385v.026Z" /></g><defs><clipPath id="prefix__clip0_1611_720"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialAppleCircleFilled;