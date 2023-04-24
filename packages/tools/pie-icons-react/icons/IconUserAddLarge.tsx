import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconUserAddLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--user-add-large", className, iconSize, "IconUserAddLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><path fill="#242E30" d="M12.5 14.688a4.812 4.812 0 1 0-4.812-4.813 4.821 4.821 0 0 0 4.812 4.813Zm0-7.876a3.062 3.062 0 1 1 0 6.125 3.062 3.062 0 0 1 0-6.124Zm7.359 11.612L18.467 19.5a4.734 4.734 0 0 0-3.788-1.75h-4.375a4.497 4.497 0 0 0-4.288 2.625l-.673 1.75H3.488l.875-2.371A6.247 6.247 0 0 1 10.32 16h4.375a6.535 6.535 0 0 1 5.163 2.424Zm7.516 5.451h-3.5v3.5h-1.75v-3.5h-3.5v-1.75h3.5v-3.5h1.75v3.5h3.5v1.75Z" /></svg>;
};
export default IconUserAddLarge;