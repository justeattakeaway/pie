import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLightningLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--lightning-large", className, iconSize, "IconLightningLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m14.539 3.75-6.93 13.274a1.75 1.75 0 0 0 1.549 2.563h5.967v8.663h2.354l6.904-13.125a1.75 1.75 0 0 0-1.55-2.564h-5.958V3.75H14.54Zm8.295 10.544-5.959 11.331V19.29a1.453 1.453 0 0 0-1.461-1.453H9.158l5.967-11.462v6.431a1.452 1.452 0 0 0 1.453 1.453l6.256.035Z" /></svg>;
};
export default IconLightningLarge;