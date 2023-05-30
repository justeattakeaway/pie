import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconRestaurantMenu = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--restaurant-menu", className, iconSize, "IconRestaurantMenu");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M12.375 2.094h-8.75a1.54 1.54 0 0 0-1.531 1.531v10.281h11.812V3.625a1.54 1.54 0 0 0-1.531-1.531Zm.219 10.5H3.406V3.625a.219.219 0 0 1 .219-.219h8.75a.219.219 0 0 1 .219.219v8.969Z" /><path fill="#242E30" d="M10.625 7.668a2.625 2.625 0 0 0-2.196-2.144.437.437 0 1 0-.875 0 2.625 2.625 0 0 0-2.135 2.144 2.478 2.478 0 0 0 0 .437v.438h5.25v-.438a2.48 2.48 0 0 0-.044-.438Z" /><path fill="#242E30" d="M10.625 9.645h-5.25v1.313h5.25V9.644Z" /></svg>;
};
export default IconRestaurantMenu;