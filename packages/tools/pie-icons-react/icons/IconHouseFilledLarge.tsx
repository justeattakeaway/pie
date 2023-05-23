import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconHouseFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--house-filled-large", className, iconSize, "IconHouseFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M17.488 5.027a2.993 2.993 0 0 0-3.002 0c-4.375 2.8-11.305 10.098-11.611 10.37l1.269 1.207s.918-.954 2.231-2.249v13.02h19.25v-13.02a102.43 102.43 0 0 1 2.214 2.249l1.286-1.208c-.306-.271-7.245-7.569-11.637-10.369Zm-3.054 16.914a1.566 1.566 0 1 1 3.132 0v3.684h-3.132v-3.684Z" /></svg>;
};
export default IconHouseFilledLarge;