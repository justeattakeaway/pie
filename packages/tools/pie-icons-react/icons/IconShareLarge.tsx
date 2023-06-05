import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconShareLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--share-large", className, iconSize, "IconShareLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M23.5 18.25a3.75 3.75 0 0 0-3.165 1.755L12.13 16.9c.074-.294.114-.596.12-.9a4.007 4.007 0 0 0-.12-.9l8.205-3.105A3.75 3.75 0 1 0 19.75 10c.005.199.025.397.06.592L11.5 13.75a3.749 3.749 0 1 0 0 4.5l8.332 3.15c-.043.198-.07.398-.082.6a3.75 3.75 0 1 0 3.75-3.75Zm0-10.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm-15 10.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm15 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" /></svg>;
};
export default IconShareLarge;