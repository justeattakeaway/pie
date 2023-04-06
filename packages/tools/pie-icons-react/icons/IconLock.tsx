import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconLock = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--lock", className, iconSize, "IconLock");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M7.344 11.5V8.875h1.312V11.5H7.344Z" /><path fill="#242E30" fillRule="evenodd" d="M3.844 5.375v1.094h-1.75v6.221l.245.201A9.362 9.362 0 0 0 8 14.781a9.205 9.205 0 0 0 5.661-1.89l.245-.201V6.469h-1.75V5.375a4.156 4.156 0 1 0-8.312 0Zm7 0v1.094H5.156V5.375a2.844 2.844 0 1 1 5.688 0Zm-7.438 6.676A8.094 8.094 0 0 0 8 13.47a7.945 7.945 0 0 0 4.594-1.418v-4.27H3.406v4.27Z" clipRule="evenodd" /></svg>;
};
export default IconLock;