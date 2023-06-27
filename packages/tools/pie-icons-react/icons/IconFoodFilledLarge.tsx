import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFoodFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--food-filled-large", className, size, "IconFoodFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M28.25 24.986a2.625 2.625 0 0 1-2.625 2.389h-3.36A6.903 6.903 0 0 0 23 24.05V23h.875a.875.875 0 0 0 .875-.875v-3.5a.875.875 0 0 0-.875-.875h-1.041v-.184c-.639-2.878-3.124-5.118-6.51-6.125l-.525-5.066h6.326V3.75h-3.5V2h5.25v4.375H30l-1.75 18.611Zm-21-5.74c.433.015.855-.143 1.172-.437a6.694 6.694 0 0 1 4.078-1.313 6.729 6.729 0 0 1 4.086 1.313 1.75 1.75 0 0 0 2.337 0 7.052 7.052 0 0 1 2.222-1.059v-.044c-.665-3.001-4.27-5.206-8.645-5.206s-7.98 2.223-8.619 5.25c.788.228 1.53.59 2.196 1.067.32.293.74.447 1.173.43Zm10.5 5.25a6.782 6.782 0 0 1-4.086-1.312 1.61 1.61 0 0 0-1.173-.438 1.6 1.6 0 0 0-1.163.438 6.782 6.782 0 0 1-4.087 1.312 6.459 6.459 0 0 1-3.491-.918v.297c0 4.454 2.809 5.25 8.75 5.25s8.75-.788 8.75-5.25v-.332a6.431 6.431 0 0 1-3.5.953Zm-10.5-1.75a5.032 5.032 0 0 0 3.115-1.023 3.334 3.334 0 0 1 2.135-.727 3.343 3.343 0 0 1 2.144.727 5.25 5.25 0 0 0 6.221 0A3.342 3.342 0 0 1 23 20.995v-1.75a5.075 5.075 0 0 0-3.115 1.024 3.5 3.5 0 0 1-4.279 0 5.03 5.03 0 0 0-3.106-1.024 5.022 5.022 0 0 0-3.106 1.024 3.343 3.343 0 0 1-2.144.726 3.335 3.335 0 0 1-2.135-.726A5.022 5.022 0 0 0 2 19.246v1.75c.775-.016 1.53.241 2.135.727a5.023 5.023 0 0 0 3.115 1.023Z" /></svg>;
};
export default IconFoodFilledLarge;