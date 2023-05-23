import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconBagLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--bag-large", className, iconSize, "IconBagLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M13.375 17.75h5.25l1.75-1.75v-3.5h-1.75V16h-5.25v-3.5h-1.75V16l1.75 1.75Z" /><path fill="#242E30" d="M25.625 8.125h-5.25v-3.5l-1.75-1.75h-5.25l-1.75 1.75v3.5h-5.25l-.788 18.253a2.625 2.625 0 0 0 1.584 2.535c.326.14.678.212 1.033.212h15.592a2.626 2.626 0 0 0 1.899-.814 2.624 2.624 0 0 0 .718-1.933l-.788-18.253Zm-12.25-3.5h5.25v3.5h-5.25v-3.5Zm11.051 22.479a.873.873 0 0 1-.63.271H8.204a.876.876 0 0 1-.875-.875l.796-16.625h15.75l.761 16.625a.874.874 0 0 1-.21.604Z" /></svg>;
};
export default IconBagLarge;