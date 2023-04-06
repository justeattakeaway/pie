import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconEyeOffFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--eye-off-filled-large", className, iconSize, "IconEyeOffFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="m24.82 10.899-.621.612-3.491 3.492c.07.327.105.662.105.997A4.821 4.821 0 0 1 16 20.813a4.71 4.71 0 0 1-.997-.105l-2.205 2.213-.692.683-.665.665a11.323 11.323 0 0 0 12.583-2.363L29.92 16l-5.1-5.101Z" /><path fill="#242E30" d="m18.958 16.753-2.205 2.204a3.064 3.064 0 0 0 2.205-2.204Z" /><path fill="#242E30" d="m13.909 19.325.647-.639 4.13-4.13.64-.647.638-.63 2.362-2.363.613-.621.621-.613L27.743 5.5h-2.477L22.17 8.598a11.375 11.375 0 0 0-14.193 1.496L2.08 16l5.897 5.906c.15.149.307.28.464.42L4.266 26.5h2.468l3.141-3.098 1.278-1.277 2.17-2.161.586-.639ZM11.188 16A4.821 4.821 0 0 1 16 11.187a4.76 4.76 0 0 1 2.721.876l-.63.638-.647.639a3.046 3.046 0 0 0-4.13 4.13l-.639.648-.639.638A4.803 4.803 0 0 1 11.188 16Z" /></svg>;
};
export default IconEyeOffFilledLarge;