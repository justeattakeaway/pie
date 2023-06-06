import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconMoped = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--moped", className, iconSize, "IconMoped");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M14.072 9.802a2.354 2.354 0 0 0-1.697-.682c.06-.31.06-.627 0-.936l-1.75-5.872A1.514 1.514 0 0 0 9.102 1.22H6.355L7.02 2.53h2.082a.228.228 0 0 1 .21.158l1.75 5.871a1.102 1.102 0 0 1-.559 1.296c-.152.076-.32.115-.49.113H8.63l-.7-2.503a1.54 1.54 0 0 0-1.487-1.164H2.75a1.54 1.54 0 0 0-1.531 1.532v3.447h1.33a2.354 2.354 0 0 0 .691 1.916 2.39 2.39 0 0 0 3.395 0 2.353 2.353 0 0 0 .691-1.916h2.625v.219a2.406 2.406 0 1 0 4.104-1.698h.018ZM5.708 12.27a1.094 1.094 0 0 1-1.818-.456 1.059 1.059 0 0 1-.02-.533h2.135a1.059 1.059 0 0 1-.298.989ZM2.53 9.969V7.834a.219.219 0 0 1 .219-.219h3.692a.236.236 0 0 1 .22.184l.603 2.17H2.531Zm10.614 2.301a1.103 1.103 0 0 1-1.54 0 1.094 1.094 0 1 1 1.54 0Z" /></svg>;
};
export default IconMoped;