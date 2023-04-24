import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconLei = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--lei", className, iconSize, "IconLei");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M2.978 4.299H4.28v7.096H2.978V4.299Zm7.402 4.576a2.4 2.4 0 0 1-.053.455H6.706A1.26 1.26 0 0 0 8 10.363a1.627 1.627 0 0 0 1.225-.473l.805.77A2.624 2.624 0 0 1 8 11.5a2.484 2.484 0 0 1-2.625-2.625A2.432 2.432 0 0 1 7.869 6.25a2.415 2.415 0 0 1 2.511 2.625Zm-1.295-.464a1.138 1.138 0 0 0-1.199-.997 1.12 1.12 0 0 0-1.19.997h2.389Zm2.415 2.984h1.304v-4.97H11.5v4.97Zm.648-5.539a.753.753 0 1 0-.78-.743.736.736 0 0 0 .745.743h.035Z" /></svg>;
};
export default IconLei;